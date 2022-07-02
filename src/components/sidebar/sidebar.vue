<template>
  <div>
    <b-sidebar id="sidebar-1" title="Charts" shadow>     
      <b-nav vertical class="w-100" tabs>
          <b-nav-item> <router-link  to="/accounts">Surf accounts balances</router-link></b-nav-item>
          <b-nav-item><router-link to="/blocks">Blocks</router-link></b-nav-item>
          <b-nav-item><router-link to="/transactions">Transactions</router-link>       </b-nav-item>
          <b-nav-item><router-link to="/surfAndSafeMultisigTransactionsCount">Surf and SafeMultisig transactions count</router-link>   </b-nav-item>    
          <b-nav-item><router-link to="/dailyTransactionsCount">Daily transactions count</router-link>      </b-nav-item>     
          <b-nav-item><router-link to="/StakesGiversUsers">All assets</router-link></b-nav-item>
          <b-nav-item><router-link to="/surfTransactionsVolumes">Surf transactions volumes</router-link></b-nav-item>
          <b-nav-item><router-link to="/allTransactionsVolumes">All transactions volumes</router-link></b-nav-item>
          <b-nav-item><router-link to="/spentTokensFromGivers">Spent tokens from givers</router-link>     </b-nav-item>
          <b-nav-item><router-link to="/coldTons">Cold evers</router-link>         </b-nav-item>
          <b-nav-item><router-link to="/Stakes-vs-Free-Circulation">Stakes vs. Free circulation</router-link>     </b-nav-item>
          <b-nav-item><router-link to="/newSurfAccounts">Surf Accounts</router-link>     </b-nav-item>
          <b-nav-item><router-link to="/exchanges">Exchanges activity</router-link></b-nav-item>
          <b-nav-item><router-link to="/providers">Providers</router-link>    </b-nav-item>
          <b-nav-item><router-link to="/btcSpots">BTC SPOTS</router-link>    </b-nav-item>
      </b-nav>            
    </b-sidebar>
  </div>
</template>