<template>
  <div class="text-center">
  <div class="text-success h4"> + Evers to exchange — Evers from exchange</div>
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>      
    <div>     
      <b-dropdown id="dropdown-1" :text="dropdownButton.toUpperCase()" class="m-md-2 mt-5">
        <b-dropdown-item @click="exchange(e)" v-for="e in exchanges" :key="Object.keys(e)[0].toUpperCase()" >
          {{ Object.keys(e)[0].toUpperCase() }}
        </b-dropdown-item>        
      </b-dropdown>
    </div>     
    <div>
      <span class="h1">{{trend}} </span>
      <span v-if="trend!==null">Advantage: {{ total }} Evers</span>
    </div>          
    <div class="mt-3">
      <span v-if="allAssets!==null">Assets: {{ allAssets }} Evers</span>
    </div>
    <div class="h5 mt-4">Last transactions</div>
        <div></div>
        <div class="h5 text-info" v-show="loading_table">Data loading ...</div>
        <b-table striped hover :items="items"></b-table>
    </div>   
</template>
<script>
import chart from "./Chart.vue";
import {exchangesData, lastBiggestExchangeTransactions, getExchangesIds, totalExchangesBalance} from "../../api/exchanges";
const utils = require("../../api/utils");
const commaNumber = require('comma-number');
const exchanges = [{"All exchanges": getExchangesIds()}].concat(utils.exchanges); 

export default {
  data() {
    return {
      chartData: null,
      loading_graphic: true,
      loading_table: true,
      exchanges,
      dropdownButton: "ALL EXCHANGES",
      total: null,
      trend: null,
      allAssets: null
    };
  },
  components: {
    chart,
  },
  methods: {
    async exchange(e) {
      this.loading_graphic = true;
      this.dropdownButton = Object.keys(e)[0];
      this.chartData = await exchangesData(e);
      this.loading_graphic = false;
    },
  },
   mounted() {
     const exchanges = [{"All exchanges": getExchangesIds()}].concat(exchanges); 
     exchangesData(exchanges[0]).then((r)=>{          
     this.dropdownButton =  Object.keys(exchanges[0])[0];
     this.chartData = r;
     this.loading_graphic= false;
    });   
    lastBiggestExchangeTransactions().then((r)=>{
      this.items = r.dataTable;          
      if(r.total < -10000){
        this.trend = '🐂'; 
      }
      if(r.total > 10000){
        this.trend = '🐻'
      }
      this.total = commaNumber(Math.abs(r.total));
      this.loading_table = false;        
    })
    totalExchangesBalance().then((r)=>{
      this.allAssets = r;
    })               
  },
};
</script>
<style scoped>
#buttons span {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>