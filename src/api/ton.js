const { TonClient, AggregationFn } = require("@tonclient/core");
const { libWeb } = require("@tonclient/lib-web");

//const { libWeb } = require("@tonclient/lib-node");
TonClient.useBinaryLibrary(libWeb);
const client = new TonClient({
    network: {
        server_address: "main.ton.dev",
    }
});
const netCollection = async (handle) => {
    await client.net.subscribe_collection(
        {
            collection: "blocks",
            result: "id gen_utime gen_utime_string tr_count "
        },
        (d) => {
            handle(d);
        })
}

const netBlocks = async (interval = 15) => {
    let operations = [];
    let labels = [];
    let gt = Math.round(Date.now() / 1000) - (60*1);
    for (let i = 0; i < 10; i++) {
        let lt = gt;
        gt = lt - interval * 60;
        let labelDate = new Date(lt * 1000)
        labels.push(('0' + labelDate.getHours()).slice(-2) + ':' + ('0' + labelDate.getMinutes()).slice(-2));
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
                return Math.floor(value[0] / (interval * 60) * 100)/100
            }).reverse(),
            labels: labels.reverse()
        }
    } catch (e) {
        console.log(e);
    }
}

const netTransactions = async (interval = 15) => {
    let operations = [];
    let labels = [];
    let gt = Math.round(Date.now() / 1000) - (60*1);
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
                created_at:{
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
const netAccounts = async() => {  
    let operations = [];
    let labels = [
        "0-1",
        "1-100",
        "100-1000",
        "1000-10000",
        "10000 и более"
    ];
    let values = [
        {
            gt:"0",
            lt:"1000000000"
        },
        {
            gt:"1000000000",
            lt:"100000000000"
        },
        {
            gt:"100000000000",
            lt:"1000000000000"
        },
        {
            gt:"1000000000000",
            lt:"10000000000000"
        },        
        {
            gt:"10000000000000",  
            lt:"100000000000000000"          
        }
    ]      
    values.forEach(value => {           
            operations.push({
            type: "AggregateCollection",
            collection: "accounts",
            fields: [
                {
                    field: "",
                    fn: AggregationFn.COUNT
                }
            ],
            filter: {
                code_hash:{
                    eq: "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"
                },
                balance:{
                     gt: value.gt,
                     lt: value.lt
                }
            }
        })
    }); 
    try {
        const response = await client.net.batch_query({
            operations
        });
        return {
            accounts: response.results.map(value =>{
                return value[0]
            }),
            labels
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    netCollection,
    netBlocks,
    netTransactions,
    netAccounts
}