const { client } = require("./client/webClient");
const utils = require("./utils");
const commaNumber = require('comma-number');

function makeQuery() {
    let query = '{';
    for (let index = 12; index >= 0; index--) {        
        let lt = utils.now - index * utils.oneMonth;
        let gt = lt - utils.oneMonth;
        query += `
        data_${lt}: aggregateTransactions(
            filter: {
              account_addr: {
                in:[
                  ${utils.givers.map((giver) => `"${giver}"`).join(",")}
                ] 
              }
              now: { gt: ${gt} lt: ${lt}}
            }
            fields: [{ field: "balance_delta", fn: SUM }]
          )            
          `;
    }
    //console.log(query);
    query += '}';  
    return query;
}

const spentTokensFromGivers = async () => {
    let volumes = [];
    let labels = [];

    try {
        let response = (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(-1*value[0] / utils.oneTon);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }     
        return {
            datasets: [
                {
                    label: "Spent tokens from Givers",
                    backgroundColor:  utils.getRandomColor(),
                    data: volumes,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

const lastTransactionsFromGivers = async ()=>{
    let query = `
    query {
        transactions(
          filter: {
            account_addr: {
              in: [
                ${utils.givers.map((giver) => `"${giver}"`).join(",")}
              ]
            }
            balance_delta: { lt: "-100000000000" }   
            
          } 
          orderBy:{
            path: "now"
            direction: DESC
          }
        ) {
          id
          balance_delta(format: DEC)
          account_addr
          now_string
        }
      }
      `;
      try {
        let response =  (await client.net.query({ "query": query })).result.data.transactions;         
        return response.map((v) => {
            return {
                'Transaction ID': v.id,
                'Giver': v.account_addr,
                'Time': v.now_string,
                'Tokens': commaNumber(Math.round((v.balance_delta * -1)/1_000_000_000))
            }
        });
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    spentTokensFromGivers,
    lastTransactionsFromGivers
}

// spentTokensFromGivers()