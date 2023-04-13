<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>       
    <div class="text-center h5 mt-4">{{totalAmount}}</div>
    <div class="text-center h5 mt-4">{{totalAccounts}}</div>
     <b-table fixed striped hover :items="items"></b-table>
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {coldTons, coldTonsSum, coldTonsAccounts, totalAccountsCount} from "../../api/coldTons";

export default {
  data() {
    return {
      chartData: {},
      loading_graphic: true,
      loading_table: true,
      totalAmount: null,
      totalAccounts: null,
      items: []
    };
  },
  components: {
    chart,
  },
   mounted() {
    coldTons().then((r)=>{     
     this.chartData = r;
     this.loading_graphic= false;
    });     
    coldTonsSum().then((r)=>{     
     this.totalAmount = `Total amount: ${r} tons`;     
    });  
    coldTonsAccounts().then((r)=>{     
     this.items = r;     
    }); 
    totalAccountsCount().then((r)=>{     
     this.totalAccounts = `Total accounts: ${r}`;     
    });        
  },
};
</script>
<style scoped>
#buttons span {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>