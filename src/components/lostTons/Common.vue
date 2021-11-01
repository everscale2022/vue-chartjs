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
import {lostTons, lostTonsSum, lostTonsAccounts, totalAccountsCount} from "../../api/lostTons";

export default {
  data() {
    return {
      chartData: null,
      loading_graphic: true,
      loading_table: true,
      totalAmount: null,
      totalAccounts: null
    };
  },
  components: {
    chart,
  },
   mounted() {
    lostTons().then((r)=>{     
     this.chartData = r;
     this.loading_graphic= false;
    });     
    lostTonsSum().then((r)=>{     
     this.totalAmount = `Total amount: ${r} tons`;     
    });  
    lostTonsAccounts().then((r)=>{     
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