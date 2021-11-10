
const { stakesGiversUsers } = require("./stakesGiversUsers");
const commaNumber = require('comma-number');
const stakesFreeCirculationProportion = async () => {
    const response = await stakesGiversUsers();

    const TotalAssets = response.assets[1] + response.assets[3];
    const StakesAssetsPercents = Math.round(response.assets[1] / TotalAssets * 100);
    const UsersAssetsPercents = Math.round(response.assets[3] / TotalAssets * 100);
    return {
        assets: [
            response.assets[1],
            response.assets[3],
        ],
        labels: [
            `STAKES: ${commaNumber(response.assets[1])} EVERs(${StakesAssetsPercents})%`,
            `FREE CIRCULATION: ${commaNumber(response.assets[3])} EVERs(${UsersAssetsPercents})%`,
        ],
        TotalAssets: commaNumber(TotalAssets)
    }
}

 module.exports = {
     stakesFreeCirculationProportion
 }
//stakesFreeCirculationProportion();