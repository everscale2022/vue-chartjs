const { client } = require("./client/webClient");
const utils = require("./utils");

function makeQuery() {
    let query = '{';
    for (let index = 18; index >= 0; index--) {
        let lt = utils.now - index * utils.oneDay;
        let gt = lt - utils.oneDay;
        query += `
            data_${lt}: aggregateTransactions(
                filter: {      
                now: { gt: ${gt} lt: ${lt}}
                balance_delta:{                    
                    gt: "0"                    
                }                
                }
                fields: [{ field: "balance_delta", fn: COUNT }]
            )
          `;
    }
    query += '}';
    return query;
}

const dailyTransactionsCount = async () => {
    let volumes = [];
    let labels = [];

    try {
        let response = (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(value[0]);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }
        return {
            datasets: [
                {
                    label: "Daily transactions count",
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

module.exports = {
    dailyTransactionsCount   
}