"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9745],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,f=u["".concat(c,".").concat(h)]||u[h]||s[h]||i;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[u]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1131:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"Deciding which node to run",description:"Guide on helping you decide which type of node to run."},a="Deciding which node to run",d={unversionedId:"nodes/decide-node",id:"nodes/decide-node",title:"Deciding which node to run",description:"Guide on helping you decide which type of node to run.",source:"@site/docs/nodes/decide-node.md",sourceDirName:"nodes",slug:"/nodes/decide-node",permalink:"/pr-preview/pr-920/fr/nodes/decide-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/decide-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deciding which node to run",description:"Guide on helping you decide which type of node to run."},sidebar:"nodes",previous:{title:"Quick start",permalink:"/pr-preview/pr-920/fr/nodes/quick-start"},next:{title:"Docker images",permalink:"/pr-preview/pr-920/fr/nodes/docker-images"}},c={},l=[{value:"Beginner",id:"beginner",level:2},{value:"Advanced",id:"advanced",level:2}],p={toc:l},u="wrapper";function s(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deciding-which-node-to-run"},"Deciding which node to run"),(0,o.kt)("p",null,"Now that you have installed the basic dependencies,\nyou can start exploring which nodes to run!"),(0,o.kt)("h2",{id:"beginner"},"Beginner"),(0,o.kt)("p",null,"It is highly recommended if you are a beginner to\nget started with running a Data-Availability Light Node."),(0,o.kt)("p",null,"In order to get started, you can proceed to the\nLight Node section ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-920/fr/nodes/light-node"},"here"),"."),(0,o.kt)("p",null,"You can also play around with the Data Availability API\nin this tutorial for the Light Node ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-920/fr/developers/node-tutorial"},"here"),"."),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"If you are looking to run a validator, please follow the tutorial\nfor running a validator ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-920/fr/nodes/validator-node"},"here"),"."),(0,o.kt)("p",null,"Note that running a validator means you must also run a bridge node,\nwhich is covered ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-920/fr/nodes/bridge-node"},"here"),"."))}s.isMDXComponent=!0}}]);