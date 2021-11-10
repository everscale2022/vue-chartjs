<script>
import { Pie } from "vue-chartjs";
import { stakesGiversUsers } from "../api/stakesGiversUsers";
export default {
  extends: Pie,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "All assets",
          fontSize: 25,
          fontStyle: "normal",
        },
      },
    };
  },
  async mounted() {     
    const data = await stakesGiversUsers();        
      this.renderChart(
      {
        labels: data.labels,
        datasets: [
          {
            label: "All assets in EverScale: Stakes, Givers, Burned Free circulation",
            backgroundColor: ["#e25822","green", "blue", "pink", "black"],
            data: data.assets,
          },
        ],
      },
      this.options
    );
  },
};
</script>