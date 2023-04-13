<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
      <div class="h5 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>   
    
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {dailyTransactionsCount} from "../../api/dailyTransactionsCount";

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
     dailyTransactionsCount().then((r)=>{
     this.chartData = r;
     this.loading_graphic = false;
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