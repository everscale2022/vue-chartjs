(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-616921dc"],{"0093":function(e,t,n){},1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),o=n("d784"),i=n("44e7"),s=n("825a"),u=n("1d80"),l=n("4840"),f=n("8aa5"),d=n("50c4"),p=n("577e"),h=n("dc4a"),g=n("4dae"),v=n("14c3"),b=n("9263"),x=n("9f7f"),m=n("d039"),_=x.UNSUPPORTED_Y,w=4294967295,y=Math.min,E=[].push,A=c(/./.exec),I=c(E),N=c("".slice),j=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=p(u(this)),o=void 0===n?w:n>>>0;if(0===o)return[];if(void 0===e)return[c];if(!i(e))return a(t,c,e,o);var s,l,f,d=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,x=new RegExp(e.source,h+"g");while(s=a(b,x,c)){if(l=x.lastIndex,l>v&&(I(d,N(c,v,s.index)),s.length>1&&s.index<c.length&&r(E,d,g(s,1)),f=s[0].length,v=l,d.length>=o))break;x.lastIndex===s.index&&x.lastIndex++}return v===c.length?!f&&A(x,"")||I(d,""):I(d,N(c,v)),d.length>o?g(d,0,o):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=u(this),o=void 0==t?void 0:h(t,e);return o?a(o,t,r,n):a(c,p(r),t,n)},function(e,r){var a=s(this),o=p(e),i=n(c,a,o,r,c!==t);if(i.done)return i.value;var u=l(a,RegExp),h=a.unicode,g=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(_?"g":"y"),b=new u(_?"^(?:"+a.source+")":a,g),x=void 0===r?w:r>>>0;if(0===x)return[];if(0===o.length)return null===v(b,o)?[o]:[];var m=0,E=0,A=[];while(E<o.length){b.lastIndex=_?0:E;var j,O=v(b,_?N(o,E):o);if(null===O||(j=y(d(b.lastIndex+(_?E:0)),o.length))===m)E=f(o,E,h);else{if(I(A,N(o,m,E)),A.length===x)return A;for(var R=1;R<=O.length-1;R++)if(I(A,O[R]),A.length===x)return A;E=m=j}}return I(A,N(o,m)),A}]}),!j,_)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),o=n("1626"),i=n("c6b6"),s=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===i(e))return a(s,e,t);throw u("RegExp#exec called on incompatible receiver")}},"278c":function(e,t,n){var r=n("c135"),a=n("9b42"),c=n("6613"),o=n("c240");function i(e,t){return r(e)||a(e,t)||c(e,t)||o()}e.exports=i,e.exports.__esModule=!0,e.exports["default"]=e.exports},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),o=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"4fad":function(e,t,n){var r=n("23e7"),a=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"4ffe":function(e,t,n){"use strict";n("0093")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),a=n("1d80"),c=n("577e"),o=n("5899"),i=r("".replace),s="["+o+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(e){return function(t){var n=c(a(t));return 1&e&&(n=i(n,u,"")),2&e&&(n=i(n,l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},"736b":function(e,t,n){"use strict";n.r(t);var r,a,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"text-success h4"},[e._v(" + Evers to exchange — Evers from exchange")]),n("div",[n("chart",{attrs:{"chart-data":e.chartData}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading_graphic,expression:"loading_graphic"}],staticClass:"h3 text-info"},[e._v("Data loading ...")])],1),n("div",[n("b-dropdown",{staticClass:"m-md-2 mt-5",attrs:{id:"dropdown-1",text:e.dropdownButton.toUpperCase()}},e._l(e.exchanges,(function(t){return n("b-dropdown-item",{key:Object.keys(t)[0].toUpperCase(),on:{click:function(n){return e.exchange(t)}}},[e._v(" "+e._s(Object.keys(t)[0].toUpperCase())+" ")])})),1)],1),n("div",[n("span",{staticClass:"h1"},[e._v(e._s(e.trend)+" ")]),null!==e.trend?n("span",[e._v("Advantage: "+e._s(e.total)+" Evers")]):e._e()]),n("div",{staticClass:"mt-3"},[null!==e.allAssets?n("span",[e._v("Assets: "+e._s(e.allAssets)+" Evers")]):e._e()]),n("div",{staticClass:"h5 mt-4"},[e._v("Last transactions")]),n("div"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading_table,expression:"loading_table"}],staticClass:"h5 text-info"},[e._v("Data loading ...")]),n("b-table",{attrs:{striped:"",hover:"",items:e.items}})],1)},o=[],i=n("1da1"),s=(n("96cf"),n("99af"),n("b64b"),n("1fca")),u=s["e"].reactiveProp,l={extends:s["a"],mixins:[u],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:25}}}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.renderChart(e.chartData,e.options);case 1:case"end":return t.stop()}}),t)})))()}},f=l,d=n("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null),h=p.exports,g=n("c726"),v=n("f62d"),b=n("bbac"),x=[{"All exchanges":Object(g["getExchangesIds"])()}].concat(v.exchanges),m={data:function(){return{chartData:{},loading_graphic:!0,loading_table:!0,exchanges:x,dropdownButton:"ALL EXCHANGES",total:null,trend:null,allAssets:null,items:[]}},components:{chart:h},methods:{exchange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading_graphic=!0,t.dropdownButton=Object.keys(e)[0],n.next=4,Object(g["exchangesData"])(e);case 4:t.chartData=n.sent,t.loading_graphic=!1;case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this,t=[{"All exchanges":Object(g["getExchangesIds"])()}].concat(t);Object(g["exchangesData"])(t[0]).then((function(n){e.dropdownButton=Object.keys(t[0])[0],e.chartData=n,e.loading_graphic=!1})),Object(g["lastBiggestExchangeTransactions"])().then((function(t){e.items=t.dataTable,t.total<-1e4&&(e.trend="🐂"),t.total>1e4&&(e.trend="🐻"),e.total=b(Math.abs(t.total)),e.loading_table=!1})),Object(g["totalExchangesBalance"])().then((function(t){e.allAssets=t}))}},_=m,w=(n("4ffe"),Object(d["a"])(_,c,o,!1,null,"f648f5e6",null));t["default"]=w.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"9b42":function(e,t,n){function r(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(c.push(r.value),t&&c.length===t)break}catch(s){i=!0,a=s}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return c}}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),e.exports=r,e.exports.__esModule=!0,e.exports["default"]=e.exports},a15b:function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),c=n("44ad"),o=n("fc6a"),i=n("a640"),s=a([].join),u=c!=Object,l=i("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(e){return s(o(this),void 0===e?",":e)}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("e330"),o=n("94ca"),i=n("6eeb"),s=n("1a2d"),u=n("7156"),l=n("3a9b"),f=n("d9b5"),d=n("c04e"),p=n("d039"),h=n("241c").f,g=n("06cf").f,v=n("9bf2").f,b=n("408a"),x=n("58a8").trim,m="Number",_=a[m],w=_.prototype,y=a.TypeError,E=c("".slice),A=c("".charCodeAt),I=function(e){var t=d(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,n,r,a,c,o,i,s,u=d(e,"number");if(f(u))throw y("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=x(u),t=A(u,0),43===t||45===t){if(n=A(u,2),88===n||120===n)return NaN}else if(48===t){switch(A(u,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(c=E(u,2),o=c.length,i=0;i<o;i++)if(s=A(c,i),s<48||s>a)return NaN;return parseInt(c,r)}return+u};if(o(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var j,O=function(e){var t=arguments.length<1?0:_(I(e)),n=this;return l(w,n)&&p((function(){b(n)}))?u(Object(t),n,O):t},R=r?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;R.length>k;k++)s(_,j=R[k])&&!s(O,j)&&v(O,j,g(_,j));O.prototype=w,w.constructor=O,i(a,m,O)}},bbac:function(e,t,n){"use strict";function r(e,t,n){const r=n||".";let c;{let t;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;c=e,t=Number("."!==r?c.replace(r,"."):c);break;case"number":c=String(e),t=e,"."===r||Number.isInteger(e)||(c=c.replace(".",r));break;default:return e}if(-1e3<t&&t<1e3||isNaN(t)||!isFinite(t))return c}{const e=c.lastIndexOf(r);let n;e>-1&&(n=c.slice(e),c=c.slice(0,e));const o=a(c,t||",");return n&&o.push(n),o.join("")}}function a(e,t){let n=(e.length-1)%3+1;1===n&&"-"===e[0]&&(n=4);const r=[e.slice(0,n)];for(;n<e.length;n+=3)r.push(t,e.substr(n,3));return r}function c(e,t){return function(n){return r(n,e,t)}}e.exports=r,e.exports.bindWith=c},c135:function(e,t){function n(e){if(Array.isArray(e))return e}e.exports=n,e.exports.__esModule=!0,e.exports["default"]=e.exports},c240:function(e,t,n){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n("d9e2"),e.exports=r,e.exports.__esModule=!0,e.exports["default"]=e.exports},c726:function(e,t,n){var r=n("278c").default,a=n("c973").default;n("96cf"),n("a15b"),n("d81d"),n("99af"),n("07ac"),n("a9e3"),n("b64b"),n("4fad"),n("ac1f"),n("1276");var c=n("0dff"),o=c.client,i=n("f62d"),s=n("bbac");function u(e){return Array.isArray(e)?"in:[".concat(e.map((function(e){return'"'.concat(e,'"')})).join(","),"]"):'eq: "'.concat(e,'"')}function l(e){e=u(e);for(var t="{",n=30;n>=0;n--){var r=i.interval(n,i.oneDay);t+="\n            data_".concat(r.gt,": aggregateTransactions(\n                filter: {      \n                now: { gt: ").concat(r.gt," lt: ").concat(r.lt,"}                \n                account:{\n                id:{\n                    ").concat(e,'\n                }\n                }\n                }\n                fields: [{ field: "balance_delta", fn: SUM }]\n            )\n          ')}return t+="}",t}function f(){var e=[];return i.exchanges.map((function(t){var n=Object.values(t)[0];Array.isArray(n)?n.map((function(t){e.push(t)})):e.push(n)})),e}function d(){var e=f();e=e.map((function(e){return'"'.concat(e,'"')}));var t="in:[".concat(e.join(","),"]"),n=i.now,r=n-3*i.oneDay,a="    \n        query {\n            transactions(\n              filter: {\n                now: { gt: ".concat(r,", lt: ").concat(n," }                \n                account: {\n                  id: {\n                    ").concat(t,'\n                  }\n                }\n              }\n              orderBy: { path: "now", direction: DESC }\n            ) {\n              id\n              balance_delta(format: DEC)\n              now\n              account_addr\n            }\n          }');return a}var p=function(){var e=a(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=d(),e.prev=1,e.next=4,o.net.query({query:t});case 4:return n=e.sent.result.data.transactions,r=0,a=n.map((function(e){return r+=Math.round(Number(e.balance_delta)/i.oneTon),{"Transaction id":e.id,Exchange:i.findExchangeName(e.account_addr).toUpperCase(),Time:i.formatTime(e.now),Tokens:"".concat(i.whale(Math.abs(e.balance_delta))," ").concat(i.direction(e.balance_delta)," ").concat(s(Math.round(Math.abs(e.balance_delta)/1e9))," EVERs")}})),e.abrupt("return",{total:r,dataTable:a});case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=a(regeneratorRuntime.mark((function e(t){var n,a,c,s,u,f,d,p,h,g,v,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object.values(t)[0],a=Object.keys(t)[0],c=[],s=[],e.prev=4,e.next=7,o.net.query({query:l(n)});case 7:for(u=e.sent.result.data,f=0,d=Object.entries(u);f<d.length;f++)p=r(d[f],2),h=p[0],g=p[1],c.push(g[0]/i.oneTon),v=h.split("_")[1],b=new Date(1e3*v).toLocaleDateString("ru-RU"),s.push(b);return e.abrupt("return",{datasets:[{label:"Moving Evers on ".concat(a.toUpperCase()),backgroundColor:i.getRandomColor(),data:c}],labels:s});case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();function g(){return[{"All exchanges":f()}].concat(g)}var v=function(){var e=a(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="    \n    query {\n        aggregateAccounts(\n          filter: {\n            id: {\n              in: [".concat(i.exchangesAddresses().map((function(e){return'"'.concat(e,'"')})),']\n            }\n          }\n          fields: [{ field: "balance", fn: SUM }]\n        )\n      }\n      '),e.next=3,o.net.query({query:t});case 3:return n=e.sent.result.data.aggregateAccounts[0],e.abrupt("return",s(Math.round(n/i.oneTon)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e.exports={exchangesData:h,lastBiggestExchangeTransactions:p,getExchangesIds:f,exchanges:g,totalExchangesBalance:v}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),c=n("9263"),o=n("d039"),i=n("b622"),s=n("9112"),u=i("species"),l=RegExp.prototype;e.exports=function(e,t,n,f){var d=i(e),p=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=p&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!h||n){var g=r(/./[d]),v=t(d,""[e],(function(e,t,n,a,o){var i=r(e),s=t.exec;return s===c||s===l.exec?p&&!o?{done:!0,value:g(t,n,a)}:{done:!0,value:i(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(l,d,v[1])}f&&s(l[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-616921dc.be892aa5.js.map