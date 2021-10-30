
const { AggregationFn, client } = require("./client/webClient");
const commaNumber = require('comma-number');
const utils = require('./utils');

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
                    utils.depoolCodeHash,
                    utils.electorCodeHash
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
        const DepoolsAssets = Math.round(response.results[0][0] / utils.oneTon);
        const GiversAssets = Math.round(response.results[1][0] / utils.oneTon);
        const TotalAssets = Math.round(response.results[2][0] / utils.oneTon);
        const UsersAssets = TotalAssets - GiversAssets - DepoolsAssets;

        const DepoolsAssetsPersents = Math.round(DepoolsAssets / TotalAssets * 100);
        const GiversAssetsPersents = Math.round(GiversAssets / TotalAssets * 100);
        const UsersAssetsPersents = Math.round(UsersAssets / TotalAssets * 100);
        return {
            assets: [
                DepoolsAssets,
                GiversAssets,
                UsersAssets
            ],
            labels: [
                `DEPOOLS: ${commaNumber(DepoolsAssets)} TON (${DepoolsAssetsPersents})%`,
                `GIVERS: ${commaNumber(GiversAssets)} TON (${GiversAssetsPersents})%`,
                `FREE CIRCULATION: ${commaNumber(UsersAssets)} TON (${UsersAssetsPersents})%`
            ]
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    depoolsGiversUsers
}