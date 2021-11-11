const { client } = require("./client/webClient");
const utils = require("./utils");


function makeQuery() {
    let query = '{';
    for (let index = 12; index >= 0; index--) {
        let lt = utils.now - index * utils.oneMonth;
       // let gt = lt - utils.oneMonth;
        query += `
            data_${lt}: aggregateAccounts(
                filter: {      
                last_paid: { lt: ${lt}}                               
                code_hash:{
                    eq: "${utils.surfCodeHash}"
                }                
                }
                fields: [{ fn: COUNT }]
            )
          `;
    }
    query += '}';  
    return query;
}

const newSurfAccounts = async () => {
    let accounts = [];
    let labels = [];

    try {
        let response =  (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            accounts.push(value[0]);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);    
        }     
        return {
            datasets: [
                {
                    label: "New Surf accounts",
                    backgroundColor: "lightblue",
                    data: accounts,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    newSurfAccounts
}