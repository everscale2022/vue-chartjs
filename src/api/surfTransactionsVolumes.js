const { client } = require("./client/webClient");
const utils = require("./utils");
const commaNumber = require('comma-number');

function makeQuery() {
    let query = '{';
    for (let index = 14; index >= 0; index--) {
        let i = utils.interval(index, utils.oneDay);
        query += `
            data_${i.gt}: aggregateTransactions(
                filter: {      
                now: { gt: ${i.gt} lt: ${i.lt}}
                balance_delta:{                    
                    gt: "0"                    
                }
                account:{
                code_hash:{
                    eq: "${utils.surfCodeHash}"
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

const surfTransactionsVolumes = async () => {
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
                    label: "Surf transactions volumes",
                    backgroundColor: utils.getRandomColor(),
                    data: volumes,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

const lastBiggestSurfTransactions = async () => {
    let lt = utils.now;
    let gt = lt - utils.oneDay*3;
    let query = `
    query {
        transactions(
          filter: {
            now: { gt: ${gt}, lt: ${lt} }
            balance_delta: { gt: "1000000000000" }
            account: {
              code_hash: {
                eq: "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"
              }
            }
          }
          orderBy: { path: "now", direction: DESC }
        ) {
          id
          balance_delta(format: DEC)
          now
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
                'Time': utils.formatTime(v.now),
                'Tokens': `${commaNumber(Math.round(v.balance_delta / 1_000_000_000))} EVERs`
            }
        });
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    surfTransactionsVolumes,
    lastBiggestSurfTransactions
}