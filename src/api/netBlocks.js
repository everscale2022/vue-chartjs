const { AggregationFn, client } = require("./client/webClient");
const netBlocks = async (interval = 15) => {
    let operations = [];
    let labels = [];
    let gt = Math.round(Date.now() / 1000) - (60 * 1);
    for (let i = 0; i < 10; i++) {
        let lt = gt;
        gt = lt - interval * 60;
        let labelDate = new Date(lt * 1000)
        labels.push(`${('0' + labelDate.getHours()).slice(-2)}:${('0' + labelDate.getMinutes()).slice(-2)}`);
        operations.push({
            type: "AggregateCollection",
            collection: "blocks",
            fields: [
                {
                    field: "",
                    fn: AggregationFn.COUNT
                }
            ],
            filter: {
                gen_utime: {
                    gt,
                    lt
                }
            }
        })
    }
    try {
        const response = await client.net.batch_query({
            operations
        });
        return {
            bps: response.results.map((value) => {
                return Math.floor(value[0] / (interval * 60) * 100) / 100
            }).reverse(),
            labels: labels.reverse()
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    netBlocks
}