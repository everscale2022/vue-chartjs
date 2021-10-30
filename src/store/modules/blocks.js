import {netBlocks} from '../../api/netBlocks.js'

export default {
    state:{
        dataBlocks: null
    },
    actions:{
        async fetchBlocksData({commit}, interval = 15){
            let blockData = await netBlocks(interval);           
            commit('setDataBlocks', blockData)
        }
    },
    mutations:{
        setDataBlocks(state, data){
            state.dataBlocks = {
                labels: data.labels,
                datasets: [
                  {
                    label: "Average blocks in second",
                    backgroundColor: "#f87979",
                    data: data.bps,
                  },
                ],
              }
        }
    },
    getters:{
        getDataBlocks(state){
            return state.dataBlocks
        }
    },    
}