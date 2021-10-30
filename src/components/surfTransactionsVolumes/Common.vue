<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading">Data loading ...</div>
    </div>   
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {surfTransactionsVolumes} from "../../api/surfTransactionsVolumes";

export default {
  data() {
    return {
      chartData: null,
      loading: true
    };
  },
  components: {
    chart,
  },
   mounted() {
    surfTransactionsVolumes().then((r)=>{
     this.chartData = r;
     this.loading= false;
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