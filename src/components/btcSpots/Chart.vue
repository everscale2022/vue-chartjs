<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
	extends: Line,
	mixins: [reactiveProp],
	data() {
		/*
    ,
        options:{
            y: {
                type: 'linear',
                display: true,
                position: 'left',
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
        
                // grid line settings
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
              },            
        }*/
		return {
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					labels: {
						fontSize: 25,
					},
				},
				scales: {
					yAxes: [
						{
							id: "Sun spots",
							type: "linear",
							position: "left",
						},
						{
							id: "Binance",
							type: "linear",
							position: "right",						
						},
					],
				},
			},
		};
	},
	async mounted() {
		this.renderChart(this.chartData, this.options);
	},
};
</script>
