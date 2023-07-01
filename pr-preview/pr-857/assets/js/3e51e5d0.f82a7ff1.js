"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Deploy a bridge node",description:"Instructions for deploying a Celestia Bridge Node."},i="Deploy a bridge node",l={unversionedId:"nodes/itn-deploy-bridge",id:"nodes/itn-deploy-bridge",title:"Deploy a bridge node",description:"Instructions for deploying a Celestia Bridge Node.",source:"@site/docs/nodes/itn-deploy-bridge.md",sourceDirName:"nodes",slug:"/nodes/itn-deploy-bridge",permalink:"/pr-preview/pr-857/nodes/itn-deploy-bridge",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-deploy-bridge.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy a bridge node",description:"Instructions for deploying a Celestia Bridge Node."}},s={},d=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-bridge-node"},"Deploy a bridge node"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Deploy a Celestia Bridge Node and Perform Data Availability\nSampling (DAS)."),(0,o.kt)("p",null,"You can find resources on doing this by following the\ntutorial ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/bridge-node"},"here"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#submit-a-pfd-transaction"},"here"),"."),(0,o.kt)("p",null,"For an RPC endpoint, you as a Bridge Node Operator must run your own\nFull Consensus Node and connect your Bridge Node to it."),(0,o.kt)("p",null,"The docs for that are found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/full-consensus-node"},"here"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you encounter errors, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-857/nodes/celestia-node#upgrading-your-binary"},"upgrading your binary"),"\nand the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-857/nodes/celestia-node#troubleshooting"},"troubleshooting"),"\nsections on the Install Celestia Node page."),(0,o.kt)("p",{parentName:"admonition"},"The errors you may encounter for a bridge node are:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"storing EDS to eds.Store for block height XXXXX: failed to check if root already exists in index: failed to acquire reader of mount on initialization: mount fetch failed: open /home/avril14th/.celestia-bridge-blockspacerace-0/transients/transient-B82CC0ED0F163D0BB3604A176B650D3E83A47D68505362CC54EAEE4ABCF84DA9.partial: too many open files\n"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that the wallet address the node uses is funded.\nTo find your auto generated wallet by your node, use:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --node.type bridge --keyring-backend test --p2p.network blockspacerace\n")),(0,o.kt)("p",{parentName:"admonition"},"The keys directory under\n",(0,o.kt)("inlineCode",{parentName:"p"},".celestia-bridge-blockspacerace-0/keys"),"\ncontains your pubkey for both DA and Tendermint networks.\nIn the leaderboard your pubkey for DA nodes looks similar to this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"12D3KooWJ3K6x9mXvy9oAJMr2gjeJ45KtU1LH6aL5stKF8YtRkkm\n")),(0,o.kt)("p",{parentName:"admonition"},"If you move the keys folder, you will need to upgrade permissions with:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 keys\n")),(0,o.kt)("p",{parentName:"admonition"},"To learn more, visit the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key/"},"Wallet with Celestia Node")," page.")),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup Your Celestia Bridge Node"),(0,o.kt)("li",{parentName:"ol"},"How to find your bridge Node ID is found\n",(0,o.kt)("a",{parentName:"li",href:"../../developers/node-tutorial/#get-your-node-id"},"here")),(0,o.kt)("li",{parentName:"ol"},"Make sure that the wallet address the node uses is funded"),(0,o.kt)("li",{parentName:"ol"},"The keys directory under ",(0,o.kt)("inlineCode",{parentName:"li"},".celestia-bridge-blockspacerace-0/keys"),"\ncontains your ",(0,o.kt)("inlineCode",{parentName:"li"},"pubkey")," for both DA and Tendermint networks. In\nthe leaderboard your pubkey for DA nodes looks similar to this\n",(0,o.kt)("inlineCode",{parentName:"li"},"12D3KooWSJoAF9pF7AkyEAhQCtNF9TA8JrAujWdqoPJ11uojuKZb"))),(0,o.kt)("p",null,"Please do a backup of the keys directory in order to not lose your progress."),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points for submitting Node ID and wallet address."),(0,o.kt)("li",{parentName:"ol"},"No points for not submitting both.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Please submit your Bridge Node ID and wallet address."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"celestia1vsvx8n7f8dh5udesqqhgrjutyun7zqrgehdq2l")))}c.isMDXComponent=!0}}]);