"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Bubs testnet",description:"The first testnet built with OP Stack and Celestia."},o="Bubs testnet",s={unversionedId:"developers/bubs-testnet",id:"developers/bubs-testnet",title:"Bubs testnet",description:"The first testnet built with OP Stack and Celestia.",source:"@site/docs/developers/bubs-testnet.md",sourceDirName:"developers",slug:"/developers/bubs-testnet",permalink:"/fr/developers/bubs-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/bubs-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Bubs testnet",description:"The first testnet built with OP Stack and Celestia."},sidebar:"developers",previous:{title:"Introduction to OP Stack integration",permalink:"/fr/developers/intro-to-op-stack"},next:{title:"Deploy a smart contract on Bubs testnet",permalink:"/fr/developers/deploy-on-bubs"}},l={},p=[{value:"Built with the OP Stack and Celestia",id:"built-with-the-op-stack-and-celestia",level:2},{value:"Building on Bubs",id:"building-on-bubs",level:2},{value:"RPC URLs",id:"rpc-urls",level:3},{value:"HTTPS",id:"https",level:4},{value:"WSS",id:"wss",level:4},{value:"Faucet",id:"faucet",level:3},{value:"Explorer",id:"explorer",level:3},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bubs-testnet"},"Bubs testnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bubs testnet",src:n(1243).Z,width:"2500",height:"1320"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bubstestnet.com"},"Bubs Testnet")," is a fresh offering from\n",(0,r.kt)("a",{parentName:"p",href:"https://caldera.xyz"},"Caldera")," with support from Celestia Labs,\nbuilt with OP Stack and Celestia, and is dedicated to providing developers with\nan EVM-compatible execution layer to deploy their EVM applications on."),(0,r.kt)("h2",{id:"built-with-the-op-stack-and-celestia"},"Built with the OP Stack and Celestia"),(0,r.kt)("p",null,"The Bubs Testnet is a testnet rollup, a modified version of\n",(0,r.kt)("inlineCode",{parentName:"p"},"optimism-bedrock")," that uses Celestia as a data availability (DA)\nlayer. This integration can be found in this\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism"},"repository"),". The testnet\nis hosted by ",(0,r.kt)("a",{parentName:"p",href:"https://caldera.xyz"},"Caldera"),", who makes it easy to launch\nrollups with no code required."),(0,r.kt)("p",null,"In this setup, data handling is accomplished in two ways. Firstly, data is\nwritten to the DA layer, in this case, Celestia\n(on the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/arabica-devnet"},"Arabica devnet"),"). Then, the data\ncommitment is written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),". When reading, the ",(0,r.kt)("inlineCode",{parentName:"p"},"op-node"),"\nretrieves the data back from the DA layer by first reading the data commitment\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),", then reading the data from the DA layer using the data\ncommitment. Hence, while previously ",(0,r.kt)("inlineCode",{parentName:"p"},"op-node")," was reading from ",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on\nEthereum, it now reads data from Celestia."),(0,r.kt)("p",null,"The tools involved in the data handling process include ",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),",\nwhich batches up rollup blocks and posts them to Ethereum, ",(0,r.kt)("inlineCode",{parentName:"p"},"op-geth"),"\nthat handles execution, and ",(0,r.kt)("inlineCode",{parentName:"p"},"op-proposer")," responsible for state commitment\nsubmission."),(0,r.kt)("p",null,"By using Celestia as a DA layer, existing L2s can switch from posting their\ndata as ",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on Ethereum to posting to Celestia. The commitment to the\nblock is posted on Celestia, which is purpose-built for data availability.\nThis is more scalable than the traditional method of posting this data as\n",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on monolithic chains."),(0,r.kt)("h2",{id:"building-on-bubs"},"Building on Bubs"),(0,r.kt)("p",null,"Bubs Testnet provides a robust environment for developers to test their\nEthereum Virtual Machine (EVM) applications. It offers an EVM-compatible\nexecution layer, making it an ideal platform for developers looking to\nbuild and test applications in a setting that closely mirrors an OP Stack\nrollup on Celestia."),(0,r.kt)("p",null,"Learn more at ",(0,r.kt)("a",{parentName:"p",href:"https://bubstestnet.com"},"bubstestnet.com"),"."),(0,r.kt)("h3",{id:"rpc-urls"},"RPC URLs"),(0,r.kt)("p",null,"Remote Procedure Call (RPC) URLs are endpoints that allow developers to\ninteract with the blockchain. They are essential for sending transactions,\nquerying blockchain data, and performing other interactions with the\nblockchain."),(0,r.kt)("p",null,"For the Bubs Testnet, you can connect to the following RPC URLs:"),(0,r.kt)("h4",{id:"https"},"HTTPS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://bubs.calderachain.xyz/http"))),(0,r.kt)("h4",{id:"wss"},"WSS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wss://bubs.calderachain.xyz/ws"))),(0,r.kt)("p",null,"This URL serves as the entry point to the Bubs Testnet. You can use it\nin your applications to connect to the testnet and interact with the smart\ncontracts you deploy there."),(0,r.kt)("p",null,"Remember, Bubs Testnet is a testing environment!"),(0,r.kt)("h3",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"To visit the Bubs testnet faucet, go to\n",(0,r.kt)("a",{parentName:"p",href:"https://bubstestnet.com"},(0,r.kt)("inlineCode",{parentName:"a"},"https://bubstestnet.com")),"."),(0,r.kt)("h3",{id:"explorer"},"Explorer"),(0,r.kt)("p",null,"To visit the explorer, go to\n",(0,r.kt)("a",{parentName:"p",href:"https://explorer.bubstestnet.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"https://explorer.bubstestnet.com/")),"."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that you have a better understanding of the Bubs Testnet and its\nintegration of OP Stack and Celestia, you can start exploring its\ncapabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../deploy-on-bubs"},"Deploy a smart contract on Bubs testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../gm-portal-bubs"},"Deploy a GM Portal dapp on Bubs testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thirdweb.com/bubs-testnet"},"Deploy a smart contract with Thirdweb"))))}d.isMDXComponent=!0},1243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Celestia_Bubs_Testnet-832dc7aac96c45dba91b5151f52bbb8f.jpg"}}]);