import { netTransactions } from '../../api/netTransactions'

export default {
    state: {
        dataTransactions: null
    },
    actions: {
        async fetchTransactionsData({ commit }, interval = 15) {
            let blockData = await netTransactions(interval);
            commit('setDataTransactions', blockData)
        }
    },
    mutations: {
        setDataTransactions(state, data) {
            state.dataTransactions = {
                labels: data.labels,
                datasets: [
                    {
                        label: "Average transactons in the minute",
                        backgroundColor: "gray",
                        data: data.tpm,
                    },
                ],
            }
        }
    },
    getters: {
        getDataTransactions(state) {
            return state.dataTransactions
        }
    },
}