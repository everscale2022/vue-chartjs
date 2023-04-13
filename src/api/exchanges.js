const { client } = require("./client/webClient");
const utils = require("./utils");
const commaNumber = require('comma-number');

function formatAddr(addr) {
    if (Array.isArray(addr)) {
        return `in:[${addr.map(value => {
            return `"${value}"`;
        }).join(",")}]`;
    } else {
        return `eq: "${addr}"`
    }
}

function exchangeDataQuery(addr) {
    addr = formatAddr(addr);
    let query = '{';
    for (let index = 30; index >= 0; index--) {
        let i = utils.interval(index, utils.oneDay);
        query += `
            data_${i.gt}: aggregateTransactions(
                filter: {      
                now: { gt: ${i.gt} lt: ${i.lt}}                
                account:{
                id:{
                    ${addr}
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

function getExchangesIds() {
    let ids = [];
    utils.exchanges.map((value) => {
        let addr = Object.values(value)[0];
        if (Array.isArray(addr)) {
            addr.map(value => {
                ids.push(value);
            })
        } else {
            ids.push(addr);
        }
    });
    return ids;
}

function transQuery() {
    let ids = getExchangesIds();

    ids = ids.map(value => {
        return `"${value}"`;
    })
    let addr = `in:[${ids.join(',')}]`;
    let lt = utils.now;
    let gt = lt - utils.oneDay * 3;
    let query = `    
        query {
            transactions(
              filter: {
                now: { gt: ${gt}, lt: ${lt} }                
                account: {
                  id: {
                    ${addr}
                  }
                }
              }
              orderBy: { path: "now", direction: DESC }
            ) {
              id
              balance_delta(format: DEC)
              now
              account_addr
            }
          }`;

    return query;
}

const lastBiggestExchangeTransactions = async () => {
    let query = transQuery();
    try {
        let response = (await client.net.query({ "query": query })).result.data.transactions;
        var total = 0;
        const dataTable = response.map((v) => {
            total += Math.round(Number(v.balance_delta) / utils.oneTon);
            return {
                'Transaction id': v.id,
                'Exchange': utils.findExchangeName(v.account_addr).toUpperCase(),
                'Time': utils.formatTime(v.now),
                'Tokens': `${utils.whale(Math.abs(v.balance_delta))} ${utils.direction(v.balance_delta)} ${commaNumber(Math.round(Math.abs(v.balance_delta) / 1_000_000_000))} EVERs`
            }
        });

        return {
            total,
            dataTable
        }
    } catch (e) {
        console.log(e);
    }

}

const exchangesData = async (exchange) => {
    let addr = Object.values(exchange)[0];
    let name = Object.keys(exchange)[0];
    let volumes = [];
    let labels = [];

    try {
        let response = (await client.net.query({ "query": exchangeDataQuery(addr) })).result.data;
        for (const [key, value] of Object.entries(response)) {
            volumes.push(value[0] / utils.oneTon);
            let timestamp = key.split("_")[1];
            let dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");
            labels.push(dt);
        }
        return {
            datasets: [
                {
                    label: `Moving Evers on ${name.toUpperCase()}`,
                    backgroundColor: utils.getRandomColor(),
                    data: volumes,
                },
            ],
            labels
        };
    } catch (e) {
        console.log(e);
    }
}

function exchanges() {
    return [{ "All exchanges": getExchangesIds() }].concat(exchanges);
}

const totalExchangesBalance = async () => {
    let query = `    
    query {
        aggregateAccounts(
          filter: {
            id: {
              in: [${utils.exchangesAddresses().map(value => { return `"${value}"` })}]
            }
          }
          fields: [{ field: "balance", fn: SUM }]
        )
      }
      `;
    let response = (await client.net.query({ "query": query })).result.data.aggregateAccounts[0];
    return commaNumber(Math.round(response / utils.oneTon));
}

module.exports = {
    exchangesData,
    lastBiggestExchangeTransactions,
    getExchangesIds,
    exchanges,
    totalExchangesBalance
}