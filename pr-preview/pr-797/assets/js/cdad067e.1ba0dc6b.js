"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Monolithic vs. modular blockchains",description:"Comparison between monolithic and modular blockchains."},i="Monolithic vs. modular blockchains",s={unversionedId:"concepts/how-celestia-works/monolithic-vs-modular",id:"concepts/how-celestia-works/monolithic-vs-modular",title:"Monolithic vs. modular blockchains",description:"Comparison between monolithic and modular blockchains.",source:"@site/docs/concepts/how-celestia-works/monolithic-vs-modular.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/monolithic-vs-modular",permalink:"/pr-preview/pr-797/concepts/how-celestia-works/monolithic-vs-modular",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/monolithic-vs-modular.md",tags:[],version:"current",frontMatter:{sidebar_label:"Monolithic vs. modular blockchains",description:"Comparison between monolithic and modular blockchains."},sidebar:"concepts",previous:{title:"Introduction",permalink:"/pr-preview/pr-797/concepts/how-celestia-works/introduction"},next:{title:"Celestia's data availability layer",permalink:"/pr-preview/pr-797/concepts/how-celestia-works/data-availability-layer"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monolithic-vs-modular-blockchains"},"Monolithic vs. modular blockchains"),(0,r.kt)("p",null,"Blockchains instantiate ",(0,r.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/abs/10.1145/98163.98167"},"replicated state machines"),":\nthe nodes in a permissionless distributed network apply an ordered sequence\nof deterministic transactions to an initial state resulting in a common\nfinal state. This means blockchains require the following four functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Execution")," entails executing transactions that update the state correctly.\nThus, execution must ensure that only valid transactions are executed, i.e.,\ntransactions that result in valid state machine transitions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Settlement")," entails an environment for execution layers to verify proofs,\nresolve fraud disputes, and bridge between other execution layers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consensus")," entails agreeing on the order of the transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Availability")," (DA) entails making the transaction data available.\nNote that execution, settlement, and consensus require DA.")),(0,r.kt)("p",null,"Traditional blockchains, i.e. ",(0,r.kt)("em",{parentName:"p"},"monolithic blockchains"),", implement all four\nfunctions together in a single base consensus layer. The problem with\nmonolithic blockchains is that the consensus layer must perform a lot of\ndifferent tasks and it cannot be optimized for only one of these functions.\nAs a result, the monolithic paradigm limits the throughput of the system."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modular VS Monolithic",src:n(3446).Z,width:"3000",height:"1291"})),(0,r.kt)("p",null,"As a solution, modular blockchains decouple these functions among\nmultiple specialized layers as part of a modular stack. Due to the\nflexibility that specialization provides, there are many possibilities\nin which that stack can be arranged. For example, one such arrangement\nis the separation of the four functions into three specialized layers."),(0,r.kt)("p",null,"The base layer consists of DA and consensus and thus, is referred to\nas the Consensus and DA layer (or for brevity, the DA layer), while both\nsettlement and execution are moved on top in their own layers. As a result,\nevery layer can be specialized to optimally perform only its function and thus,\nincrease the throughput of the system. Furthermore, this modular paradigm\nenables multiple execution layers, i.e.,\n",(0,r.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/01/05/rollup.html"},"rollups"),", to use the\nsame settlement and DA layers."))}m.isMDXComponent=!0},3446:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png"}}]);