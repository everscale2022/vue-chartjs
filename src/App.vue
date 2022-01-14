<template>
  <div id="app">
    <b-navbar  style="padding-left:3rem" toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#"  v-b-toggle.sidebar-1>Everscale Mainnet</b-navbar-brand>      
    </b-navbar>
   <router-view class="mt-4"/>   

    <Sidebar/>
  </div>
</template>
<script>
import Sidebar from './components/sidebar/sidebar.vue'
export default {
  components:{
    Sidebar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}
</style>