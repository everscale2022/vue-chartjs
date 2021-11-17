const { client } = require("./client/webClient");
const utils = require("./utils");

function makeQuery() {
    let query = '{';
    for (let index = 30; index >= 0; index--) {
        let lt = utils.now - index * utils.oneDay;
        let gt = lt - utils.oneDay;
        query += `
            data_${lt}: aggregateTransactions(
                filter: {      
                now: { gt: ${gt} lt: ${lt}}                
                account:{
                id:{
                    eq: "${utils.kunaAccount}"
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

const kunaActivity = async () => {
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
                    label: "Moving Evers on KUNA",
                    backgroundColor: "pink",
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
    kunaActivity  
}