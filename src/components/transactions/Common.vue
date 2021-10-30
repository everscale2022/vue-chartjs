<template>
  <div id="buttons" class="text-center">
    <div>
      <chart :chart-data="chartData" />
    </div>
    <div>
      <span class="btn btn-info" @click="fmin"> 15 min </span>
      <span class="btn btn-info" @click="fhour"> 1 hour </span>
    </div>
  </div>
</template>
<script>
import chart from "./Chart.vue";
export default {
  data() {
    return {
      chartData: null,
    };
  },
  components: {
    chart,
  },
  methods: {
    async fmin() {
      await this.$store.dispatch("fetchTransactionsData", 15);
      this.chartData = this.$store.getters.getDataTransactions;
    },
    async fhour() {
      await this.$store.dispatch("fetchTransactionsData", 60);
      this.chartData = this.$store.getters.getDataTransactions;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTransactionsData", 15).then(() => {
      this.chartData = this.$store.getters.getDataTransactions;
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