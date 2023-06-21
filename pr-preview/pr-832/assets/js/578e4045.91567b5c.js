"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3255:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(464),i=a(578);const l=()=>n.createElement("ul",null,n.createElement("li",null,"Celestia Node - ",r.Z["node-latest-tag"]),n.createElement("li",null,"Celestia App - ",r.Z["app-latest-tag"]),n.createElement("li",null,"Rollkit - ",i.Z.arabicaRollkitVersion))},6568:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(8842),i=a(578);const l=()=>n.createElement("ul",null,n.createElement("li",null,"Celestia Node - ",r.Z["node-latest-tag"]),n.createElement("li",null,"Celestia App - ",r.Z["app-latest-tag"]),n.createElement("li",null,"Rollkit - ",i.Z.bsrRollkitVersion))},4058:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(8549),i=a(578);const l=()=>n.createElement("ul",null,n.createElement("li",null,"Celestia Node - ",r.Z["node-latest-tag"]),n.createElement("li",null,"Celestia App - ",r.Z["app-latest-tag"]),n.createElement("li",null,"Rollkit - ",i.Z.mochaRollkitVersion))},464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v1.0.0-rc0","app-latest-sha":"456e6fd01bb2681da6ca5c89493dd9ed73e3021f","core-latest-tag":"v1.21.1-tm-v0.34.27","core-latest-sha":"904ca9e002d1cd7220b4288113197e2e9bdf7ad5","node-latest-tag":"v0.11.0-rc2","node-latest-sha":"504ff93444eb46d9c3adeedb2f58d289ec1ef746"})},8842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.2-tm-v0.34.27","core-latest-sha":"d280f37a8376ed54ae03b10896fa25a4cbbc6d5b","node-latest-tag":"v0.10.4","node-latest-sha":"03ff94a7d779caf1225f3dccb53a68e8f1646dc6"})},578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.19.1",golangNodeArabica:"1.20.2",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-8",bsrChainId:"blockspacerace-0",mochaChainId:"mocha",arabicaRollkitVersion:"v0.8.2-rc0",mochaRollkitVersion:"currently not compatible",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},8549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},1731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(4058),l=a(3255),o=a(6568);const s={sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},c="Participate in the Celestia testnets",p={unversionedId:"nodes/participate",id:"nodes/participate",title:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in.",source:"@site/docs/nodes/participate.mdx",sourceDirName:"nodes",slug:"/nodes/participate",permalink:"/pr-preview/pr-832/nodes/participate",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/participate.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},sidebar:"nodes",previous:{title:"Overview",permalink:"/pr-preview/pr-832/nodes/overview"},next:{title:"Arabica devnet",permalink:"/pr-preview/pr-832/nodes/arabica-devnet"}},d={},u=[],b={toc:u},f="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"participate-in-the-celestia-testnets"},"Participate in the Celestia testnets"),(0,r.kt)("p",null,"Celestia currently has three existing testnets that you can participate in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-832/nodes/blockspace-race"},"Blockspace race"),": An incentivised testnet for all participants:\nvalidators and other node operators, integrators, rollups and anyone curious. This\ntestnet closely reflects the version of Celestia at launch.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compatible software versions",(0,r.kt)(o.Z,{mdxType:"BsrVersionTags"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-832/nodes/arabica-devnet"},"Arabica devnet"),": A devnet focused on developers who\nwant to deploy sovereign rollups on the latest changes from Celestia's codebase.\nArabica will be updated frequently and might be unstable at times given new updates.\nValidators won't be able to validate on Arabica as it is not designed for\nvalidators to participate.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compatible software versions",(0,r.kt)(l.Z,{mdxType:"ArabicaVersionTags"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-832/nodes/mocha-testnet"},"Mocha testnet"),": A testnet focused on enabling validators\nto test out their infrastructure by running nodes connected to the network. Developers\ncan also deploy sovereign rollups on Mocha, it just will always be behind Arabica\nas Mocha upgrades are slower given they need to be done via hardforks in coordination\nwith the validator community on Mocha.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compatible software versions",(0,r.kt)(i.Z,{mdxType:"MochaVersionTags"}))))))}m.isMDXComponent=!0}}]);