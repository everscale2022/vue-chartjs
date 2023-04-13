<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
    </div>
    <div>
      <span class="btn btn-info" @click="fmin"> 15 min </span>
      <span class="btn btn-info" @click="fhour"> 1 hour </span>
      <span class="btn btn-info" @click="fday"> 1 day </span>
    </div>
  </div>
</template>
<script>
import chart from "./Chart.vue";
import {netTransactions} from "../../api/netTransactions";
export default {
  data() {
    return {
      chartData: {},
    };
  },
  components: {
    chart,
  },
  methods: {
    async fmin() {
      netTransactions().then(r=>{
      this.chartData = r;
    })
    },
   fhour() {
        netTransactions(60).then(r=>{
        this.chartData = r;
    })
   },
   fday() {
        let interval = 60*24;
        netTransactions(interval).then(r=>{
        this.chartData = r;
    })
    },
  },
  mounted() {
    netTransactions().then(r=>{
      this.chartData = r;
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