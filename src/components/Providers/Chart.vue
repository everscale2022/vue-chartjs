<script>
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Pie,
  mixins: [reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "Providers popularity",
          fontSize: 25,
          fontStyle: "normal",
        },
      },
    };
  },
  async mounted() {        
      this.renderChart(
      this.chartData,
      this.options
    );
  },
};
</script>