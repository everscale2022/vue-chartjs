const { TonClient, AggregationFn } = require("@eversdk/core");
const { libNode } = require("@eversdk/lib-node");

TonClient.useBinaryLibrary(libNode)

const client = new TonClient({
    network: {
        endpoints: ["https://mainnet.evercloud.dev/bdaca70fc675471b95b4b953d4c040ee/graphql"]
    }
});

module.exports = {
    AggregationFn,
    client
}