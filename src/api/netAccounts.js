const { AggregationFn, client } = require("./client/webClient");

const netAccounts = async () => {
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
            gt: "0",
            lt: "1000000000"
        },
        {
            gt: "1000000000",
            lt: "100000000000"
        },
        {
            gt: "100000000000",
            lt: "1000000000000"
        },
        {
            gt: "1000000000000",
            lt: "10000000000000"
        },
        {
            gt: "10000000000000",
            lt: "100000000000000000"
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
                code_hash: {
                    eq: "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"
                },
                balance: {
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

        let data = {
            accounts: response.results.map(value => {
                return value[0]
            }),
            labels
        }
        let totalAccounts = 0;
        for (let i = 0; i < data.accounts.length; i++) {
            totalAccounts += Number(data.accounts[i]);
        }
        data.labels = data.labels.map((value, index) => {
            return `${value} ${Math.round(data.accounts[index] / totalAccounts * 100)}%`;
        })

        return data;
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    netAccounts
}