
const { depoolsGiversUsers } = require("./depoolsGiversUsers");
const commaNumber = require('comma-number');
const depoolsFreeCirculationProportion = async () => {
    const response = await depoolsGiversUsers();

    const TotalAssets = response.assets[1] + response.assets[3];
    const DepoolsAssetsPercents = Math.round(response.assets[1] / TotalAssets * 100);
    const UsersAssetsPercents = Math.round(response.assets[3] / TotalAssets * 100);
    return {
        assets: [
            response.assets[1],
            response.assets[3],
        ],
        labels: [
            `DEPOOLS: ${commaNumber(response.assets[1])} TON (${DepoolsAssetsPercents})%`,
            `FREE CIRCULATION: ${commaNumber(response.assets[3])} TON (${UsersAssetsPercents})%`,
        ],
        TotalAssets: commaNumber(TotalAssets)
    }
}

 module.exports = {
     depoolsFreeCirculationProportion
 }
//depoolsFreeCirculationProportion();