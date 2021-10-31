const { client } = require("./client/webClient");
const utils = require("./utils");

function makeQuery(interval) {
    interval *= 60;
    let query = '{';
    for (let index = 18; index >= 0; index--) {
        let lt = utils.now - index * interval;
        let gt = lt - interval;
        query += `
            data_${lt}: aggregateTransactions(
                filter: {
                  now: { gt: ${gt}, lt: ${lt} }
                  balance_delta: { gt: "0" }      
                }
                fields: [{ field: "balance_delta", fn: COUNT }]
              )
          `;
    }
    query += '}';
    return query;
}

const netTransactions = async (interval = 15) => {
    let data = [];
    let labels = [];

    try {
        let response = (await client.net.query({ "query": makeQuery(interval) })).result.data;
        for (const [key, value] of Object.entries(response)) {
            data.push(Math.round(value[0]/interval));
            let timestamp = key.split("_")[1];
            let dt;
            console.log(interval);
            if(interval >= (24*60)){
               dt = new Date(timestamp * 1000).toLocaleDateString("ru-RU");          
            }else{
               dt = new Date(timestamp * 1000).toLocaleTimeString("ru-RU");
            }
            
            labels.push(dt);
        }
       
        return {
            labels,
            datasets: [
                {
                    label: "Average transactons in the minute",
                    backgroundColor: "gray",
                    data,
                },
            ],
        }   
    } catch (e) {
        console.log(e);
    }
}

  module.exports= {
      netTransactions
  }

//netTransactions(24*60)