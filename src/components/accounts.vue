<script>
import { Doughnut } from "vue-chartjs";
import { netAccounts, totalBalanceOnSurfAccounts} from "../api/netAccounts";
export default {
  extends: Doughnut,
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
    const balance = await totalBalanceOnSurfAccounts();
    this.addPlugin({
      id: 'Doughnut',
      beforeDraw: function(chart) {
        var width = chart.chart.width;
        var height = chart.chart.height;       
        var ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 314).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = `${balance} EVERs`;        
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height/(1.65);        

         ctx.fillText(text, textX, textY);
         ctx.save();
       }
     });    
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