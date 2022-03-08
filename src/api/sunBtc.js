const fetch = require("node-fetch");
// const utils = require("./utils");

const binanceData = async (startTime, limit) => {
    let response = await fetch(`https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1d&limit=${limit}&startTime=${startTime}`);
    let txt = await response.text()
    let data = JSON.parse(txt).map(d => {
        return {
            // 'Opentime': d[0],
            // 'Open': d[1],
            // 'High': d[2],
            // 'Low': d[3],
            // 'Close': d[4],
            // 'Volume': d[5],
            // 'Closetime': d[6],
            // 'Quote asset volume': d[7],
            // 'Number of trades': d[8],
            // 'Taker by base': d[9],
            // 'Taker buy quote': d[10],
            // 'Ignore': d[11]
            diff: (Number(d[2]) - Number(d[3])),
            date: d[0],
            price: d[2],
            volume: d[5]        
        }
    });

    return data;
};


const spotData = async () => {   
    let response = await fetch(`https://data.opendatasoft.com/api/records/1.0/search/?dataset=daily-sunspot-number%40datastro&`+
                               `q=&sort=column_4&facet=year_month_day&rows=100`);
    let txt = await response.text()
    return JSON.parse(txt).records.map(r => ({
        avg_spots: r.fields.column_5,
        date: r.fields.year_month_day
    }))

}

const getData = async () => {
    let sunSpot = await spotData();
    sunSpot = sunSpot.reverse();
    let startTime = Date.parse(sunSpot[0].date);
    console.log(sunSpot)
    const binance = await binanceData(startTime, sunSpot.length);    
    return {
        datasets: [
            {
                label: "Sun spots",              
                yAxisID: "Sun spots",
                data: sunSpot.map(v => v.avg_spots),
                borderColor: "orange",
                fill: false
            },
            {
                label: "BTC price changed",
                yAxisID: "BinanceDiff",              
                data: binance.map(v => v.diff),
                borderColor: "brown",
                fill: false
            },
            {
                label: "BTC price",
                yAxisID: "BinancePrice",              
                data: binance.map(v => v.price),
                borderColor: "red",
                fill: false
            },
            {
                label: "Volume trades",
                yAxisID: "BinanceVolume",              
                data: binance.map(v => v.volume),
                borderColor: "blue",
                fill: false
            },
        ],
        labels: sunSpot.map(v => v.date)
    }
}
// console.log(getData());
module.exports = {
    getData
}

