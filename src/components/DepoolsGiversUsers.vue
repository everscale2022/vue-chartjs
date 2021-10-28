<script>
import { Pie } from "vue-chartjs";
import { depoolsGiversUsers } from "../api/ton";
export default {
  extends: Pie,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "All assets in TON",
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
            label: "Все средства в ТОН: депулы, гиверы, свободное обращение",
            backgroundColor: ["green", "blue", "red"],
            data: data.assets,
          },
        ],
      },
      this.options
    );
  },
};
</script>