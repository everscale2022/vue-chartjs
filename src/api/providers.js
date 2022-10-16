const { Account } = require("@eversdk/appkit");
const { TonClient } = require("@eversdk/core");
const { libWeb, libWebSetup } = require("@eversdk/lib-web");

libWebSetup({
    binaryURL: "./eversdk.wasm",
});
TonClient.useBinaryLibrary(libWeb)

const client = new TonClient({
    network: {
        endpoints: ["https://mainnet.evercloud.dev/bdaca70fc675471b95b4b953d4c040ee/graphql"],
    }
});

const providers = async () => {
    const contractData = require("./GeoIpContractData.json");
    try {
        const account = new Account(contractData, { address: "0:39ce9401b4e3cde3c21d9c97fc8c1e6b48d100b031e1e8c24331345f283b5862", client });
        const response = await account.runLocal("coords", {});
        const points = response.decoded.out_messages[0].value.coords.map(p => {
            return {
                latitude: p.lat,
                longitude: p.long,
                asnOrganization: p.asnOrganization
            }
        })
        let obj = {};

        points.filter(p => {
            return p.ip !== '109.199.165.33'
        });

        points.map(p=>{
            let key = p.asnOrganization;
            if(obj[key] !== undefined){
                obj[key]++;
            }else{
                obj[p.asnOrganization] = 1;
            }
        })
        obj['Other'] = 0;
        for(var p in obj){
            if(obj[p] < 2){
                delete obj[p];
                obj['Other']++;
            }
        }
        const labels = Object.keys(obj);
        
        const assets = Object.values(obj);
        const total = assets.reduce((a,b)=>a+b);
        assets.map((v,i)=>{
            let p = Math.round(v / total * 100);
            labels[i] += `: ${p}%`; 
        })
        return {
            assets,
            labels
        }
    } catch (e) {
        console.log(`response is: ${JSON.stringify(e, null, 4)}`);
    }
};


module.exports = {
    providers
}


// providers()