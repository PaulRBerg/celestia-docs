"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Deploy a full storage node",description:"Instructions for deploying a Celestia Full Storage Node."},i="Deploy a full storage node",l={unversionedId:"nodes/itn-deploy-full",id:"nodes/itn-deploy-full",title:"Deploy a full storage node",description:"Instructions for deploying a Celestia Full Storage Node.",source:"@site/docs/nodes/itn-deploy-full.md",sourceDirName:"nodes",slug:"/nodes/itn-deploy-full",permalink:"/pr-preview/pr-874/nodes/itn-deploy-full",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-deploy-full.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy a full storage node",description:"Instructions for deploying a Celestia Full Storage Node."}},s={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-a-full-storage-node"},"Deploy a full storage node"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Deploy a Celestia Full Storage Node and Perform Data Availability\nSampling (DAS)."),(0,r.kt)("p",null,"You can find resources on doing this by following the\ntutorial ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/full-storage-node"},"here"),"."),(0,r.kt)("p",null,"For an RPC endpoint to connect to, please see the list ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/blockspace-race/#rpc-endpoints"},"here"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you encounter errors, please visit the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-874/nodes/celestia-node#upgrading-your-binary"},"upgrading your binary"),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-874/nodes/celestia-node#troubleshooting"},"troubleshooting"),"\nsections on the Install Celestia Node page."),(0,r.kt)("p",{parentName:"admonition"},"The errors you may encounter for a full node are:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"storing EDS to eds.Store for block height XXXXX: failed to check if root already exists in index: failed to acquire reader of mount on initialization: mount fetch failed: open /home/avril14th/.celestia-bridge-blockspacerace-0/transients/transient-B82CC0ED0F163D0BB3604A176B650D3E83A47D68505362CC54EAEE4ABCF84DA9.partial: too many open files\n"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that the wallet address the node uses is funded.\nTo find your auto generated wallet by your node, use:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --node.type full --keyring-backend test --p2p.network blockspacerace\n")),(0,r.kt)("p",{parentName:"admonition"},"The keys directory under\n",(0,r.kt)("inlineCode",{parentName:"p"},".celestia-full-blockspacerace-0/keys"),"\ncontains your pubkey for both DA and Tendermint networks.\nIn the leaderboard your pubkey for DA nodes looks similar to this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"12D3KooWJ3K6x9mXvy9oAJMr2gjeJ45KtU1LH6aL5stKF8YtRkkm\n")),(0,r.kt)("p",{parentName:"admonition"},"If you move the keys folder, you will need to upgrade permissions with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 keys\n")),(0,r.kt)("p",{parentName:"admonition"},"To learn more, visit the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key/"},"Wallet with Celestia Node")," page.")),(0,r.kt)("h2",{id:"directions"},"Directions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup Your Celestia Full Storage Node"),(0,r.kt)("li",{parentName:"ol"},"How to find your full storage Node ID is found\n",(0,r.kt)("a",{parentName:"li",href:"../../developers/node-tutorial/#get-your-node-id"},"here")),(0,r.kt)("li",{parentName:"ol"},"Make sure that the wallet address the node uses is funded."),(0,r.kt)("li",{parentName:"ol"},"The keys directory under ",(0,r.kt)("inlineCode",{parentName:"li"},".celestia-full-blockspacerace-0/keys"),"\ncontains your ",(0,r.kt)("inlineCode",{parentName:"li"},"pubkey")," for both DA and Tendermint networks. In the\nleaderboard your pubkey for DA nodes looks similar to this\n",(0,r.kt)("inlineCode",{parentName:"li"},"12D3KooWSJoAF9pF7AkyEAhQCtNF9TA8JrAujWdqoPJ11uojuKZb"))),(0,r.kt)("p",null,"Please do a backup of the keys directory in order to not lose your progress."),(0,r.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Full points for submitting Node ID and wallet address."),(0,r.kt)("li",{parentName:"ol"},"No points for not submitting both.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"Please submit your Full Storage Node ID and Wallet Address."),(0,r.kt)("p",null,"Submission link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"celestia1vsvx8n7f8dh5udesqqhgrjutyun7zqrgehdq2l")))}c.isMDXComponent=!0}}]);