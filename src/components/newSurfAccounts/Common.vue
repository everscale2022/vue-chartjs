<template>
  <div id="buttons" class="text-center"> 
    <div>
      <chart :chart-data="chartData" />
      <div class="h3 text-info" v-show="loading_graphic">Data loading ...</div>
    </div>
    <div>
      <span class="btn btn-info" @click="fmonth"> Month(default) </span>
      <span class="btn btn-info" @click="fweek"> Week </span>
      <span class="btn btn-info" @click="fday"> Day </span>
    </div>        
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {newSurfAccounts} from "../../api/newSurfAccounts";
import utils from "../../api/utils";

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
  methods: {
    async fmonth() {
     this.chartData = await newSurfAccounts(utils.oneMonth, 12);    
    },
   async fweek() {    
       this.chartData = await newSurfAccounts(utils.oneWeek, 30);       
   },
   async fday() {       
        this.chartData = await newSurfAccounts(utils.oneDay, 30);
    },
  }
};
</script>
<style scoped>
#buttons span {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>