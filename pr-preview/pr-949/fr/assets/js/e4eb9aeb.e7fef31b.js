"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"Setup your QGB Orchestrator",description:"Setup your QGB Orchestrator to run alongside your validator node."},a="Setup your QGB Orchestrator",s={unversionedId:"nodes/itn-qgb-setup",id:"nodes/itn-qgb-setup",title:"Setup your QGB Orchestrator",description:"Setup your QGB Orchestrator to run alongside your validator node.",source:"@site/docs/nodes/itn-qgb-setup.md",sourceDirName:"nodes",slug:"/nodes/itn-qgb-setup",permalink:"/pr-preview/pr-949/fr/nodes/itn-qgb-setup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-qgb-setup.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup your QGB Orchestrator",description:"Setup your QGB Orchestrator to run alongside your validator node."}},l={},u=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-your-qgb-orchestrator"},"Setup your QGB Orchestrator"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: Only begin this task AFTER the hardfork has been activated\non block ",(0,o.kt)("inlineCode",{parentName:"strong"},"446500"),".")),(0,o.kt)("p",null,"Setup your QGB Orchestrator to run alongside your validator node.\nFor the bootstrapper to use, it is the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/dns/bootstr-incent-1.celestia.tools/tcp/30000/p2p/12D3KooWSGZ2LXW2soQFHgU82uLfN7pNW5gMMkTnu1fhMXG43TvP"))),(0,o.kt)("p",null,"Make sure to specify it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-b")," flag when running\nthe orchestrator."),(0,o.kt)("p",null,"Docs on how to set it up are found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/qgb-orchestrator/#how-to-run"},"here")),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup your QGB Orchestrator based on the docs provided."),(0,o.kt)("li",{parentName:"ol"},"After successfully initializing it, share your EVM address\non the Knack portal submission page for this task.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if you successfully run the QGB orchestrator."),(0,o.kt)("li",{parentName:"ol"},"No points if you do not run the QGB orchestrator.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Link to submit can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0x22f2C692a6171E5FeE531504E3Ab098820d18aC2")))}d.isMDXComponent=!0}}]);