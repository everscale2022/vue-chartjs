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
        let lt = utils.now - index * utils.oneDay;
        let gt = lt - utils.oneDay;
        query += `
            data_${lt}: aggregateTransactions(
                filter: {      
                now: { gt: ${gt} lt: ${lt}}                
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

function getExchangesIds(){
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
              now_string
              account_addr
            }
          }`;

    return query;
}

function findExchangeName(a) {
    var name;
    utils.exchanges.forEach((value) => {
        let addr = Object.values(value)[0];
        let key = Object.keys(value)[0];
        if (Array.isArray(addr)) {
            addr.forEach(value => {
                if (value == a) {
                    name = key;
                }
            })
        } else if (addr == a) {
            name = key;
        }
    });
    return name;
}

const lastBiggestExchangeTransactions = async () => {
   let query = transQuery();
    try {
        let response = (await client.net.query({ "query": query })).result.data.transactions;
        return response.map((v) => {
            return { 
                'Transaction id': v.id,              
                'Exchange': findExchangeName(v.account_addr),
                'Time': v.now_string,
                'Tokens': `${utils.direction(v.balance_delta)} ${commaNumber(Math.round(Math.abs(v.balance_delta) / 1_000_000_000))} EVERs`
            }
        });
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
                    label: `Moving Evers on ${name}`,
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

function exchanges(){  
    return  [{"All exchanges": getExchangesIds()}].concat(exchanges);
}

module.exports = {
    exchangesData,
    lastBiggestExchangeTransactions,    
    getExchangesIds,
    exchanges
}