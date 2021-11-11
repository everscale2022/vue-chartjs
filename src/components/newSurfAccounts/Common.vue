<template>
  <div id="buttons" class="text-center"> 
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>        
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {newSurfAccounts} from "../../api/newSurfAccounts";

export default    {
  data() {
    return {
      chartData: null,
      loading_graphic: true      
    };
  },
  components: {
    chart,
  },
   mounted() {
    newSurfAccounts().then((r)=>{
     this.chartData = r;
     this.loading_graphic= false;
    });        
  },
};
</script>