<template>
  <div id="buttons" class="text-center" style="max-width:600px; margin: 0 auto;">
    <div>
      <chart :chart-data="chartData" />     
    </div>  
    <div class="text-success">
        Date: 02.01.2022 <br>        
        Providers (Nodes from one provider can be located in different continents
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
            label: "Providers",
            backgroundColor: this.colors,
            data: r.assets,
          },
        ],
      }
    });
  }
}
</script>
