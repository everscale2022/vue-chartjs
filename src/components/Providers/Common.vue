<template>
  <div id="buttons" class="text-center" style="max-width:600px; margin: 0 auto;">
    <div>
      <chart :chart-data="chartData" />     
    </div>  
    <div class="text-success mb-3 mt-4" >       
        <span>Updated: 02.01.2022 <br>        
        Nodes from one provider can be located in different continents</span>
    </div>      
  </div>
</template>
<script>
import chart from "./Chart.vue";
import { providers } from "../../api/providers";
import { getRandomColor } from "../../api/utils";
export default {
  data() {
    return {
      chartData: null,   
      colors: null
    };
  },
  components: {
    chart,
  },
   mounted() {
    providers().then((r)=>{
        console.log(r)
        this.colors = r.labels.map(()=>{
            return getRandomColor();
        })
        this.chartData = {
        labels: r.labels,
        datasets: [
          {
            label: "Providers (counted by ips)",
            backgroundColor: this.colors,
            data: r.assets,
          },
        ],
      }
    });
  }
}
</script>
