const { AggregationFn, client } = require("./client/nodeClient");

test('Assets in stakes', async () => {
    const response = await client.net.batch_query({
        operations: [{
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
        }
    ]
});
    expect(typeof response.results[0][0]).toBe("string");
});

test('Assets on Givers', async () => {
    const response = await client.net.batch_query({
        operations: [
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
        ]
    }
    );
    expect(typeof response.results[0][0]).toBe("string");
});

test('All assets', async () => {
    const response = await client.net.batch_query({
        operations: [
            {
                type: "AggregateCollection",
                collection: "accounts",
                fields: [
                    {
                        field: "balance",
                        fn: AggregationFn.SUM
                    }
                ]
            }
        ]
    }
    );    
    expect(typeof Number(response.results[0][0])).toBe("number");
});