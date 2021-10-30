<script>
import { Pie } from "vue-chartjs";
import { netAccounts } from "../api/netAccounts";
export default {
  extends: Pie,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Tokens on Surf accounts",
          fontSize: 25,
          fontStyle: "normal",
        },
      },
    };
  },
  async mounted() {
    const data = await netAccounts();
      this.renderChart(
      {
        labels: data.labels,
        datasets: [
          {
            label: "Assets on Surf accounts",
            backgroundColor: ["green", "blue", "red", "yellow", "orange"],
            data: data.accounts,
          },
        ],
      },
      this.options
    );
  },
};
</script>