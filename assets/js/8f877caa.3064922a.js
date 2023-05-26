"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9745],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(t),h=o,f=s["".concat(c,".").concat(h)]||s[h]||p[h]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[s]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_label:"Deciding which node to run",description:"Guide on helping you decide which type of node to run."},a="Deciding which node to run",d={unversionedId:"nodes/decide-node",id:"nodes/decide-node",title:"Deciding which node to run",description:"Guide on helping you decide which type of node to run.",source:"@site/docs/nodes/decide-node.md",sourceDirName:"nodes",slug:"/nodes/decide-node",permalink:"/nodes/decide-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/decide-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deciding which node to run",description:"Guide on helping you decide which type of node to run."},sidebar:"nodes",previous:{title:"Quick start",permalink:"/nodes/quick-start"},next:{title:"Docker images",permalink:"/nodes/docker-images"}},c={},l=[{value:"Beginner",id:"beginner",level:2},{value:"Advanced",id:"advanced",level:2}],u={toc:l},s="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deciding-which-node-to-run"},"Deciding which node to run"),(0,o.kt)("p",null,"Now that you have installed the basic dependencies,\nyou can start exploring which nodes to run!"),(0,o.kt)("h2",{id:"beginner"},"Beginner"),(0,o.kt)("p",null,"It is highly recommended if you are a beginner to\nget started with running a Data-Availability Light Node."),(0,o.kt)("p",null,"In order to get started, you can proceed to the\nLight Node section ",(0,o.kt)("a",{parentName:"p",href:"/nodes/light-node"},"here"),"."),(0,o.kt)("p",null,"You can also play around with the Data Availability API\nin this tutorial for the Light Node ",(0,o.kt)("a",{parentName:"p",href:"/developers/node-tutorial"},"here"),"."),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"If you are looking to run a validator, please follow the tutorial\nfor running a validator ",(0,o.kt)("a",{parentName:"p",href:"/nodes/validator-node"},"here"),"."),(0,o.kt)("p",null,"Note that running a validator means you must also run a bridge node,\nwhich is covered ",(0,o.kt)("a",{parentName:"p",href:"/nodes/bridge-node"},"here"),"."))}p.isMDXComponent=!0}}]);