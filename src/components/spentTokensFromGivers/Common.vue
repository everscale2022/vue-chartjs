<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading">Data loading ...</div>
    </div>   
    <div>
    <b-table striped hover :items="items"></b-table>
  </div>
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {spentTokensFromGivers, lastTransactionsFromGivers} from "../../api/spentTokensFromGivers";

export default {
  data() {
    return {
      chartData: null,
      loading: true,
      items:[]
    };
  },
  components: {
    chart,
  },
   mounted() {
    spentTokensFromGivers().then((r)=>{
     this.chartData = r;
     this.loading= false;
    });
    lastTransactionsFromGivers().then((r)=>{
      this.items = r;
      console.log(r);
      
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