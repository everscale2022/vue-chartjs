<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
	extends: Line,
	mixins: [reactiveProp],
	data() {	
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
							id: "BinanceDiff",
							type: "linear",
							position: "right",						
						},
						{
							id: "BinancePrice",
							type: "linear",
							position: "right",						
						},
						{
							id: "BinanceVolume",
							axis: 'volume',
							type: "linear",
							position: "left",						
						},
						{
							id: "Moon",
							axis: 'volume',
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
