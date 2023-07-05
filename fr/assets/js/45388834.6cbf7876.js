"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2175],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>b});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(t),u=l,b=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return t?n.createElement(b,r(r({ref:a},s),{},{components:t})):n.createElement(b,r({ref:a},s))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[p]="string"==typeof e?e:l,r[1]=d;for(var i=2;i<o;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4082:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=t(7462),l=(t(7294),t(3905));const o={sidebar_label:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock."},r="Deploy an OP Stack devnet",d={unversionedId:"developers/optimism-devnet",id:"developers/optimism-devnet",title:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock.",source:"@site/docs/developers/optimism-devnet.md",sourceDirName:"developers",slug:"/developers/optimism-devnet",permalink:"/fr/developers/optimism-devnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimism-devnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock."},sidebar:"developers",previous:{title:"Deploy a GM Portal dapp on Bubs testnet",permalink:"/fr/developers/gm-portal-bubs"},next:{title:"Deploy an OP Stack testnet on Celestia",permalink:"/fr/developers/optimism"}},c={},i=[{value:"Dependency setup",id:"dependency-setup",level:2},{value:"Environment setup and Golang installation",id:"environment-setup-and-golang-installation",level:3},{value:"Clone repository",id:"clone-repository",level:3},{value:"asdf",id:"asdf",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Docker compose",id:"docker-compose",level:3},{value:"gcc &amp; libusb",id:"gcc--libusb",level:3},{value:"Build devnet",id:"build-devnet",level:2},{value:"Start devnet",id:"start-devnet",level:3},{value:"View the logs of the devnet",id:"view-the-logs-of-the-devnet",level:3},{value:"Stop devnet",id:"stop-devnet",level:3},{value:"Viewing containers",id:"viewing-containers",level:3},{value:"Find a transaction",id:"find-a-transaction",level:2},{value:"Read the transaction call data",id:"read-the-transaction-call-data",level:2},{value:"Find the data on Celestia",id:"find-the-data-on-celestia",level:2}],s={toc:i},p="wrapper";function f(e){let{components:a,...t}=e;return(0,l.kt)(p,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-an-op-stack-devnet"},"Deploy an OP Stack devnet"),(0,l.kt)("p",null,"This guide will show you how to run your own OP Stack devnet."),(0,l.kt)("h2",{id:"dependency-setup"},"Dependency setup"),(0,l.kt)("h3",{id:"environment-setup-and-golang-installation"},"Environment setup and Golang installation"),(0,l.kt)("p",null,"Install dependencies ",(0,l.kt)("a",{parentName:"p",href:"/fr/nodes/environment"},"here"),"."),(0,l.kt)("h3",{id:"clone-repository"},"Clone repository"),(0,l.kt)("p",null,"Next, clone the repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/celestiaorg/optimism\ncd optimism\ngit checkout v0.1.0-OP_v1.0.6-CN_v0.10.0\n")),(0,l.kt)("p",null,"If you are using ",(0,l.kt)("strong",{parentName:"p"},"Arabica")," and deploying using the\n",(0,l.kt)("a",{parentName:"p",href:"../optimism/"},(0,l.kt)("strong",{parentName:"a"},"testnet deployment guide"))," use the following\nversion:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/celestiaorg/optimism\ncd optimism\ngit checkout v0.1.1-OP_v1.0.6-CN_v0.11.0-rc1\n")),(0,l.kt)("h3",{id:"asdf"},"asdf"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"asdf")," to allow us to intall a specific version of node easily:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.11.2\necho '. \"$HOME/.asdf/asdf.sh\"' >> ~/.bashrc\necho '. \"$HOME/.asdf/completions/asdf.bash\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,"Set the path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.asdf/bin/\n")),(0,l.kt)("p",null,"Check that it was installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf\n")),(0,l.kt)("h3",{id:"nodejs"},"Node.js"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"nodejs 16.16.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add nodejs\nasdf install nodejs 16.16.0\nasdf local nodejs 16.16.0\nsource ~/.bashrc\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install npm\n")),(0,l.kt)("p",null,"Update NPM to v9.6.5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g npm@9.6.5\n")),(0,l.kt)("h3",{id:"foundry"},"Foundry"),(0,l.kt)("p",null,"Download the Foundry script execute it to set up environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://foundry.paradigm.xyz/ | bash\n")),(0,l.kt)("p",null,"Set path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /root/.bashrc\n")),(0,l.kt)("p",null,"Run foundryup to install Foundry (",(0,l.kt)("inlineCode",{parentName:"p"},"forge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cast"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"anvil"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chisel"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"foundryup\n")),(0,l.kt)("h3",{id:"yarn"},"Yarn"),(0,l.kt)("p",null,"Install yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n")),(0,l.kt)("p",null,"Depending on the version installed,\nyou may need to update your version of NPM."),(0,l.kt)("h3",{id:"docker-compose"},"Docker compose"),(0,l.kt)("p",null,"Install docker-compose:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install docker-compose\n")),(0,l.kt)("h3",{id:"gcc--libusb"},"gcc & libusb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install gcc libusb-1.0-0-dev \n")),(0,l.kt)("h2",{id:"build-devnet"},"Build devnet"),(0,l.kt)("p",null,"Build TypeScript definitions for TS dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd optimism\nmake build-ts\n")),(0,l.kt)("p",null,"Set environment variables to start network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_BATCH_INBOX_ADDRESS=0xff00000000000000000000000000000000000000\nexport L2OO_ADDRESS=0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n")),(0,l.kt)("h3",{id:"start-devnet"},"Start devnet"),(0,l.kt)("p",null,"Start the network by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-up \n")),(0,l.kt)("p",null,"This starts up the layer 1 (ETH), layer 2 (",(0,l.kt)("inlineCode",{parentName:"p"},"op-geth"),"), data availability\nlayer (Celestia), the sequencer (",(0,l.kt)("inlineCode",{parentName:"p"},"op-node"),"), batch submitter (",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher"),"),\nstate commitment service (",(0,l.kt)("inlineCode",{parentName:"p"},"op-proposer"),")."),(0,l.kt)("h3",{id:"view-the-logs-of-the-devnet"},"View the logs of the devnet"),(0,l.kt)("p",null,"If you'd like to view the logs of the devnet, run the following command\nfrom the root of the Optimism directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-logs\n")),(0,l.kt)("admonition",{title:"optional",type:"tip"},(0,l.kt)("h4",{parentName:"admonition",id:"lazydocker"},"lazydocker"),(0,l.kt)("p",{parentName:"admonition"},"You can install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jesseduffield/lazydocker"},"lazydocker"),"\nto view all of the components of your stack in one GUI by running:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add lazydocker https://github.com/comdotlinux/asdf-lazydocker.git\nasdf list all lazydocker\nasdf install lazydocker 0.12\nasdf global lazydocker 0.12\n")),(0,l.kt)("p",{parentName:"admonition"},"And run the command:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lazydocker\n")),(0,l.kt)("p",{parentName:"admonition"},"If you do this, you can skip the ",(0,l.kt)("a",{parentName:"p",href:"#viewing-containers"},"viewing containers"),"\nsection and ",(0,l.kt)("a",{parentName:"p",href:"#find-a-transaction"},"find a transaction"),".")),(0,l.kt)("h3",{id:"stop-devnet"},"Stop devnet"),(0,l.kt)("p",null,"If you'd like to start the network over, use the following command\nto safely shut down all of the containers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-down\n")),(0,l.kt)("p",null,"Then clean out the old config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-clean\n")),(0,l.kt)("h3",{id:"viewing-containers"},"Viewing containers"),(0,l.kt)("p",null,"To view the containers running, send:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"Find the container ID of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ops-bedrock_op-batcher_1"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"In a new terminal, find the container ID of the\n",(0,l.kt)("inlineCode",{parentName:"p"},"ghcr.io/celestiaorg/local-celestia-devnet:main"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"You can do the same for other containers as you\nexplore the stack."),(0,l.kt)("h2",{id:"find-a-transaction"},"Find a transaction"),(0,l.kt)("p",null,"Now, we'll check for a recent transaction with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast block latest --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"Output of a block that contains a transaction will look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"baseFeePerGas        7\ndifficulty           2\nextraData            0xd883010a16846765746888676f312e31382e35856c696e75780000000000000001749030eb8e51903cf49e2c8c21e7ff98aaa7d45e3ecd51b8594440c5c66e9931b70b18d1a629212074f3ef9188bd0a9079e094e414d287f73d40ea8392349600\ngasLimit             30000000\ngasUsed              21072\nhash                 0x9d764f5e3e2ccf5a334ae4fbe3827e7b80750f39aa671c958b5c09a9b67d9dfc\nlogsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nminer                0x0000000000000000000000000000000000000000\nmixHash              0x0000000000000000000000000000000000000000000000000000000000000000\nnonce                0x0000000000000000\nnumber               1569\nparentHash           0x1a5100654617b565bf2a117c7487a57c54d0c61b99d94592518fbc07b3fec45d\nreceiptsRoot         0xa981da57b00630bb01a6eb02629212ea8b0c89281a07295ace6bb78c81193e68\nsealFields           []\nsha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\nsize                 740\nstateRoot            0x9d1e02cbf556997123676f47749a043b5bd9bebe629f5dbd3f256a7d5e37b665\ntimestamp            1677272382\ntotalDifficulty      3139\ntransactions:        [\n    0x40b79afe3dc05ff398c2142ab47eb94ac3759a03dd1322b2d97bcdc2d1c34934\n]\n")),(0,l.kt)("p",null,"And copy the transaction hash from ",(0,l.kt)("inlineCode",{parentName:"p"},"transactions: [<transaction-hash]")," and\nset it as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export TX_HASH=0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\n")),(0,l.kt)("h2",{id:"read-the-transaction-call-data"},"Read the transaction call data"),(0,l.kt)("p",null,"Now read the transaction call data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast tx $TX_HASH --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"The output will look similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"blockHash            0xce5691878b61e3b5bbae66317512365ef6bb1f597b4dfc11e585abf470cdf4dd\nblockNumber          1164\nfrom                 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC\ngas                  21072\ngasPrice             1000000007\nhash                 0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\ninput                0x0000000000000c2a00000000\nnonce                318\nr                    0x9a32da65f4dabf0e1c6d2a86d52c7d6f868997cfc1183fc28c5f0a0615a5e678\ns                    0x4ce385cc70a178b86d95de05428763805183276a6fd418c44e346a3838a70144\nto                   0xfF00000000000000000000000000000000000000\ntransactionIndex     0\nv                    0\nvalue                0\n")),(0,l.kt)("p",null,"Now set the ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT")," variable, removing the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x")," from the beginning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export INPUT=0000000000000c2a00000000\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Remember to remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x"),"!")),(0,l.kt)("h2",{id:"find-the-data-on-celestia"},"Find the data on Celestia"),(0,l.kt)("p",null,"Now navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"optimism/op-celestia")," and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go $INPUT\n")),(0,l.kt)("p",null,"Your result will look similar to the below!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"celestia block height: 3114; tx index: 0\n-----------------------------------------\noptimism block data on celestia: [00191cef8fb52cf322b77694ff5a92149800000000020b78dadae1c7f0c37b015fdd84970dfbe3ff4ab7abe8b9083c94aebe7df77e705bba47f8e72b762fadcecd6b62695920e9eee3e5369b3fd265726ebcfbfcbf3f5fcde3bd6960f53b7da1c147ae4fefe689b724ff54c83a0031ef93479f5a75f08e6a9bbd0b755c220e4ed8b3fd5c9cfc1b9ed0ca69dcabbf5cbd274aac793950f38ef6bd59e551e56d77fcf7aabd9287abd8af7b9de39cb3235732c58be7034774bf54134beb828c19b15f3553a74b64ffbd3a2fe0e8cbb77b0217dccb4f68de9774fbac5efaed040190797950f3e22bafc9d7884cf616d87db6a46ace99b277252dd36f9c7d5ebabfd46d5a71bec9872696b605173ccc153d4a7befbd69f64f6db25cc7dd59f86d5de586b457f7d759f73fe57fde0c32af006a5eebdcfb85d385b3ef3d158fbccaf263cb8b35cb2a58cc0f083f5cf3b742d555f3fe2362cd2b829a37c9c9446fedbf8d911f3f86cc79c335e960f26d5eef25e735f7dd9b926019dcf1ed5b134bfb02416e36be3b277635b757f36f2bff9260ddcf1f20132e5071afe8bcdd9ccdcffda440e69540cddbb548ecdd73863673ab122e2d36d69dfc8bd71be61dbae235cf63e3a9a0121141b726968e051d2b7ef076b11f3c9964b4fee0acfb93777fbd37d94dfdecfdd6836af39ebaaff58c07995706352fdf9259b773cfd42e0ed168914542c54ca28147969b18b7987ef233fcd41c1cde44ac79150700010000fffff649400701]\n")))}f.isMDXComponent=!0}}]);