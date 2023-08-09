"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Redelegate or Undelegate Tokens From Another Validator",description:"Instructions on how to redelegate or undelegate Celestia."},i="Redelegate or Undelegate Tokens From Another Validator",l={unversionedId:"nodes/itn-undelegate-tokens",id:"nodes/itn-undelegate-tokens",title:"Redelegate or Undelegate Tokens From Another Validator",description:"Instructions on how to redelegate or undelegate Celestia.",source:"@site/docs/nodes/itn-undelegate-tokens.md",sourceDirName:"nodes",slug:"/nodes/itn-undelegate-tokens",permalink:"/pr-preview/pr-932/fr/nodes/itn-undelegate-tokens",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-undelegate-tokens.md",tags:[],version:"current",frontMatter:{sidebar_label:"Redelegate or Undelegate Tokens From Another Validator",description:"Instructions on how to redelegate or undelegate Celestia."}},s={},d=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"How to Submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redelegate-or-undelegate-tokens-from-another-validator"},"Redelegate or Undelegate Tokens From Another Validator"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Redelegate or undelegate Celestia tokens that you delegated in the previous step\nfrom another validator address on the network. You can\nlearn more about how to use celestia-app to undelegate tokens ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/celestia-app-commands#delegate--undelegate-tokens"},"here"),"."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Redelegate or undelegate tokens from another validator."),(0,o.kt)("li",{parentName:"ol"},"Keep a record of the transaction.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if you redelegate or undelegate stake from another validator."),(0,o.kt)("li",{parentName:"ol"},"No points if you do not.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to Submit"),(0,o.kt)("p",null,"Please submit the redelegation or undelegation transaction hash."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"053FE12103804C72A822BFAFBB2061867E2DA4F5D10862DEE7A5E362ED48ABA3")))}p.isMDXComponent=!0}}]);