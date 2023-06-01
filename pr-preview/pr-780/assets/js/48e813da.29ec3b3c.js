"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},578:(e,t,n)=>{n.d(t,{Z:()=>o});const o=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.19.1",golangNodeArabica:"1.20.2",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-8",bsrChainId:"blockspacerace-0",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},3092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),i=n(578);const r={sidebar_label:"Deploy an OP Stack testnet on Celestia",description:"Start your own testnet with a modified version of optimism-bedrock."},l="Deploy an OP Stack testnet with Celestia",s={unversionedId:"developers/optimism",id:"developers/optimism",title:"Deploy an OP Stack testnet with Celestia",description:"Start your own testnet with a modified version of optimism-bedrock.",source:"@site/docs/developers/optimism.mdx",sourceDirName:"developers",slug:"/developers/optimism",permalink:"/pr-preview/pr-780/developers/optimism",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimism.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy an OP Stack testnet on Celestia",description:"Start your own testnet with a modified version of optimism-bedrock."},sidebar:"developers",previous:{title:"Deploy an OP Stack devnet",permalink:"/pr-preview/pr-780/developers/optimism-devnet"},next:{title:"Rollups as a Service",permalink:"/pr-preview/pr-780/category/rollups-as-a-service"}},p={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Pick your deployment type",id:"pick-your-deployment-type",level:2},{value:"Using a local devnet",id:"using-a-local-devnet",level:3},{value:"Using a light node",id:"using-a-light-node",level:3},{value:"Using a RaaS provider",id:"using-a-raas-provider",level:3},{value:"Build the testnet",id:"build-the-testnet",level:2},{value:"Start the testnet",id:"start-the-testnet",level:2},{value:"View the logs of the testnet",id:"view-the-logs-of-the-testnet",level:2},{value:"Stop the testnet",id:"stop-the-testnet",level:2},{value:"Clean the testnet",id:"clean-the-testnet",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-an-op-stack-testnet-with-celestia"},"Deploy an OP Stack testnet with Celestia"),(0,a.kt)("p",null,"In order to deploy a testnet with Celestia, you will need to have a modified\nversion of ",(0,a.kt)("inlineCode",{parentName:"p"},"optimism-bedrock"),"."),(0,a.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,a.kt)("p",null,"You can find the steps to install dependencies\nand the modified version ",(0,a.kt)("a",{parentName:"p",href:"../optimism-devnet/"},"here"),"."),(0,a.kt)("h2",{id:"pick-your-deployment-type"},"Pick your deployment type"),(0,a.kt)("p",null,"Using Celestia and OP stack, you have the option to either\nrun a light node of your own or a ",(0,a.kt)("inlineCode",{parentName:"p"},"local-celestia-devnet"),",\nwhich will give you a local devnet to test things out with."),(0,a.kt)("h3",{id:"using-a-local-devnet"},"Using a local devnet"),(0,a.kt)("p",null,"If you'd like to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"local-celestia-devnet"),", you're in luck!\nThis is the default for the OP Stack + Celestia repository. Head\nto the ",(0,a.kt)("a",{parentName:"p",href:"../optimism-devnet/"},"previous page")," to get started."),(0,a.kt)("h3",{id:"using-a-light-node"},"Using a light node"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("strong",{parentName:"p"},"beta integration")," and we are working on resolving open\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/issues/"},"issues"),".\nThe current testnet this setup is compatible with is the\n",(0,a.kt)("a",{parentName:"p",href:"../../nodes/arabica-devnet/"},"Arabica")," devnet."),(0,a.kt)("p",{parentName:"admonition"},"In order to allow your light node to post\nand retrieve data without errors, you will need to change ",(0,a.kt)("inlineCode",{parentName:"p"},"UseShareExchange"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$HOME/.celestia-light-",i.Z.bsrChainId,"/config.toml"))),(0,a.kt)("p",null,"If you choose to use your own node store, the light node\nmust be ",(0,a.kt)("strong",{parentName:"p"},"fully synced")," and ",(0,a.kt)("strong",{parentName:"p"},"funded")," for you to be able to submit\nand retreive ",(0,a.kt)("inlineCode",{parentName:"p"},"PayForBlobs")," to a Celestia network."),(0,a.kt)("p",null,"If it is not synced, you will run into ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/issues/2151/"},"errors"),"."),(0,a.kt)("p",null,"Visit the ",(0,a.kt)("a",{parentName:"p",href:"../../nodes/arabica-devnet/"},"Arabica page"),"\nto visit the faucet."),(0,a.kt)("p",null,"In order to mount existing data, you must have a node store that is\nin this directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$HOME/.celestia-light-",i.Z.bsrChainId)),(0,a.kt)("p",null,"This is the default location of the node store when you initialize and run a new Celestia node."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The user in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose-testnet.yml")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," user,\nbut this is not meant to be used in production.")),(0,a.kt)("p",null,"By default, the node will run with the account named\n",(0,a.kt)("inlineCode",{parentName:"p"},"my_celes_key"),"."),(0,a.kt)("p",null,"If you have your own setup you'd like to try, you can always edit\n",(0,a.kt)("inlineCode",{parentName:"p"},"optimism/ops-bedrock/docker-compose-testnet.yml")," to work with your setup."),(0,a.kt)("h3",{id:"using-a-raas-provider"},"Using a RaaS provider"),(0,a.kt)("p",null,"If you'd like to use a Rollups as a Service (RaaS) provider, you can do so\nby going to the ",(0,a.kt)("a",{parentName:"p",href:"../../category/rollups-as-a-service/"},"RaaS category"),"."),(0,a.kt)("h2",{id:"build-the-testnet"},"Build the testnet"),(0,a.kt)("p",null,"Build TypeScript definitions for TS dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd optimism\nmake build-ts\n")),(0,a.kt)("p",null,"Set environment variables to start network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_BATCH_INBOX_ADDRESS=0xff00000000000000000000000000000000000000\nexport L2OO_ADDRESS=0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n")),(0,a.kt)("h2",{id:"start-the-testnet"},"Start the testnet"),(0,a.kt)("p",null,"First, make sure your light node is synced and funded."),(0,a.kt)("p",null,"Next, you can start up the testnet with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-up\n")),(0,a.kt)("h2",{id:"view-the-logs-of-the-testnet"},"View the logs of the testnet"),(0,a.kt)("p",null,"If you'd like to view the logs of the testnet, run the following command\nfrom the root of the Optimism directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-logs\n")),(0,a.kt)("h2",{id:"stop-the-testnet"},"Stop the testnet"),(0,a.kt)("p",null,"To safely stop the testnet, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-down\n")),(0,a.kt)("h2",{id:"clean-the-testnet"},"Clean the testnet"),(0,a.kt)("p",null,"To remove all data from the testnet, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-clean\n")))}m.isMDXComponent=!0}}]);