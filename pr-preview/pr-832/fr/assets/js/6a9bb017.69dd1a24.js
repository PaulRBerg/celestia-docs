"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8088],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(i),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return i?r.createElement(h,o(o({ref:t},u),{},{components:i})):r.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3884:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(7462),n=(i(7294),i(3905));const a={sidebar_label:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race."},o="Maintain High Validator Uptime",l={unversionedId:"nodes/itn-high-uptime",id:"nodes/itn-high-uptime",title:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race.",source:"@site/docs/nodes/itn-high-uptime.md",sourceDirName:"nodes",slug:"/nodes/itn-high-uptime",permalink:"/pr-preview/pr-832/fr/nodes/itn-high-uptime",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-high-uptime.md",tags:[],version:"current",frontMatter:{sidebar_label:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race."}},s={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"maintain-high-validator-uptime"},"Maintain High Validator Uptime"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Ensure your validator has a high up-time for the duration of\nthe Blockspace Race, including during pauses."),(0,n.kt)("p",null,"Please note that there are tasks and phases where you will\nlikely have some downtime, so please ensure you have the\nbest possible uptime outside of those events."),(0,n.kt)("h2",{id:"directions"},"Directions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure your validator does not go offline otherwise it\nimpacts your uptime score.")),(0,n.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Points are awarded based on the following ",(0,n.kt)("a",{parentName:"li",href:"https://www.wolframalpha.com/input?i=y%3D1.08%5Ex%2F1.08%5E100+from+0+to+100"},"formula"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"validator_uptime = total_signed_blocks/network_height")),(0,n.kt)("li",{parentName:"ol"},"Maximum score for uptime at the end of phase 5 is 350 points.")),(0,n.kt)("h2",{id:"submission"},"Submission"),(0,n.kt)("p",null,"Validators need to submit their ",(0,n.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address."),(0,n.kt)("p",null,"Submission link can be found ",(0,n.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}d.isMDXComponent=!0}}]);