"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1001],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var r=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(l),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return l?r.createElement(k,n(n({ref:t},c),{},{components:l})):r.createElement(k,n({ref:t},c))}));function k(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=l.length,n=new Array(i);n[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,n[1]=a;for(var p=2;p<i;p++)n[p]=l[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},4888:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=l(7462),o=(l(7294),l(3905));const i={sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},n="Rollkit",a={unversionedId:"developers/rollkit",id:"developers/rollkit",title:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit.",source:"@site/docs/developers/rollkit.md",sourceDirName:"developers",slug:"/developers/rollkit",permalink:"/pr-preview/pr-857/developers/rollkit",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollkit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},sidebar:"developers",previous:{title:"Deploy a Rollup",permalink:"/pr-preview/pr-857/category/deploy-a-rollup"},next:{title:"Optimism",permalink:"/pr-preview/pr-857/category/optimism"}},s={},p=[{value:"Tutorials",id:"tutorials",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollkit"},"Rollkit"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rollkit",src:l(2773).Z,width:"2500",height:"2825"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,o.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,o.kt)("p",null,"The goal of Rollkit is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,o.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.'),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollkit. We call those chains Sovereign Rollups."),(0,o.kt)("p",null,"You can get started with the following tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/hello-world"},"Hello world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/gm-world"},"GM world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/recipe-book"},"Recipe book")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/wordle"},"Wordle game")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/cosmwasm"},"CosmWasm tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-857/developers/full-stack-modular-development-guide/"},"Full stack modular blockchain development guide"))))}d.isMDXComponent=!0},2773:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/rollkit-a3c303985129391d591d82877628422a.png"}}]);