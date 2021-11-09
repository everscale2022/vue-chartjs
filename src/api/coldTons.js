const { client } = require("./client/webClient");
const utils = require("./utils");
const commaNumber = require('comma-number');

function makeQuery() {
    let query = '{';
    for (let index = 30; index >= 0; index--) {
        let lt = utils.now - index * utils.oneWeek;
        let gt = lt - utils.oneWeek;
        query += `      
        data_${lt}: aggregateAccounts(
            filter:{      
              acc_type: {
                ne: 1
              }
              last_paid:{
                gt: ${gt}  lt: ${lt}
              }
            }
            fields:[
              {field: "balance", fn: SUM}
            ]
          )         
          `;
    }
    query += '}';
    return query;
}

const coldTons = async () => {
    let volumes = [];
    let labels = [];

    try {
        let response = (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(Math.round(value[0] / utils.oneTon));
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }
        return {
            datasets: [
                {
                    label: "cold tons",
                    backgroundColor: "lightgray",
                    data: volumes,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

const coldTonsSum = async () => {
    try {
        let response = (await client.net.query({
            "query": `        
            {aggregateAccounts(
            filter:{      
              acc_type: {
                ne: 1
              }              
            }
            fields:[
              {field: "balance", fn: SUM}
            ]
          )}
        ` })).result.data.aggregateAccounts[0];
        return commaNumber(Math.round(response / utils.oneTon));
    } catch (e) {
        console.log(e);
    }
}

const totalAccountsCount = async () => {
    try {
        return (await client.net.query({
            "query": `        
            {aggregateAccounts(
            filter:{      
              acc_type: {
                ne: 1
              }              
            }
            fields:[
              {field: "balance", fn: COUNT}
            ]
          )}
        ` })).result.data.aggregateAccounts[0];
    } catch (e) {
        console.log(e);
    }
}

const coldTonsAccounts = async () => {
    try {
        let response = (await client.net.query({
            "query": `        
        query{
            accounts(filter:{
              acc_type:{
                ne: 1
              }
            }
            orderBy:{
              path: "balance",
              direction: DESC
            }){
              id
              balance(format:DEC)
            }
          }          
        ` })).result.data.accounts;
        return response.map((v) => {
            return {
                'Address': v.id,
                'Balance': `${commaNumber(Math.round(v.balance / utils.oneTon))} tons`
            }
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    coldTons,
    coldTonsSum,
    coldTonsAccounts,
    totalAccountsCount
}
//coldTons();