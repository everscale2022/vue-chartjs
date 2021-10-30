const { AggregationFn, client } = require("./client/webClient");

const netTransactions = async (interval = 15) => {
    let operations = [];
    let labels = [];
    let gt = Math.round(Date.now() / 1000) - (60 * 1);
    for (let i = 0; i < 10; i++) {
        let lt = gt;
        gt = lt - interval * 60;
        let labelDate = new Date(lt * 1000)
        labels.push(('0' + labelDate.getHours()).slice(-2) + ':' + ('0' + labelDate.getMinutes()).slice(-2));
        operations.push({
            type: "AggregateCollection",
            collection: "messages",
            fields: [
                {
                    field: "",
                    fn: AggregationFn.COUNT
                }
            ],
            filter: {
                value: {
                    ne: null
                },
                created_at: {
                    lt,
                    gt
                }
            }
        })
    }
    try {
        const response = await client.net.batch_query({
            operations
        });
        return {
            tpm: response.results.map((value) => {
                return value[0] / interval
            }).reverse(),
            labels: labels.reverse()
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports= {
    netTransactions
}