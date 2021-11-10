<script>
import { Doughnut } from "vue-chartjs";
import { stakesFreeCirculationProportion } from "../../api/stakesFreeCirculationProportion";
export default {
  extends: Doughnut,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Stakes vs. Free Circulation",
          fontSize: 25,
          fontStyle: "normal",
        },
      },
    };
  },
  async mounted() {   
      const data = await stakesFreeCirculationProportion();        
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

        var text = data.TotalAssets;        
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
            label: "Stakes vs. Free Circulation", 
            backgroundColor: ["blue", "pink"],
            data: data.assets,
          },
        ],
      },      
      this.options
    ); 
  }
};
</script>