<template>
  <div class="text-center">
  <div class="text-success h4"> + Evers to exchange — Evers from exchange</div>
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>      
    <div>     
      <b-dropdown id="dropdown-1" :text="dropdownButton" class="m-md-2 mt-5">
        <b-dropdown-item @click="exchange(e)" v-for="e in exchanges" :key="Object.keys(e)[0]" >
          {{ Object.keys(e)[0] }}
        </b-dropdown-item>        
      </b-dropdown>
    </div>     
    <div class="h5 mt-4">Last (>1000 Evers) transactions</div>
        <div class="h5 text-info" v-show="loading_table">Data loading ...</div>
        <b-table striped hover :items="items"></b-table>
    </div>   
</template>
<script>
import chart from "./Chart.vue";
import {exchangesData, lastBiggestExchangeTransactions} from "../../api/exchanges";
import {exchanges} from "../../api/utils";

export default {
  data() {
    return {
      chartData: null,
      loading_graphic: true,
      loading_table: true,
      exchanges,
      dropdownButton: "Bitcoin-hitbtc"
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
    exchangesData(exchanges[0]).then((r)=>{
     this.dropdownButton =  Object.keys(exchanges[0])[0];
     this.chartData = r;
     this.loading_graphic= false;
    });   
    lastBiggestExchangeTransactions().then((r)=>{
      this.items = r;    
      this.loading_table = false;        
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