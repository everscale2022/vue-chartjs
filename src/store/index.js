import Vue from 'vue'
import Vuex from 'vuex'

import blocks from "./modules/blocks"
import transactions from "./modules/transactions"

Vue.use(Vuex)

export default new Vuex.Store({
    actions:{

    },
    mutations:{

    },
    getters:{

    },    
    modules: {
        blocks,
        transactions
    }
})