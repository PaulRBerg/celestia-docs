"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[122],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,r(r({ref:e},c),{},{components:n})):a.createElement(u,r({ref:e},c))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4857:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia."},r="Introduction to OP Stack integration",s={unversionedId:"developers/intro-to-op-stack",id:"developers/intro-to-op-stack",title:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia.",source:"@site/docs/developers/intro-to-op-stack.md",sourceDirName:"developers",slug:"/developers/intro-to-op-stack",permalink:"/fr/developers/intro-to-op-stack",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/intro-to-op-stack.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia."},sidebar:"developers",previous:{title:"Optimism",permalink:"/fr/category/optimism"},next:{title:"Deploy an OP Stack devnet",permalink:"/fr/developers/optimism-devnet"}},l={},p=[{value:"About the integration",id:"about-the-integration",level:2},{value:"Table of contents of the category",id:"table-of-contents-of-the-category",level:3},{value:"Celestia and OP Stack repository",id:"celestia-and-op-stack-repository",level:2},{value:"What are Optimism and the OP Stack?",id:"what-are-optimism-and-the-op-stack",level:3},{value:"What is Celestia?",id:"what-is-celestia",level:3},{value:"OP Stack and Celestia",id:"op-stack-and-celestia",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-op-stack-integration"},"Introduction to OP Stack integration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://optimism.io"},"Optimism")," is a low-cost and lightning-fast Ethereum\nL2 blockchain, built with ",(0,i.kt)("a",{parentName:"p",href:"https://stack.optimism.io/"},"the OP Stack"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia")," is a modular consensus and data network,\nbuilt to enable anyone to easily deploy their own blockchain with\nminimal overhead."),(0,i.kt)("h2",{id:"about-the-integration"},"About the integration"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Discover how to integrate existing blockchain frameworks\nlike the OP Stack\ncan integrate with Celestia in this category.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Tested on a machine with 8GB RAM, 160 GB SSD,\nUbuntu 22.10, and a 4 core AMD CPU.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is a ",(0,i.kt)("strong",{parentName:"p"},"beta integration")," and we are working on resolving open\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/issues"},"issues"),".\nThe current testnet this setup is compatible with is the\n",(0,i.kt)("a",{parentName:"p",href:"../../nodes/arabica-devnet"},"Arabica")," devnet.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"Optimism")," uses Ethereum as\na data availability (DA) layer. Currently, settlement and DA for\nOptimism are on Ethereum, both on-chain. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher")," batches up\nrollup blocks and posts to Ethereum."),(0,i.kt)("h3",{id:"table-of-contents-of-the-category"},"Table of contents of the category"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../optimism-devnet"},"Deploy an OP Stack devnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../optimism"},"Deploy an OP Stack testnet on Celestia"))),(0,i.kt)("h2",{id:"celestia-and-op-stack-repository"},"Celestia and OP Stack repository"),(0,i.kt)("p",null,"Find the repository for this integration\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/"},"here")," or at\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/celestiaorg/optimism"),"."),(0,i.kt)("h3",{id:"what-are-optimism-and-the-op-stack"},"What are Optimism and the OP Stack?"),(0,i.kt)("p",null,"Optimism, an Ethereum L2 blockchain, is powered by the OP Stack,\nwhich is also the foundation for the\n",(0,i.kt)("a",{parentName:"p",href:"https://app.optimism.io/announcement"},"Optimism Collective")," committed\nto the ",(0,i.kt)("strong",{parentName:"p"},"impact=profit")," principle. This rewards individuals for their\npositive contributions to the collective."),(0,i.kt)("p",null,"Optimism addresses crypto ecosystem coordination failures, like funding public\ngoods and infrastructure. The OP Stack fosters collaboration and prevents\nredundancy by creating a shared, open-source system for developing new L2\nblockchains within the proposed Superchain ecosystem."),(0,i.kt)("p",null,"As Optimism evolves, the OP Stack will adapt to include components from\nblockchain infrastructure to governance systems. This software suite aims\nto simplify L2 blockchain creation and support the Optimism ecosystem's\ngrowth and development."),(0,i.kt)("p",null,"Learn more about Optimism ",(0,i.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"here"),"."),(0,i.kt)("h3",{id:"what-is-celestia"},"What is Celestia?"),(0,i.kt)("p",null,"Celestia is a modular consensus and data network, built to enable anyone to\neasily deploy their own blockchain with minimal overhead."),(0,i.kt)("p",null,"Celestia is a minimal blockchain that only orders and publishes transactions\nand does not execute them. By decoupling the consensus and application\nexecution layers, Celestia modularizes the blockchain technology stack\nand unlocks new possibilities for decentralized application builders.\nLean more at ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia.org"),"."),(0,i.kt)("h2",{id:"op-stack-and-celestia"},"OP Stack and Celestia"),(0,i.kt)("p",null,"This category will guide you through how start your own devnet or testnet\nwith a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"optimism-bedrock")," that uses Celestia as a\nDA layer."),(0,i.kt)("p",null,"The handling of data is accomplished in two ways. First, data is written\nto the data availability (DA) layer i.e. in this case Celestia, then the\ndata commitment is written to the ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher"),". When reading ",(0,i.kt)("inlineCode",{parentName:"p"},"op-node"),"\nsimply reads the data back from the DA layer by reading the\ndata commitment from the ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher")," first, then reading the\ndata from the DA layer using the data commitment. Hence, while\npreviously ",(0,i.kt)("inlineCode",{parentName:"p"},"op-node")," was reading from calldata on Ethereum,\nbut now it reads data from Celestia."),(0,i.kt)("p",null,"There are a few tools involved in the data handling process. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher"),"\nbatches up rollup blocks and posts them to Ethereum. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-geth")," handles\nexecution, while ",(0,i.kt)("inlineCode",{parentName:"p"},"op-proposer")," is responsible for state commitment\nsubmission."),(0,i.kt)("p",null,"By using Celestia as a DA layer, existing L2s can switch from posting\ntheir data as ",(0,i.kt)("inlineCode",{parentName:"p"},"calldata")," on Ethereum, to posting to Celestia.\nThe commitment to the block is posted on Celestia, which is\npurpose-built for data availability. This is a more scalable than\nthe traditional method of posting this data as ",(0,i.kt)("inlineCode",{parentName:"p"},"calldata")," on monolithic chains."),(0,i.kt)("p",null,"If you'd like to go modular, bedrock has\nmade it easy to swap this out!"),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Now that you understand the integration, you can start learning about the\n",(0,i.kt)("a",{parentName:"p",href:"../taro-testnet"},"Taro testnet"),", built with OP Stack and Celestia! This\ntestnet is a great way to explore the possibilities of this integration\nand test your applications in a live environment."))}d.isMDXComponent=!0}}]);