"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2236],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=a,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_label:"Hardfork Process"},i="Celestia hardfork process",s={unversionedId:"nodes/hardfork-process",id:"nodes/hardfork-process",title:"Celestia hardfork process",description:"Blockchain networks often times need to upgrade with new features",source:"@site/docs/nodes/hardfork-process.md",sourceDirName:"nodes",slug:"/nodes/hardfork-process",permalink:"/pr-preview/pr-590/fr/nodes/hardfork-process",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/hardfork-process.md",tags:[],version:"current",frontMatter:{sidebar_label:"Hardfork Process"},sidebar:"nodes",previous:{title:"SystemD",permalink:"/pr-preview/pr-590/fr/nodes/systemd"},next:{title:"Devops resources",permalink:"/pr-preview/pr-590/fr/nodes/devops-resources"}},l={},p=[{value:"General process",id:"general-process",level:2},{value:"Mocha hardfork",id:"mocha-hardfork",level:3}],d={toc:p},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-hardfork-process"},"Celestia hardfork process"),(0,a.kt)("p",null,"Blockchain networks often times need to upgrade with new features\nwhich require coordination work among the validators prior to activating\nthe upgrades."),(0,a.kt)("p",null,"This process is called a hardfork or a network upgrade. In those events,\nthe Celestia Labs team will be coordinating with the validators on\nwhat they need to do in order to be ready for an upcoming hardfork."),(0,a.kt)("p",null,"Hardforks are not backward-compatible with older versions of the network\nsoftware which is why it is important that validators upgrade their software\nto continue validating on the network after the network upgrades."),(0,a.kt)("h2",{id:"general-process"},"General process"),(0,a.kt)("p",null,"The general process can be broken down into several components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardfork specifications and features (defined by description of features\nand code implementation of those features)."),(0,a.kt)("li",{parentName:"ul"},"Binary used to add those features (a new binary release with those features\nwill be provided by Celestia team in order for validators to upgrade\ntheir nodes to the new binary)."),(0,a.kt)("li",{parentName:"ul"},"A block number for when the network upgrades (even if validators upgrade\ntheir binary to be hardfork ready, the network upgrade does not happen right\naway, but some short time in the future at a specific block number)."),(0,a.kt)("li",{parentName:"ul"},"Testing of the features (happens on testnets first prior to activating on\nmainnet in order to ensure the network can upgrade securely).")),(0,a.kt)("p",null,"The two testnets were hardforks are deployed on are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-590/fr/nodes/arabica-devnet"},"Arabica")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-590/fr/nodes/mocha-testnet"},"Mocha"))),(0,a.kt)("h3",{id:"mocha-hardfork"},"Mocha hardfork"),(0,a.kt)("p",null,"Celestia is planning the Mocha Hardfork upgrade on the Mamaki Testnet.\nThis hardfork is unique as it will reset the Mamaki network to block 0\nwhile maintaining the existing state and also will rename Mamaki to Mocha."),(0,a.kt)("p",null,"The new chain-id will be ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,a.kt)("p",null,"The release logs for ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/releases"},"here"),"."),(0,a.kt)("p",null,"The most exciting feature included is setting the stage for QGB on Mocha."),(0,a.kt)("p",null,"Validators will need to generate 2 new keys in order to be QGB-ready.\nNote that for the Mocha Hardfork, QGB will not launch yet so you\ncan swap those keys after for new ones if needed. The keys needed are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 EVM key"),(0,a.kt)("li",{parentName:"ul"},"1 Celestia key")),(0,a.kt)("p",null,"So, in order for this to happen, validators will need to maintain two\nnew keys in order to have a successful upgrade."),(0,a.kt)("p",null,"Those two keys will need to be added to 2 new flags on ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,a.kt)("inlineCode",{parentName:"li"},"0x")," EVM address.")))}u.isMDXComponent=!0}}]);