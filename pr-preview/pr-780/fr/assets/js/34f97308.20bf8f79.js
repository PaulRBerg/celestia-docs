"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Deploy a smart contract on Taro testnet",c={unversionedId:"developers/deploy-on-taro",id:"developers/deploy-on-taro",title:"Deploy a smart contract on Taro testnet",description:"In this tutorial, we will deploy a smart contract to the",source:"@site/docs/developers/deploy-on-taro.md",sourceDirName:"developers",slug:"/developers/deploy-on-taro",permalink:"/pr-preview/pr-780/fr/developers/deploy-on-taro",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/deploy-on-taro.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Setup",id:"setup",level:2},{value:"Create your smart contract",id:"create-your-smart-contract",level:2},{value:"Test your smart contract",id:"test-your-smart-contract",level:2},{value:"Deploying your smart contract",id:"deploying-your-smart-contract",level:2},{value:"Using Anvil",id:"using-anvil",level:3},{value:"Using Taro",id:"using-taro",level:3},{value:"Interacting with your smart contract",id:"interacting-with-your-smart-contract",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-a-smart-contract-on-taro-testnet"},"Deploy a smart contract on Taro testnet"),(0,a.kt)("p",null,"In this tutorial, we will deploy a smart contract to the\nTaro testnet."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getfoundry.sh/"},"Foundry")," installed on your machine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of Ethereum"),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of Solidity and Node.js"),(0,a.kt)("li",{parentName:"ul"},"Taro ETH from the ",(0,a.kt)("a",{parentName:"li",href:"https://tarofaucet.com"},"Taro faucet")),(0,a.kt)("li",{parentName:"ul"},"A Taro RPC URL from the ",(0,a.kt)("a",{parentName:"li",href:"../taro-testnet"},"Taro testnet page"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First, in your ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME")," directory, set up a new project folder for this\ntutorial and init the project with npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nmkdir counter-project && cd counter-project && npm init -y\n")),(0,a.kt)("p",null,"Next, initialize a Foundry project with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge init counter_contract\n")),(0,a.kt)("h2",{id:"create-your-smart-contract"},"Create your smart contract"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.sol")," file in your\n",(0,a.kt)("inlineCode",{parentName:"p"},"counter-project/counter_contract/src")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\ncontract Counter {\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n}\n")),(0,a.kt)("p",null,'The contract contains a public unsigned integer variable named "number".\nThere are two public functions in this contract. The ',(0,a.kt)("inlineCode",{parentName:"p"},"setNumber"),' function\nallows anyone to set a new value for the "number" variable, while the\n',(0,a.kt)("inlineCode",{parentName:"p"},"increment"),' function increases the value of "number" by one each time it\'s\ncalled.'),(0,a.kt)("p",null,"You can learn more about Solidity and smart contract programming\n",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/learning-tools/"},"here"),"."),(0,a.kt)("p",null,"To compile the contract, run the following forge command from the\n",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/counter-project/counter_contract/")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge build\n")),(0,a.kt)("p",null,"Your output should look similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\u2822] Compiling...\n[\u2814] Compiling 21 files with 0.8.19\n[\u2811] Solc 0.8.19 finished in 1.24s\nCompiler run successful\n")),(0,a.kt)("h2",{id:"test-your-smart-contract"},"Test your smart contract"),(0,a.kt)("p",null,"Now, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"test/Counter.t.sol")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\nimport "forge-std/Test.sol";\nimport "../src/Counter.sol";\n\ncontract CounterTest is Test {\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(0);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        assertEq(counter.number(), 1);\n    }\n\n    function testSetNumber(uint256 x) public {\n        counter.setNumber(x);\n        assertEq(counter.number(), x);\n    }\n}\n')),(0,a.kt)("p",null,"This file performs unit testing on the contract we created in the previous\nsection. Here's what the test is doing:"),(0,a.kt)("p",null,'The contract includes a public "Counter" type variable called "counter".\nIn the ',(0,a.kt)("inlineCode",{parentName:"p"},"setUp"),' function, it initializes a new instance of the "Counter"\ncontract and sets the "number" variable to 0.'),(0,a.kt)("p",null,"There are two test functions in the contract: ",(0,a.kt)("inlineCode",{parentName:"p"},"testIncrement")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"testSetNumber"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"testIncrement"),' function tests the "increment" function of the\n"Counter" contract by calling it and then asserting that the "number" in\nthe "Counter" contract is 1. It verifies if the increment operation\ncorrectly increases the number by one.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"testSetNumber"),' function is more generic. It takes an unsigned integer\nargument \'x\' and tests the "setNumber" function of the "Counter" contract.\nAfter calling the "setNumber" function with \'x\', it asserts that the\n"number" in the "Counter" contract is equal to \'x\'. This verifies that the\n"setNumber" function correctly updates the "number" in the "Counter"\ncontract.'),(0,a.kt)("p",null,"Now, to test your code, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge test\n")),(0,a.kt)("p",null,"If the test is successful, your output should be similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\u2806] Compiling...\nNo files changed, compilation skipped\n\nRunning 2 tests for test/Counter.t.sol:CounterTest\n[PASS] testIncrement() (gas: 28334)\n[PASS] testSetNumber(uint256) (runs: 256, \u03bc: 27709, ~: 28409)\nTest result: ok. 2 passed; 0 failed; finished in 8.96ms\n")),(0,a.kt)("h2",{id:"deploying-your-smart-contract"},"Deploying your smart contract"),(0,a.kt)("h3",{id:"using-anvil"},"Using Anvil"),(0,a.kt)("p",null,'First, we\'ll test out our contract on a local devnet called "anvil". To start\nthe local server, run:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"anvil\n")),(0,a.kt)("p",null,"You'll see a local RPC endpoint (",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545"),") and accounts to test with."),(0,a.kt)("p",null,"Let's deploy the contract now. First, set a private key from anvil:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\nexport ANVIL_RPC_URL=http://localhost:8545\n")),(0,a.kt)("p",null,"Now, deploy the contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url $ANVIL_RPC_URL \\\n--private-key $PRIVATE_KEY \\\nsrc/Counter.sol:Counter\n")),(0,a.kt)("h3",{id:"using-taro"},"Using Taro"),(0,a.kt)("p",null,"First, set a private key from your funded Ethereum wallet and\nset the ",(0,a.kt)("inlineCode",{parentName:"p"},"TARO_RPC_URL")," variable with an ",(0,a.kt)("a",{parentName:"p",href:"../taro-testnet/#rpc-urls"},"RPC"),"\nof your choosing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export TARO_PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\nexport TARO_RPC_URL=http://rpc.tarotestnet.com\n")),(0,a.kt)("p",null,"Now that we're ready to deploy the smart contract onto Taro, we will run\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"forge create")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url $TARO_RPC_URL \\\n--private-key $TARO_PRIVATE_KEY \\\nsrc/Counter.sol:Counter\n")),(0,a.kt)("p",null,"A successful deployment will return output similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\u2806] Compiling...\nNo files changed, compilation skipped\nDeployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\nDeployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3\nTransaction hash: 0xf1a793a793cd9fc588f5132d99008565ea361eb3535d66499575e9e1908200b2\n")),(0,a.kt)("p",null,"Once you've deployed the contract, you're ready to interact with it!"),(0,a.kt)("p",null,"First, we'll set it as a variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3\n")),(0,a.kt)("h2",{id:"interacting-with-your-smart-contract"},"Interacting with your smart contract"),(0,a.kt)("p",null,"Foundry uses ",(0,a.kt)("inlineCode",{parentName:"p"},"cast"),", a CLI for performing Ethereum RPC calls."),(0,a.kt)("p",null,"To write to the contract, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cast send")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS "setNumber(uint256)" 10 --rpc-url $TARO_RPC_URL --private-key $PRIVATE_KEY\n')),(0,a.kt)("p",null,"Your output will look similar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"blockHash               0x131822bef6eb59656d7e1387c19b75be667e587006710365ec5cf58030786c42\nblockNumber             3\ncontractAddress\ncumulativeGasUsed       43494\neffectiveGasPrice       3767182372\ngasUsed                 43494\nlogs                    []\nlogsBloom               0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nroot\nstatus                  1\ntransactionHash         0x8f15d6004598f0662dd673a9898dceef77be8cc28408cecc284b28d7be32307d\ntransactionIndex        0\ntype                    2\n")),(0,a.kt)("p",null,"Now, we can make a read call to view the state of the number variable,\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cast call")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "number()" --rpc-url $TARO_RPC_URL\n')),(0,a.kt)("p",null,"The result will look similar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0x000000000000000000000000000000000000000000000000000000000000000a\n")),(0,a.kt)("p",null,"Convert the result from hexadeximal to a base 10 value with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo $((0x000000000000000000000000000000000000000000000000000000000000000a))\n")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Congratulations! You've learned how to deploy a smart contract to Taro testnet."),(0,a.kt)("p",null,"What will you build next? Now, you're ready to check out the\n",(0,a.kt)("a",{parentName:"p",href:"../gm-portal-taro"},"GM Portal tutorial"),"."))}m.isMDXComponent=!0}}]);