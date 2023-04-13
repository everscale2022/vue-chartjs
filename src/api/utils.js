const oneTon = 1_000_000_000;
const oneDay = 24 * 60 * 60;
const oneWeek = 7 * oneDay;
const oneMonth = Math.round(30.5 * oneDay);
const surfCodeHash = "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82";
const safeMultisigCodeHash = "80d6c47c4a25543c9b397b71716f3fae1e2c5d247174c52e2c19bd896442b105";
const depoolV3CodeHash = "14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885";
const depoolBroxusCodeHash = "533adf8a5680849177b9f213f61c48dfd8d730597078670d2367a5eef77251fe";
const electorCodeHash = "cb6eb312df8187a61e386563f4643c14cad2b98360ce0d9e78da49467188a66f";
const exchanges = [
    {
        "Bitcoin-hitbtc": [
            "0:363ab410d2972bdfac97506a021bb616c9f93b4fc2d2dfa23706e26bd7334336",
            "0:0d46b0b1f76581b893d7002a58cd72f7844aa05eca318d0f353a623da6c3615d",
        ]
    },
    { "bitrue.com": "0:dea68d5ba2998b48ffd98e8bc3c8b1716aaa2a41fe3ca6c40a1dd9a3d9334e88" },
    // { "cex.io": "0:ff72a20b00b647eb536bf2f9e7f5f07bc20ff5d6a93342e81e39d6db7e20fe59" }, delisted
    { "Coin-Galaxy.com": "0:0dc78eee043a0c1d301552ac0b3c131a22c7212189a646b10a0059aef3515e9b" },
    {
        "coineal.com": [
            "0:0dd48e220aef64f79fd563e150be51d12515623b6344da03c97e70ef6801a139",
            "0:a0c77f59b513c41f9d93a2e2144625cab74983c6da4afa0ddcbdee0e36c3efff"
        ]
    },
    { "coins.black": "0:e9c6d46c7f8fa0f13221dd221db51d6aac7e51a2b75d65dad81dc1ce2fbd285e" },
    { "digifinex.asia": "0:a7cba00b37563e504d879338f09594a4be88f240b016843c1ad03a11538d0a9b" },
    { "gate.io": "0:3addd84bf73267312a477049fd9b8db761bf39c585c150f8e6f9451347af2b6c" },
    { "kuna.io": "0:af22c44fc447f8497219969d6faed49894584f0de66a208956aec20c1ed47530" },
    {
        "mexc.com": [
            "0:3e32e9fe51f9309e6859114a4d43792f21eaae25b277f43ba029f601e3443734",
            "0:d99c8ba078cc1a84adefb3e27e175415d6190889c4b67aebaf30f01f8df2658d"]
    },
    { "broxus_bot": "0:4677beb06991e23f7f7a54b54232a572ce87461548463ef4cb7e443946526e1c" },
    { "chatex_bot": "0:066c96b9e6a23b8caa8cb24ef91991bfa11b2d4c3033f14f521b2be972a7e189" },

]

function direction(value) {
    if (value > 0) {
        return '↘';
    }
    return '↖';
}

function whale(amount) {
    if (amount > 10_000_000_000_000) {
        return '🐳';
    }
    return '';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function findExchangeName(a) {
    var name;
    exchanges.forEach((value) => {
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

function exchangesAddresses() {
    var addresses = [];
    exchanges.forEach((value) => {
        let addr = Object.values(value)[0];
        if (Array.isArray(addr)) {
            addr.forEach(value => {
                addresses.push(value);
            })
        } else {
            addresses.push(addr);
        }
    });
    return addresses;
}


const now = Math.round(Date.now() / 1000);

function formatTime(timeSeconds) {
    return ((new Date(timeSeconds * 1000)).toLocaleString());
}

function interval(i, period) {
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    let lt = Math.round(start / 1000) - (i - 1) * period;
    let gt = lt - period;
    // if (i == 0) {
    //     lt = now;
    //     gt = Math.round(start / 1000);
    // }
    return { gt, lt };
}
const givers = [
    "0:bbbc10a327b488d307a7907ae315fa4fdf39ebbd18e4f0f9b7d394e9324ea89e", //unknown
    "0:e9aebc8820c7b83b3994dc5bb0521f799dff1d914253b1bde212c483891fe9e5",//crystal hands
    "0:2b5fc4e526a2fdf9ab812add4695d1c3e22d9a7419348eb4d4e97a1720f42696", //initials KPI
    "0:751c942f8007676064dd24c83001e5c377ad00fb8275cd6f88a3c808930f818e", //initials KPI2,
    "-1:9999999999999999999999999999999999999999999999999999999999999999", //validator treasury
    "-1:7777777777777777777777777777777777777777777777777777777777777777", //refferral treasury
    "0:9866223b02bf2dfbc7a3164a06fd31b577466f5a6e35a065cd80db2b6f920c4e", //foundation
    "-1:8888888888888888888888888888888888888888888888888888888888888888", //developer treasury
    "0:def1001c0d21f7c4531ea8b1522be9b76793deedb544d4c2d93633a082cc41b9", //other crystall hands
    "0:3de70f9212154344a3158768b3fed731fc865ca15948b0d6d0d34daf4c6a7a0a", //extrastakes donor
    "0:eabd38806e244f941f0611aef85d8ab06dd9289cb2495153e9561153c08dc4d5", //rust cup donor
]

const burner = "-1:efd5a14409a8a129686114fc092525fddd508f1ea56d1b649a3a695d3a5b188c";

module.exports = {
    oneTon,
    oneDay,
    oneWeek,
    oneMonth,
    surfCodeHash,
    safeMultisigCodeHash,
    depoolV3CodeHash,
    depoolBroxusCodeHash,
    electorCodeHash,
    now,
    exchanges,
    direction,
    getRandomColor,
    whale,
    findExchangeName,
    formatTime,
    interval,
    exchangesAddresses,
    givers,
    burner
}