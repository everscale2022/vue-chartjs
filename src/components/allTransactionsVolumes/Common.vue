<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>   
     <div class="h5 mt-4">Last big(>1000 tons) NOT Surf transactions</div>
       <div class="h5 text-info" v-show="loading_table">Data loading ...</div>
      <b-table striped hover :items="items"></b-table>
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {allTransactionsVolumes,lastBiggestTransactions} from "../../api/allTransactionsVolumes";

export default {
  data() {
    return {
      chartData: {},
      loading_graphic: true,
      loading_table: true
    };
  },
  components: {
    chart,
  },
   mounted() {
    allTransactionsVolumes().then((r)=>{
     this.chartData = r;
     this.loading_graphic= false;
    });     
    lastBiggestTransactions().then((r)=>{
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