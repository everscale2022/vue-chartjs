<template>
  <div id="app">
    <b-navbar  style="padding-left:3rem" toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#"  v-b-toggle.sidebar-1>☰</b-navbar-brand>      
      <b-navbar-brand href="#"  v-b-toggle.sidebar-1>Everscale Mainnet</b-navbar-brand>      
    </b-navbar>
   <router-view class="mt-4"/>   
   <Rocket v-if="isRoute"/>
    <Sidebar/>
  </div>
</template>
<script>
import Sidebar from './components/sidebar/sidebar.vue'
import Rocket from './components/rocket.vue'
export default {
  components:{
    Sidebar,
    Rocket
  },
  computed: {
  isRoute() {
     return this.$route.name === null     
  }
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