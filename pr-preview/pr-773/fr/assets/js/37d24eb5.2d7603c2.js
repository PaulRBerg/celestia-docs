"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),b=o,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Create a UI for submitting PayForBlob transactions",description:"Create a UI for allowing users to submit PayForBlob Transactions."},i="Create a UI for submitting PayForBlob transactions",s={unversionedId:"nodes/itn-pfb-ui",id:"nodes/itn-pfb-ui",title:"Create a UI for submitting PayForBlob transactions",description:"Create a UI for allowing users to submit PayForBlob Transactions.",source:"@site/docs/nodes/itn-pfb-ui.md",sourceDirName:"nodes",slug:"/nodes/itn-pfb-ui",permalink:"/pr-preview/pr-773/fr/nodes/itn-pfb-ui",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-pfb-ui.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create a UI for submitting PayForBlob transactions",description:"Create a UI for allowing users to submit PayForBlob Transactions."}},l={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-ui-for-submitting-payforblob-transactions"},"Create a UI for submitting PayForBlob transactions"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Create a UI for allowing users to submit PayForBlob Transactions.\nYou can check out the Node tutorial ",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial"},"here"),".\nIt shows you how you can call the API in order to\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial/#submit-a-pfb-transaction"},"submit a PFB transaction"),",\nand how to\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial/#get-namespaced-shares-by-block-height"},"retrieve the data"),"\nby block height and namespace."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Submission is limited to only 1, do not submit more than one."),(0,o.kt)("li",{parentName:"ol"},"Create a UI for submitting a PFB transaction."),(0,o.kt)("li",{parentName:"ol"},"Ensure it is open source and share the Github repository as well.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if you have a working UI that allows folks to submit a PFB\ntransaction and the dashboard is open-source."),(0,o.kt)("li",{parentName:"ol"},"No points if not.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Please submit the link to the UI and the Github repository."),(0,o.kt)("p",null,"Link to submit found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."))}d.isMDXComponent=!0}}]);