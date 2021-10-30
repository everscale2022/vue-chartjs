const { client } = require("./client/webClient");
const utils = require("./utils");

function makeQuery() {
    let query = '{';
    for (let index = 14; index > 0; index--) {
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
                    eq:"207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"
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
        let response = await (await client.net.query({ "query": makeQuery() })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(value[0] / utils.oneTon);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }
        console.log(volumes);
        return {
            datasets: [
                {
                    label: "Surf transactions volumes",
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

//surfTransactionsVolume();
module.exports = {
    surfTransactionsVolumes
}