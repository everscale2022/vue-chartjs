<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
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
    };
  },
  components: {
    chart,
  },
   mounted() {
    surfTransactionsVolumes().then((r)=>{
     this.chartData = r;
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