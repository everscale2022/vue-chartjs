<template>
  <div id="app">
    <div id="nav" class="mb-5">
      <div class="navbar-brand">MainNet</div>
      <router-link to="/accounts">Surf accounts</router-link>
      <router-link to="/blocks">Blocks</router-link>
      <router-link to="/transactions">Transactions</router-link>
      <router-link to="/DepoolsGiversUsers">Depools, Givers, Free Circulation</router-link>
      <router-link to="/surfTransactionsVolumes">Surf transactions volumes</router-link>
    </div>
    <router-view/>
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