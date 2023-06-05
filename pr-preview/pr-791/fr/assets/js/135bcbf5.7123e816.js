"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Quantum Gravity Bridge",description:"An overview of the Quantum Gravity Bridge."},o="Quantum Gravity Bridge",l={unversionedId:"nodes/qgb-intro",id:"nodes/qgb-intro",title:"Quantum Gravity Bridge",description:"An overview of the Quantum Gravity Bridge.",source:"@site/docs/nodes/qgb-intro.md",sourceDirName:"nodes",slug:"/nodes/qgb-intro",permalink:"/pr-preview/pr-791/fr/nodes/qgb-intro",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-intro.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quantum Gravity Bridge",description:"An overview of the Quantum Gravity Bridge."},sidebar:"nodes",previous:{title:"QGB",permalink:"/pr-preview/pr-791/fr/category/qgb"},next:{title:"Install the QGB binary",permalink:"/pr-preview/pr-791/fr/nodes/qgb-binary"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Setting up the QGB",id:"setting-up-the-qgb",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quantum-gravity-bridge"},"Quantum Gravity Bridge"),(0,n.kt)("p",null,"The Quantum Gravity Bridge, covered previously in the Celestia blog post\nfound ",(0,n.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestiums/"},"here"),", introduces the concept\nof a Celestium, which is an EVM L2 rollup that uses Celestia for data availability\nbut settles on Ethereum (or any other EVM L1 chain)."),(0,n.kt)("p",null,"This page and following tutorials will go over the Quantum Gravity\nBridge and how Validators on Celestia can run it."),(0,n.kt)("p",null,"If you're looking to learn more, you can view the\n",(0,n.kt)("inlineCode",{parentName:"p"},"orchestrator-relayer")," repository\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer"},"here"),", and\nread more about the QGB\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/quantum-gravity-bridge#how-it-works"},"here"),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Quantum Gravity Bridge (QGB),\nconsists of two components: an ",(0,n.kt)("a",{parentName:"p",href:"../qgb-orchestrator"},"Orchestrator"),"\nand a ",(0,n.kt)("a",{parentName:"p",href:"../qgb-relayer"},"Relayer"),"."),(0,n.kt)("p",null,"In the following diagram, we show how a celestium would post the data to\nCelestia. This will later be attested to by the Celestia validator set, and\neventually posted to the target EVM chain (in this case, Ethereum). Then,\nthe celestium, or any party, will be able to verify the attestations, i.e. valsets\nand data commitments, directly on the EVM chain on the QGB smart contract. You can\nreference the QGB smart contract\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/quantum-gravity-bridge/blob/master/src/QuantumGravityBridge.sol"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Architecture",src:r(5621).Z,width:"1823",height:"1180"})),(0,n.kt)("p",null,"The specification of the QGB ",(0,n.kt)("inlineCode",{parentName:"p"},"Valset"),"s, which track the Celestia validator set\nchanges, can be found in this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-002-qgb-valset.md"},"ADR"),"."),(0,n.kt)("p",null,"The QGB data commitments, which represent commitments over sets of blocks\ndefined by a data commitment window, are\ndiscussed more in-depth in the following\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-003-qgb-data-commitments.md"},"ADR"),"."),(0,n.kt)("p",null,"The Orchestrator is part of the Validator setup and works as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Celestia App: creates an attestation on the state machine level that needs to\nbe signed"),(0,n.kt)("li",{parentName:"ul"},"The Orchestrator: queries the attestation, signs it, then submits the signature\nback to Celestia App")),(0,n.kt)("p",null,"The diagram below goes over this process."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Orchestrator",src:r(7386).Z,width:"1218",height:"766"})),(0,n.kt)("p",null,"The Relayer deploys the QGB smart contract first to the EVM L1 chain (if it is\nnot deployed before), and then relays the attestations from Celestia App to the\nEVM L1 Chain."),(0,n.kt)("p",null,"The diagram below goes over this process."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Relayer",src:r(4609).Z,width:"1703",height:"525"})),(0,n.kt)("p",null,"You can learn more about the mechanics behind the Relayer in this\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-004-qgb-relayer-security.md"},"ADR"),"."),(0,n.kt)("h2",{id:"setting-up-the-qgb"},"Setting up the QGB"),(0,n.kt)("p",null,"The following sections in this category presume you have the following setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Celestia App ",(0,n.kt)("a",{parentName:"li",href:"../validator-node"},"Validator")," running"),(0,n.kt)("li",{parentName:"ul"},"A Celestia Node - ",(0,n.kt)("a",{parentName:"li",href:"../bridge-node"},"Bridge Node")," running")),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../qgb-binary"},"Install the binary")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../qgb-orchestrator"},"QGB Orchestrator")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../qgb-keys"},"Key management")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../qgb-relayer"},"QGB Relayer")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../qgb-deploy"},"Deploy the QGB contract"))))}h.isMDXComponent=!0},5621:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/qgb-diagram-dc8f86cd4aa81244b7bd1d7e1a3eb2ca.png"},7386:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/qgb-orchestrator-d58f757c282863773efe2e687658f533.png"},4609:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/qgb-relayer-52248ab84c2e83d177e3e25226700ab0.png"}}]);