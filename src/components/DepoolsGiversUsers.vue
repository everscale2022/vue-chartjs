<script>
import { Pie } from "vue-chartjs";
import { depoolsGiversUsers } from "../api/depoolsGiversUsers";
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
    const data = await depoolsGiversUsers();        
      this.renderChart(
      {
        labels: data.labels,
        datasets: [
          {
            label: "All assets in EverScale: Depools, Givers, Burned Free circulation",
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