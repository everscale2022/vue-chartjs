(function(e){function n(n){for(var r,o,u=n[0],s=n[1],i=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-355d107d":"6191218e","chunk-5dbe3274":"73ef4211","chunk-72091c70":"1cdeb8b2","chunk-ccb19f80":"3c244e44","chunk-f6aded58":"4735201e","chunk-2e5d987e":"fb17a77a","chunk-3f722356":"46ffda53","chunk-44b17034":"425ca932","chunk-4945440d":"fd993c46","chunk-7b4083f9":"318fcb9d"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-5dbe3274":1,"chunk-2e5d987e":1,"chunk-3f722356":1,"chunk-44b17034":1,"chunk-4945440d":1,"chunk-7b4083f9":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-355d107d":"31d6cfe0","chunk-5dbe3274":"ca6ca238","chunk-72091c70":"31d6cfe0","chunk-ccb19f80":"31d6cfe0","chunk-f6aded58":"31d6cfe0","chunk-2e5d987e":"717a5be4","chunk-3f722356":"e564cf73","chunk-44b17034":"0da5b7e0","chunk-4945440d":"585e38e6","chunk-7b4083f9":"0b5e2f26"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"0dff":function(e,n,t){var r=t("5e5b"),o=r.TonClient,a=r.AggregationFn,c=t("866c"),u=c.libWeb,s=c.libWebSetup;s({binaryURL:"./tonclient.wasm"}),o.useBinaryLibrary(u);var i=new o({network:{server_address:"main.ton.dev"}});e.exports={AggregationFn:a,client:i}},"50a8":function(e,n,t){var r=t("c973").default;t("96cf"),t("99af"),t("fb6a"),t("d81d");var o=t("0dff"),a=o.AggregationFn,c=o.client,u=function(){var e=r(regeneratorRuntime.mark((function e(){var n,t,r,o,u,s,i,l,d=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=d.length>0&&void 0!==d[0]?d[0]:15,t=[],r=[],o=Math.round(Date.now()/1e3)-60,u=0;u<10;u++)s=o,o=s-60*n,i=new Date(1e3*s),r.push("".concat(("0"+i.getHours()).slice(-2),":").concat(("0"+i.getMinutes()).slice(-2))),t.push({type:"AggregateCollection",collection:"blocks",fields:[{field:"",fn:a.COUNT}],filter:{gen_utime:{gt:o,lt:s}}});return e.prev=5,e.next=8,c.net.batch_query({operations:t});case 8:return l=e.sent,e.abrupt("return",{bps:l.results.map((function(e){return Math.floor(e[0]/(60*n)*100)/100})).reverse(),labels:r.reverse()});case 12:e.prev=12,e.t0=e["catch"](5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();e.exports={netBlocks:u}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"navbar-brand mb-3"},[e._v("FreeTON MainNet")]),t("div",{staticClass:"mb-5",attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/accounts"}},[e._v("Surf accounts")]),t("router-link",{attrs:{to:"/blocks"}},[e._v("Blocks")]),t("router-link",{attrs:{to:"/transactions"}},[e._v("Transactions")]),t("router-link",{attrs:{to:"/surfTransactionsCount"}},[e._v("Surf transactions count")])],1),t("div",{staticClass:"mb-5",attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/DepoolsGiversUsers"}},[e._v("Depools, Givers, Free Circulation")]),t("router-link",{attrs:{to:"/surfTransactionsVolumes"}},[e._v("Surf transactions volumes")]),t("router-link",{attrs:{to:"/spentTokensFromGivers"}},[e._v("Spent tokens from givers")]),t("router-link",{attrs:{to:"/lostTons"}},[e._v("Lost tons")])],1),t("router-view",{staticClass:"mt-4"})],1)},a=[],c=(t("034f"),t("2877")),u={},s=Object(c["a"])(u,o,a,!1,null,null,null),i=s.exports,l=t("2f62"),d=t("1da1"),f=(t("96cf"),t("50a8")),h={state:{dataBlocks:null},actions:{fetchBlocksData:function(e){var n=arguments;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,o=n.length>1&&void 0!==n[1]?n[1]:15,t.next=4,Object(f["netBlocks"])(o);case 4:a=t.sent,r("setDataBlocks",a);case 6:case"end":return t.stop()}}),t)})))()}},mutations:{setDataBlocks:function(e,n){e.dataBlocks={labels:n.labels,datasets:[{label:"Average blocks in second",backgroundColor:"#f87979",data:n.bps}]}}},getters:{getDataBlocks:function(e){return e.dataBlocks}}};r["default"].use(l["a"]);var p=new l["a"].Store({actions:{},mutations:{},getters:{},modules:{blocks:h}}),b=t("5f5b"),k=t("8c4f");t("f9e3"),t("2dd8"),t("d3b7"),t("3ca3"),t("ddb0");r["default"].use(k["a"]);var m=[{path:"/accounts",name:"Accounts",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-72091c70")]).then(t.bind(null,"5971"))}},{path:"/blocks",name:"Blocks",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-5dbe3274")]).then(t.bind(null,"6c8f"))}},{path:"/transactions",name:"Transactions",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-f6aded58"),t.e("chunk-7b4083f9")]).then(t.bind(null,"8810"))}},{path:"/DepoolsGiversUsers",name:"DepoolsGiversUsers",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-ccb19f80")]).then(t.bind(null,"99fb"))}},{path:"/surfTransactionsVolumes",name:"surfTransactionsVolumes",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-f6aded58"),t.e("chunk-4945440d")]).then(t.bind(null,"7c7a"))}},{path:"/spentTokensFromGivers",name:"spentTokensFromGivers",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-f6aded58"),t.e("chunk-2e5d987e")]).then(t.bind(null,"3618"))}},{path:"/surfTransactionsCount",name:"surfTransactionsCount",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-f6aded58"),t.e("chunk-44b17034")]).then(t.bind(null,"2a60"))}},{path:"/lostTons",name:"lostTons",component:function(){return Promise.all([t.e("chunk-355d107d"),t.e("chunk-f6aded58"),t.e("chunk-3f722356")]).then(t.bind(null,"9579"))}}],v=new k["a"]({routes:m}),g=v;r["default"].use(b["a"]),r["default"].config.productionTip=!1,r["default"].use(k["a"]),new r["default"]({store:p,router:g,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.649b9666.js.map