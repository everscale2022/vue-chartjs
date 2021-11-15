const oneTon = 1_000_000_000;
const oneDay = 24 * 60 * 60;
const oneWeek = 7 * oneDay;
const oneMonth = Math.round(30.5 * oneDay);
const surfCodeHash = "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82";
const depoolCodeHash = "14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885";
const electorCodeHash = "e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a";
const kunaAccount = "0:af22c44fc447f8497219969d6faed49894584f0de66a208956aec20c1ed47530";
const now = Math.round(Date.now() / 1000);

module.exports = {
    oneTon,
    oneDay,
    oneWeek,
    oneMonth,
    surfCodeHash,
    depoolCodeHash,
    electorCodeHash,
    now,
    kunaAccount
}