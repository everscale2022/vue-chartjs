const { client } = require("./client/webClient");
const utils = require("./utils");
const commaNumber = require('comma-number');

function makeQuery() {
    let query = '{';
    for (let index = 14; index >= 0; index--) {
        let lt = utils.now - index * utils.oneDay;
        let gt = lt - utils.oneDay;
        query += `
            data_${lt}: aggregateTransactions(
                filter: {      
                now: { gt: ${gt} lt: ${lt}}
                balance_delta:{                    
                    gt: "0"                    
                }  
                account:{
                    code_hash:{
                      ne:"207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"
                    } 
                }             
                }
                fields: [{ field: "balance_delta", fn: SUM }]
            )
          `;
    }
    query += '}';  
    return query;
}

const allTransactionsVolumes = async () => {
    let volumes = [];
    let labels = [];

    try {
        let response =  (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(value[0] / utils.oneTon);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }     
        return {
            datasets: [
                {
                    label: "All transactions volumes",
                    backgroundColor: "lightblue",
                    data: volumes,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

const lastBiggestTransactions = async () => {
    let lt = utils.now;
    let gt = lt - utils.oneDay*3;
    let query = `
    query {
        transactions(
          filter: {
            now: { gt: ${gt}, lt: ${lt} }
            balance_delta: { gt: "1000000000000" }           
          }
          orderBy: { path: "now", direction: DESC }
        ) {
          id
          balance_delta(format: DEC)
          now_string
          account_addr
        }
      }   
      `;
    try {
        let response = (await client.net.query({ "query": query })).result.data.transactions;   
        return response.map((v) => {
          return {
              'Transactions ID': v.id,
              'Account address': v.account_addr,
              'Time': v.now_string,
              'Tokens': `${commaNumber(Math.round(v.balance_delta / 1_000_000_000))} EVERs`
          }
      });      
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    allTransactionsVolumes,
    lastBiggestTransactions
}