<template>
  <div id="app">
    <div class="h1 mb-4 text-center"> FreeTON MainNet statistics </div>       
    <blocks/>   
    <transactions class="mt-5"/>
    <accounts class="mt-5"/>
  </div>
</template>

<script>
import blocks from "@/components/blocks/Common.vue";
import transactions from "@/components/transactions/Common.vue";
import accounts from "@/components/accounts.vue";

export default {
  name: "App",
  components: {
    blocks, transactions, accounts
  }, 
};
</script>
