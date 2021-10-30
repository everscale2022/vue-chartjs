import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
            {
                path: '/accounts',
                name: 'Accounts',
                component: ()=> import('../components/accounts.vue')
            },
            {
                path: '/blocks',
                name: 'Blocks',
                component: ()=> import('../components/blocks/Common.vue')
            },
            {
                path: '/transactions',
                name: 'Transactions',
                component: ()=> import('../components/transactions/Common.vue')
            },
            {
                path: '/DepoolsGiversUsers',
                name: 'DepoolsGiversUsers',
                component: ()=> import('../components/DepoolsGiversUsers.vue')
            },
            {
                path: '/surfTransactionsVolumes',
                name: 'surfTransactionsVolumes',
                component: ()=> import('../components/surfTransactionsVolumes/Common.vue')
            },
            {
                path: '/spentTokensFromGivers',
                name: 'spentTokensFromGivers',
                component: ()=> import('../components/spentTokensFromGivers/Common.vue')
            }
        ]
    
const router = new VueRouter({
    routes
})

export default router