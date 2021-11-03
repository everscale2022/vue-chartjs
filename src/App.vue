<template>
  <div id="app">
   <div class="navbar-brand mb-3">FreeTON MainNet</div>
    <div id="nav" class="mb-5">   
      <router-link to="/accounts">Surf accounts balances</router-link>
      <router-link to="/blocks">Blocks</router-link>
      <router-link to="/transactions">Transactions</router-link>       
      <router-link to="/surfTransactionsCount">Surf transactions count</router-link>       
    </div>
    <div id="nav" class="mb-5">         
      <router-link to="/DepoolsGiversUsers">Depools, Givers, Free Circulation</router-link>
      <router-link to="/surfTransactionsVolumes">Surf transactions volumes</router-link>
      <router-link to="/spentTokensFromGivers">Spent tokens from givers</router-link>     
      <router-link to="/lostTons">Lost tons</router-link>     
    </div>
     
    <router-view class="mt-4"/>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>