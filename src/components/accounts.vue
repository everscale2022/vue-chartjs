<script>
import { Pie } from "vue-chartjs";
import { netAccounts } from "../api/ton";
export default {
  extends: Pie,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Распределение средств по счетам",
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
            label: "средства на сюрф аккаунтах",
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