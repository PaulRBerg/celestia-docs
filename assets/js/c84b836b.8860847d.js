"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.1","node-latest-sha":"c958fd3b3921ca993489d88530e59fe7f337bf4d"})},8842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.1-tm-v0.34.27","core-latest-sha":"904ca9e002d1cd7220b4288113197e2e9bdf7ad5","node-latest-tag":"v0.10.2","node-latest-sha":"960b522ec4ed2fb2069a220e2cef2da609158f4d"})},8549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var n=a(7462),r=(a(7294),a(3905)),l=a(8549),o=a(464),s=a(8842),i=a(4866),u=a(5162);const c={sidebar_label:"Installing Celestia App",description:"Learn how you can build Celestia App."},p="Celestia App",d={unversionedId:"nodes/celestia-app",id:"nodes/celestia-app",title:"Celestia App",description:"Learn how you can build Celestia App.",source:"@site/docs/nodes/celestia-app.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-app",permalink:"/nodes/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia App",description:"Learn how you can build Celestia App."},sidebar:"nodes",previous:{title:"Installing Celestia Node",permalink:"/nodes/celestia-node"},next:{title:"Node video tutorials",permalink:"/developers/light-node-video"}},m={},b=[{value:"Install celestia-app",id:"install-celestia-app",level:2},{value:"Ports",id:"ports",level:2}],g={toc:b},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-app"},"Celestia App"),(0,r.kt)("p",null,"This tutorial will guide you through building ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),". This\ntutorial presumes you completed the steps in setting up your\nown environment ",(0,r.kt)("a",{parentName:"p",href:"/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"install-celestia-app"},"Install celestia-app"),(0,r.kt)("p",null,"The steps below will create a binary file named ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node.\nBe sure to select the correct network to install the binary for."),(0,r.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME",(0,r.kt)("br",null),"rm -rf celestia-app",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git",(0,r.kt)("br",null),"cd celestia-app/",(0,r.kt)("br",null),"APP_VERSION=",s.Z["app-latest-tag"],(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION",(0,r.kt)("br",null),"make install",(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME",(0,r.kt)("br",null),"rm -rf celestia-app",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git",(0,r.kt)("br",null),"cd celestia-app/",(0,r.kt)("br",null),"APP_VERSION=",l.Z["app-latest-tag"],(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION",(0,r.kt)("br",null),"make install",(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME",(0,r.kt)("br",null),"rm -rf celestia-app",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git",(0,r.kt)("br",null),"cd celestia-app/",(0,r.kt)("br",null),"APP_VERSION=",o.Z["app-latest-tag"],(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION",(0,r.kt)("br",null),"make install",(0,r.kt)("br",null))))),(0,r.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,r.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia-app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')),(0,r.kt)("h2",{id:"ports"},"Ports"),(0,r.kt)("p",null,"When interacting with a Celestia node,\nyou may need to open ports on your machine to allow\ncommunication between nodes, such as bridge nodes. It is essential that\nspecific ports are accessible. Make sure that your firewall allows\nconnections to the correct ports."),(0,r.kt)("p",null,"If you run a node on a cloud server, make sure that the ports are open\non the server's firewall. If you run a node at home, make sure that your\nrouter allows connections to the correct ports."),(0,r.kt)("p",null,"For example, validator ports 9090\nand 26657 need to be accessible by the bridge, and port 2121 is\nrequired for P2P connections for all node types."),(0,r.kt)("p",null,"The following ports are used by Celestia app nodes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Enabled by default on node"),(0,r.kt)("th",{parentName:"tr",align:null},"Flag"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2121"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"P2P"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9090"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--grpc.address string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26657"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"false (only open to localhost)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--rpc.laddr string"))))))}h.isMDXComponent=!0}}]);