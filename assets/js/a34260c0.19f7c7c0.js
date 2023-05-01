"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(m,l(l({ref:t},h),{},{components:a})):r.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},l="QGB Relayer",i={unversionedId:"nodes/qgb-relayer",id:"nodes/qgb-relayer",title:"QGB Relayer",description:"The role of the relayer is to gather attestations' signatures from the orchestrators, and submit them to a target EVM chain. The attestations are generated within the QGB module of the Celestia-app state machine. To learn more about what attestations are, you can refer to this link.",source:"@site/docs/nodes/qgb-relayer.md",sourceDirName:"nodes",slug:"/nodes/qgb-relayer",permalink:"/nodes/qgb-relayer",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-relayer.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Key management",permalink:"/nodes/qgb-keys"},next:{title:"Deploy the QGB contract",permalink:"/nodes/qgb-deploy"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"How to run",id:"how-to-run",level:2},{value:"Install the QGB binary",id:"install-the-qgb-binary",level:3},{value:"Init the store",id:"init-the-store",level:3},{value:"Add keys",id:"add-keys",level:3},{value:"EVM key",id:"evm-key",level:4},{value:"Start the relayer",id:"start-the-relayer",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"qgb-relayer"},"QGB Relayer"),(0,n.kt)("p",null,"The role of the relayer is to gather attestations' signatures from the orchestrators, and submit them to a target EVM chain. The attestations are generated within the QGB module of the Celestia-app state machine. To learn more about what attestations are, you can refer to this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/tree/main/x/qgb"},"link"),"."),(0,n.kt)("p",null,"Also, while every validator in the Celestia validator set needs to run an orchestrator, we only need one entity to run the relayer, and it can be anyone. Thus, if you're a validator, most likely you want to read the orchestrator documentation ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/orchestrator.md"},"here"),"."),(0,n.kt)("p",null,"Every relayer needs to target a QGB smart contract. This latter can be deployed, if not already, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"qgb deploy")," command. More details in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/deploy.md"},"here"),"."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The relayer works as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect to a Celestia-app full node or validator node via RPC and gRPC and wait for attestations."),(0,n.kt)("li",{parentName:"ol"},"Once an attestation is created inside the QGB state machine, the relayer queries it."),(0,n.kt)("li",{parentName:"ol"},"After getting the attestation, the relayer checks if the target QGB smart contract's nonce is lower than the attestation."),(0,n.kt)("li",{parentName:"ol"},"If so, the relayer queries the P2P network for signatures from the orchestrators."),(0,n.kt)("li",{parentName:"ol"},"Once the relayer finds more than 2/3s signatures, it submits them to the target QGB smart contract where they get validated."),(0,n.kt)("li",{parentName:"ol"},"Listen for new attestations and go back to step 2.")),(0,n.kt)("p",null,"The relayer connects to a separate P2P network than the consensus or the data availability one. So, we will provide bootstrappers for that one."),(0,n.kt)("p",null,"This means that even if the consensus node is already connected to the consensus network, if the relayer doesn't start with a list of bootstrapper to its specific network, then, it will not work and will output the following logs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\nI[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\nI[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\n")),(0,n.kt)("h2",{id:"how-to-run"},"How to run"),(0,n.kt)("h3",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,n.kt)("p",null,"Make sure to have the QGB binary installed. Check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/qgb-binary"},"here")," for more details."),(0,n.kt)("h3",{id:"init-the-store"},"Init the store"),(0,n.kt)("p",null,"Before starting the relayer, we will need to init the store:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb relayer init\n")),(0,n.kt)("p",null,"By default, the store will be created un ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.relayer"),". However, if you want to specify a custom location, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--home")," flag. Or, you can use the following environment variable:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"RELAYER_HOME")),(0,n.kt)("td",{parentName:"tr",align:null},"Home directory for the relayer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~/.relayer")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,n.kt)("h3",{id:"add-keys"},"Add keys"),(0,n.kt)("p",null,"In order for the relayer to start, it will need two private keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EVM private key"),(0,n.kt)("li",{parentName:"ul"},"P2P private key")),(0,n.kt)("p",null,"The EVM private key is the most important since it needs to be funded, so it is able to send transactions in the target EVM chain."),(0,n.kt)("p",null,"The P2P private key is optional, and a new one will be generated automatically on the start if none is provided."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," command will help you set up these keys:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb relayer keys  --help\n")),(0,n.kt)("p",null,"To add an EVM private key, check the next section."),(0,n.kt)("h4",{id:"evm-key"},"EVM key"),(0,n.kt)("p",null,"Because EVM keys are important, we provide a keystore that will help manage them. The keystore uses a file system keystore protected by a passphrase to store and open private keys."),(0,n.kt)("p",null,"To import your EVM private key, there is the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," subcommand to assist you with that:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb relayer keys evm import --help\n")),(0,n.kt)("p",null,"This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in ",(0,n.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts"},"here"),"."),(0,n.kt)("p",null,"After adding the key, you can check that it's added via running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb relayer keys evm list\n")),(0,n.kt)("p",null,"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," command, check the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," documentation in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/keys.md"},"here"),"."),(0,n.kt)("h3",{id:"start-the-relayer"},"Start the relayer"),(0,n.kt)("p",null,"Now that we have the store initialized, and we have a target QGB smart contract address, we can start the relayer. Make sure you have your Celestia-app node RPC and gRPC accessible, and able to connect to the P2P network bootstrappers."),(0,n.kt)("p",null,"The relayer accepts the following flags:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb relayer start --help\n\nRuns the QGB relayer to submit attestations to the target EVM chain\n\nUsage:\n  qgb relayer start <flags> [flags]\n\nFlags:\n  -c, --celes-grpc string          Specify the grpc address without the protocol prefix (default "localhost:9090")\n  -t, --celes-rpc string           Specify the rest rpc address (default "tcp://localhost:26657")\n  -a, --contract-address string    Specify the contract at which the qgb is deployed\n  -d, --evm-address string         Specify the EVM account address to use for signing (Note: the private key should be in the keystore)\n  -z, --evm-chain-id uint          Specify the evm chain id (default 5)\n  -l, --evm-gas-limit uint         Specify the evm gas limit (default 25000000)\n      --evm-passphrase string      the evm account passphrase (if not specified as a flag, it will be asked interactively)\n  -e, --evm-rpc string             Specify the ethereum rpc address (default "http://localhost:8545")\n  -h, --help                       help for start\n      --home string                The qgb relayer home directory\n  -b, --p2p-bootstrappers string   Comma-separated multiaddresses of p2p peers to connect to\n  -q, --p2p-listen-addr string     MultiAddr for the p2p peer to listen on (default "/ip4/127.0.0.1/tcp/30000")\n  -p, --p2p-nickname string        Nickname of the p2p private key to use (if not provided, an existing one from the p2p store or a newly generated one will be used)\n')),(0,n.kt)("p",null,"To start the relayer using the default home directory, run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"/bin/qgb relayer start \\\n  -d=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7 \\\n  -t=http://localhost:26657 \\\n  -c=localhost:9090 \\\n  -z=4 \\\n  -e=http://localhost:8545 \\\n  -a=0x35a1F8CE94187E4b043f4D57548EF2348Ed556c8 \\\n  -b=/ip4/127.0.0.1/tcp/30001/p2p/12D3KooWFFHahpcZcuqnUhpBoX5fJ68Qm5Hc8dxiBcX1oo46fLxh \\\n  -q=/ip4/0.0.0.0/tcp/30001\n")),(0,n.kt)("p",null,"And, you will be prompted to enter your EVM key passphrase for the EVM address passed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-d")," flag, so that the relayer can use it to send transactions to the target QGB smart contract. Make sure that it's funded."))}d.isMDXComponent=!0}}]);