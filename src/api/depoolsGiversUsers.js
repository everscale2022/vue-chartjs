
const { AggregationFn, client } = require("./webClient");

const depoolsGiversUsers = async () => {
    const Depools =
    {
        type: "AggregateCollection",
        collection: "accounts",
        fields: [
            {
                field: "balance",
                fn: AggregationFn.SUM
            }
        ],
        filter: {
            code_hash: {
                in: [
                    "14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885",
                    "e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a"
                ]
            }
        }
    };
    const Givers =
    {
        type: "AggregateCollection",
        collection: "accounts",
        fields: [
            {
                field: "balance",
                fn: AggregationFn.SUM
            }
        ],
        filter: {
            id: {
                in: [
                    "-1:7777777777777777777777777777777777777777777777777777777777777777",
                    "-1:8888888888888888888888888888888888888888888888888888888888888888",
                    "-1:9999999999999999999999999999999999999999999999999999999999999999"
                ]
            }
        }
    }

    const Total = {
        type: "AggregateCollection",
        collection: "accounts",
        fields: [
            {
                field: "balance",
                fn: AggregationFn.SUM
            }
        ]
    }

    const operations = [Depools, Givers, Total];

    try {
        const response = await client.net.batch_query({
            operations
        });
        const oneTon = 1_000_000_000;
        const depoolsAssets = Math.round(response.results[0][0] / oneTon);
        const TotalAssets = Math.round(response.results[2][0] / oneTon);

        const giversAssets = Math.round(response.results[1][0] / oneTon);
        const usersAssets = Math.round((Number(response.results[2][0]) - Number(response.results[1][0]) - Number(response.results[0][0])) / oneTon);

        const depoolsAssetsPersents = Math.round(depoolsAssets / TotalAssets * 100);
        const giversAssetsPersents = Math.round(giversAssets / TotalAssets * 100);
        const usersAssetsPersents = Math.round(usersAssets / TotalAssets * 100);
        return {
            assets: [
                depoolsAssets,
                giversAssets,
                usersAssets
            ],
            labels: [
                `DEPOOLS: ${depoolsAssets} TON (${depoolsAssetsPersents})%`,
                `GIVERS: ${giversAssets} TON (${giversAssetsPersents})%`,
                `FREE CIRCULATION: ${usersAssets} TON (${usersAssetsPersents})%`
            ]
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    depoolsGiversUsers
}