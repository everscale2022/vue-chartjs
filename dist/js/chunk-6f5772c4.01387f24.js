(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f5772c4"],{"200c":function(t,n,e){"use strict";e("ffbc")},aeab:function(t,n,e){"use strict";e.r(n);var a,r,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-success h4"},[t._v(" + Evers to exchange — Evers from exchange")]),e("div",[e("chart",{attrs:{"chart-data":t.chartData}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading_graphic,expression:"loading_graphic"}],staticClass:"h3 text-info"},[t._v("Data loading ...")])],1)])},i=[],o=e("1da1"),s=(e("96cf"),e("1fca")),u=s["d"].reactiveProp,l={extends:s["b"],mixins:[u],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:25}}}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.renderChart(t.chartData,t.options);case 1:case"end":return n.stop()}}),n)})))()}},f=l,d=e("2877"),h=Object(d["a"])(f,a,r,!1,null,null,null),p=h.exports,v=e("fde4"),g={data:function(){return{chartData:null,loading_graphic:!0,loading_table:!0}},components:{chart:p},mounted:function(){var t=this;Object(v["kunaActivity"])().then((function(n){t.chartData=n,t.loading_graphic=!1}))}},b=g,w=(e("200c"),Object(d["a"])(b,c,i,!1,null,"57b8002a",null));n["default"]=w.exports},fde4:function(t,n,e){var a=e("278c").default,r=e("c973").default;e("96cf"),e("99af"),e("4fad"),e("ac1f"),e("1276");var c=e("0dff"),i=c.client,o=e("f62d");function s(){for(var t="{",n=14;n>=0;n--){var e=o.now-n*o.oneDay,a=e-o.oneDay;t+="\n            data_".concat(e,": aggregateTransactions(\n                filter: {      \n                now: { gt: ").concat(a," lt: ").concat(e,'}                \n                account:{\n                id:{\n                    eq: "').concat(o.kunaAccount,'"\n                }\n                }\n                }\n                fields: [{ field: "balance_delta", fn: SUM }]\n            )\n          ')}return t+="}",t}var u=function(){var t=r(regeneratorRuntime.mark((function t(){var n,e,r,c,u,l,f,d,h,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],e=[],t.prev=2,t.next=5,i.net.query({query:s()});case 5:for(r=t.sent.result.data,c=0,u=Object.entries(r);c<u.length;c++)l=a(u[c],2),f=l[0],d=l[1],n.push(d[0]/o.oneTon),h=f.split("_")[1],p=new Date(1e3*h).toLocaleDateString("ru-RU"),e.push(p);return t.abrupt("return",{datasets:[{label:"Moving Evers on KUNA",backgroundColor:"lightblue",data:n}],labels:e});case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();t.exports={kunaActivity:u}},ffbc:function(t,n,e){}}]);
//# sourceMappingURL=chunk-6f5772c4.01387f24.js.map