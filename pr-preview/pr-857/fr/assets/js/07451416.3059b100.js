"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"IBC Relaying Guide",description:"Learn how to establish IBC connections and relay packets."},s="IBC Relaying Guide",o={unversionedId:"developers/ibc-relayer",id:"developers/ibc-relayer",title:"IBC Relaying Guide",description:"Learn how to establish IBC connections and relay packets.",source:"@site/docs/developers/ibc-relayer.md",sourceDirName:"developers",slug:"/developers/ibc-relayer",permalink:"/pr-preview/pr-857/fr/developers/ibc-relayer",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/ibc-relayer.md",tags:[],version:"current",frontMatter:{sidebar_label:"IBC Relaying Guide",description:"Learn how to establish IBC connections and relay packets."},sidebar:"developers",previous:{title:"Full stack modular blockchain development guide",permalink:"/pr-preview/pr-857/fr/developers/full-stack-modular-development-guide"},next:{title:"Demos on Celestia",permalink:"/pr-preview/pr-857/fr/developers/demos"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Install Rust",id:"install-rust",level:3},{value:"Build Hermes",id:"build-hermes",level:3},{value:"Hermes Configuration",id:"hermes-configuration",level:2},{value:"Add relayer wallets",id:"add-relayer-wallets",level:3},{value:"Verify configuration files",id:"verify-configuration-files",level:3},{value:"Create a connection between 2 chains",id:"create-a-connection-between-2-chains",level:2},{value:"Open connection over new clients",id:"open-connection-over-new-clients",level:3},{value:"Configure channels in Hermes",id:"configure-channels-in-hermes",level:3},{value:"Start the relayer",id:"start-the-relayer",level:2},{value:"Create Hermes systemd file",id:"create-hermes-systemd-file",level:3},{value:"Enable and start the hermes service",id:"enable-and-start-the-hermes-service",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ibc-relaying-guide"},"IBC Relaying Guide"),(0,r.kt)("p",null,"Celestia uses ",(0,r.kt)("a",{parentName:"p",href:"https://ibcprotocol.dev/"},"IBC"),"\n(Inter-Blockchain Communication protocol) to enable cross-chain\ntransfer of tokens. To support this capability it relies on\nrelayers, processes that can be run by anyone which constantly\nscan for outbound packets on one chain and submits these packets\nalongside corresponding proofs on the destination chain. This\nsection describes how one can setup a relayer and create new\nconnections between chains. There\nare two standard implementations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hermes.informal.systems/"},"Hermes")," built in Rust"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/cosmos/relayer"},"Go Relayer")," built in Go")),(0,r.kt)("p",null,"The following guide explains how to establish IBC connections and relay\npackets between ",(0,r.kt)("strong",{parentName:"p"},"Celestia's Blockspace Race")," and ",(0,r.kt)("strong",{parentName:"p"},"Dymension's 35-C"),"\nnetworks by using the Hermes relayer."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This guide was adapted from\n",(0,r.kt)("a",{parentName:"em",href:"https://medium.com/qubelabs/ibc-connection-and-relaying-celestia-bsr-dymension-35-c-e4423699e856"},"https://medium.com/qubelabs/ibc-connection-and-relaying-celestia-bsr-dymension-35-c-e4423699e856"),".")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hermes.informal.systems/quick-start/"},"Hermes")," is an open-source\nRust implementation of an Inter-Blockchain Communication protocol (IBC)\nrelayer released as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ibc-relayer-cli")," crate. It includes a\nCLI for relaying packets between Cosmos SDK chains, as well as Prometheus\nmetrics and a REST API."),(0,r.kt)("h3",{id:"install-rust"},"Install Rust"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource \"$HOME/.cargo/env\"\n\nsudo apt-get install pkg-config libssl-dev\nsudo apt install librust-openssl-dev build-essential git\n")),(0,r.kt)("h3",{id:"build-hermes"},"Build Hermes"),(0,r.kt)("p",null,"Create a new directory and clone the Hermes repository.\nFor the latest available release see Hermes\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/hermes/tags"},"GitHub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/hermes\ngit clone https://github.com/informalsystems/hermes\ncd hermes\ngit checkout v1.5.0\ncargo install ibc-relayer-cli --bin hermes --locked\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," directory and copy the template ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},".hermes")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.hermes\nmkdir -p $HOME/.hermes/keys\ncp config.toml $HOME/.hermes\n")),(0,r.kt)("p",null,"Before proceeding, verify that Hermes is installed correctly by running ",(0,r.kt)("inlineCode",{parentName:"p"},"hermes version"),"."),(0,r.kt)("h2",{id:"hermes-configuration"},"Hermes Configuration"),(0,r.kt)("p",null,"After you have successfully installed Hermes and created the necessary folders,\nyou now have to edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," and add the appropriate configurations for\nthe chains you want to relay between."),(0,r.kt)("p",null,"For this tutorial, we will be using the following chains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Celestia's Blockspace Race ",(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace-0"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/blockspace-race/"},"https://docs.celestia.org/nodes/blockspace-race/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dymension's 35-C ",(0,r.kt)("inlineCode",{parentName:"p"},"35-C"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.dymension.xyz/validate/dymension-hub/build-dymd"},"https://docs.dymension.xyz/validate/dymension-hub/build-dymd")))),(0,r.kt)("p",null,"If you are running both nodes on the same server where Hermes is running,\nyou can use the local host. Please adjust the ports and IPs depending\non your configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano $HOME/.hermes/config.toml\n")),(0,r.kt)("p",null,"Please edit the Hermes configurations for your running nodes.\nDo not forget to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},'"chains"')," section generated by\ndefault with the example at the end of the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[[chains]]\nid = 'blockspacerace-0'\nrpc_addr = 'http://127.0.0.1:26657'\ngrpc_addr = 'http://127.0.0.1:9090'\nwebsocket_addr = 'ws://127.0.0.1:26657/websocket'\n\nrpc_timeout = '10s'\naccount_prefix = 'celestia'\nkey_name = 'hermes-celestia'\nstore_prefix = 'ibc'\ndefault_gas = 5000000\nmax_gas = 15000000\ngas_price = { price = 0.001, denom = 'utia' }\ngas_multiplier = 1.1\nmax_msg_num = 20\nmax_tx_size = 209715\nclock_drift = '20s'\nmax_block_time = '30s'\ntrusting_period = '21days'\ntrust_threshold = { numerator = '1', denominator = '3' }\nmemo_prefix = 'Enter your Memo'\naddress_type = { derivation = 'cosmos' }\n\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  []\n]\n\n\n[[chains]]\nid = '35-C'\nrpc_addr = 'http://127.0.0.1:26657'\ngrpc_addr = 'http://127.0.0.1:9090'\nwebsocket_addr = 'ws://127.0.0.1:26657/websocket'\n\nrpc_timeout = '10s'\naccount_prefix = 'dym'\nkey_name = 'hermes-dymension'\nstore_prefix = 'ibc'\ndefault_gas = 100000\nmax_gas = 15000000\ngas_price = { price = 0.025, denom = 'udym' }\ngas_multiplier = 1.1\nmax_msg_num = 30\nmax_tx_size = 2097152\nclock_drift = '5s'\nmax_block_time = '10s'\ntrusting_period = '21days'\ntrust_threshold = { numerator = '1', denominator = '3' }\nmemo_prefix = 'Enter your memo'\naddress_type = { derivation = 'cosmos' }\n\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  []\n]\n")),(0,r.kt)("admonition",{title:"caution",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Relayer needs chain data for at least 2/3 of the unbonding period,\nso make sure to use prunning settings that keep the state for longer\nperiod than the unbonding time. You can configure custom pruning in\n",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," for each chain.")),(0,r.kt)("h3",{id:"add-relayer-wallets"},"Add relayer wallets"),(0,r.kt)("p",null,"Now that we have successfully configured our relaying chains, we\nneed to import the wallets that will be used in the process. Please\nnote that both wallets need to be funded with the native tokens of\neach chain."),(0,r.kt)("p",null,"You can get faucet tokens in Discord:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Celestia: ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/celestiacommunity"},"https://discord.gg/celestiacommunity")),(0,r.kt)("li",{parentName:"ul"},"Dymension: ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/dymension"},"https://discord.gg/dymension"))),(0,r.kt)("p",null,"Add your seed phrase to a file and upload it to the server. Do not\nuse wallets for anything else but relaying to avoid running into\naccount sequence errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hermes keys add --chain blockspacerace-0 --mnemonic-file <seed-file>\nhermes keys add --chain C-35 --mnemonic-file <seed-file>\n")),(0,r.kt)("h3",{id:"verify-configuration-files"},"Verify configuration files"),(0,r.kt)("p",null,"After editing ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," and adding wallet keys, it\u2019s time to\ntest the configurations and ensure the system is healthy. Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hermes health-check\nhermes config validate\n")),(0,r.kt)("p",null,"If everything was set up correctly, you should be seeing similar outputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SUCCESS performed health check for all chains in the config\nSUCCESS "configuration is valid"\n')),(0,r.kt)("h2",{id:"create-a-connection-between-2-chains"},"Create a connection between 2 chains"),(0,r.kt)("p",null,"If you\u2019re attempting to create new connections, please ",(0,r.kt)("strong",{parentName:"p"},"always verify first"),"\nthat the chains in question don\u2019t already have connections and clients in\nplace and use the existing ones if they do. In that case you can\n",(0,r.kt)("strong",{parentName:"p"},"skip this step")," and go to ",(0,r.kt)("a",{parentName:"p",href:"#configure-channels-in-hermes"},"Configure channels in Hermes"),"\nsection."),(0,r.kt)("p",null,"In this example, we are creating a new connection with new clients between ",(0,r.kt)("inlineCode",{parentName:"p"},"35-C"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace-0")," networks."),(0,r.kt)("h3",{id:"open-connection-over-new-clients"},"Open connection over new clients"),(0,r.kt)("admonition",{title:"caution",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If a connection already exists, do not create a new one.\nMost networks already have appropriate relay paths set up!")),(0,r.kt)("p",null,"To create a new connection over new clients, use the following setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hermes create connection --a-chain 35-C --b-chain blockspacerace-0\n")),(0,r.kt)("p",null,"You should be seeing a similar output to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SUCCESS Connection {\n    delay_period: 0ns,\n    a_side: ConnectionSide {\n        chain: BaseChainHandle {\n            chain_id: ChainId {\n                id: "35-C",\n                version: 0,\n            },\n            runtime_sender: Sender { .. },\n        },\n        client_id: ClientId(\n            "07-tendermint-22",\n        ),\n        connection_id: Some(\n            ConnectionId(\n                "connection-15",\n            ),\n        ),\n    },\n    b_side: ConnectionSide {\n        chain: BaseChainHandle {\n            chain_id: ChainId {\n                id: "blockspacerace-0",\n                version: 0,\n            },\n            runtime_sender: Sender { .. },\n        },\n        client_id: ClientId(\n            "07-tendermint-0",\n        ),\n        connection_id: Some(\n            ConnectionId(\n                "connection-0",\n            ),\n        ),\n    },\n}\n')),(0,r.kt)("p",null,"Now that the connection has been established over new clients,\nwe need to create a new channel, by leveraging an existing connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hermes create channel --order unordered --a-chain 35-C --a-connection connection-15 --a-port  transfer --b-port transfer\n")),(0,r.kt)("p",null,"You should be seeing a similar output to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SUCCESS Channel {\n    ordering: Unordered,\n    a_side: ChannelSide {\n        chain: BaseChainHandle {\n            chain_id: ChainId {\n                id: "35-C",\n                version: 0,\n            },\n            runtime_sender: Sender { .. },\n        },\n        client_id: ClientId(\n            "07-tendermint-22",\n        ),\n        connection_id: ConnectionId(\n            "connection-15",\n        ),\n        port_id: PortId(\n            "transfer",\n        ),\n        channel_id: Some(\n            ChannelId(\n                "channel-14",\n            ),\n        ),\n        version: None,\n    },\n    b_side: ChannelSide {\n        chain: BaseChainHandle {\n            chain_id: ChainId {\n                id: "blockspacerace-0",\n                version: 0,\n            },\n            runtime_sender: Sender { .. },\n        },\n        client_id: ClientId(\n            "07-tendermint-0",\n        ),\n        connection_id: ConnectionId(\n            "connection-0",\n        ),\n        port_id: PortId(\n            "transfer",\n        ),\n        channel_id: Some(\n            ChannelId(\n                "channel-0",\n            ),\n        ),\n        version: None,\n    },\n    connection_delay: 0ns,\n}\n')),(0,r.kt)("admonition",{title:"Congratulations!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You have successfully created a new IBC connection between two networks.")),(0,r.kt)("h3",{id:"configure-channels-in-hermes"},"Configure channels in Hermes"),(0,r.kt)("p",null,"Now that we have created new connections and opened channels, we need to\nedit ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," again and add the newly created channels, or use the\nalready existing ones."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"35-C")," add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  ['transfer', 'channel-14'], # blockspacerace-0\n]\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace-0")," add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  ['transfer', 'channel-0'], # 35-C\n]\n")),(0,r.kt)("h2",{id:"start-the-relayer"},"Start the relayer"),(0,r.kt)("p",null,"To start the relayer, we will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," as a service for\nrunning applications as background processes."),(0,r.kt)("h3",{id:"create-hermes-systemd-file"},"Create Hermes systemd file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tee <<EOF >/dev/null /etc/systemd/system/hermes.service\n[Unit]\nDescription=hermes daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which hermes) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,r.kt)("h3",{id:"enable-and-start-the-hermes-service"},"Enable and start the hermes service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable hermes\nsudo systemctl start hermes\n")),(0,r.kt)("p",null,"You can follow the logs by using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo journalctl -u hermes.service -f"),".\nIf the relayer is set up successfully, upon starting, you should be\nseeing a similar output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"INFO ThreadId(01) spawn:chain{chain=35-C}: spawning Wallet worker: wallet::35-C\nINFO ThreadId(01) spawn:chain{chain=blockspacerace-0}: spawning Wallet worker: wallet::blockspacerace-0\n2023-05-12T22:51:03.193852Z  INFO ThreadId(01) Hermes has started\n")),(0,r.kt)("p",null,"Good luck with relaying IBC packets! \ud83d\udd25"))}u.isMDXComponent=!0}}]);