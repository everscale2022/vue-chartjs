
const { AggregationFn, client } = require("./client/webClient");
const commaNumber = require('comma-number');
const utils = require('./utils');

const depoolsGiversUsers = async () => {
    const Burning =
    {
        type: "QueryCollection",
        collection: "accounts",
        filter: {
            code_hash: {
                eq: "d80dd077e56dd76af65b163b6da94cca9d2c8e62740d09d98f9a4459ac069958",
            },
        },
        result: "balance(format:DEC)",
    }
        ;
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

    const lostTons = (await client.net.query({
        "query": `        
            {aggregateAccounts(
            filter:{      
              acc_type: {
                ne: 1
              }              
            }
            fields:[
              {field: "balance", fn: SUM}
            ]
          )}
        ` })).result.data.aggregateAccounts[0];

    const operations = [Burning, Depools, Givers, Total];

    try {
        const response = await client.net.batch_query({
            operations
        });
        const BurningAssets = Math.round(response.results[0][0].balance / utils.oneTon);
        const DepoolsAssets = Math.round(response.results[1][0] / utils.oneTon);
        const GiversAssets = Math.round(response.results[2][0] / utils.oneTon);
        const TotalAssets = Math.round(response.results[3][0] / utils.oneTon);
        const LostTonsAssets = Math.round(lostTons / utils.oneTon);
        const UsersAssets = TotalAssets - GiversAssets - DepoolsAssets - BurningAssets - LostTonsAssets;
 
        const BurningAssetsPercents = Math.round(BurningAssets / TotalAssets * 100);
        const DepoolsAssetsPercents = Math.round(DepoolsAssets / TotalAssets * 100);
        const GiversAssetsPercents = Math.round(GiversAssets / TotalAssets * 100);
        const UsersAssetsPercents = Math.round(UsersAssets / TotalAssets * 100);
        const LostTonsPercents = Math.round(LostTonsAssets / TotalAssets * 100);

        return {
            assets: [
                BurningAssets,
                DepoolsAssets,
                GiversAssets,
                UsersAssets,
                LostTonsAssets
            ],
            labels: [
                `BURNING: ${commaNumber(BurningAssets)} TON (${BurningAssetsPercents})%`,
                `DEPOOLS: ${commaNumber(DepoolsAssets)} TON (${DepoolsAssetsPercents})%`,
                `GIVERS: ${commaNumber(GiversAssets)} TON (${GiversAssetsPercents})%`,
                `FREE CIRCULATION: ${commaNumber(UsersAssets)} TON (${UsersAssetsPercents})%`,
                `LOST TONS: ${commaNumber(LostTonsAssets)} TON (${LostTonsPercents})%`
            ]
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    depoolsGiversUsers
}