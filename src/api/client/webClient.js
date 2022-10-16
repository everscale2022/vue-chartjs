const { TonClient, AggregationFn } = require("@eversdk/core");
const { libWeb, libWebSetup } = require("@eversdk/lib-web");


libWebSetup({
    binaryURL: "./eversdk.wasm",
});

TonClient.useBinaryLibrary(libWeb);
const client = new TonClient({
    network: {
        endpoints: ['https://mainnet.evercloud.dev/bdaca70fc675471b95b4b953d4c040ee/graphql']
    }
});

module.exports = {
    AggregationFn,
    client
}