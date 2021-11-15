<template>
  <div class="text-center">
  <div class="text-success h4"> + Evers to exchange — Evers from exchange</div>
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>        
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {kunaActivity} from "../../api/kunaActivity";

export default {
  data() {
    return {
      chartData: null,
      loading_graphic: true,
      loading_table: true
    };
  },
  components: {
    chart,
  },
   mounted() {
    kunaActivity().then((r)=>{
     this.chartData = r;
     this.loading_graphic= false;
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