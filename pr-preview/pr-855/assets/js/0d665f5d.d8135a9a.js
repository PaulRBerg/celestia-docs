"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8842:(e,t,n)=>{n.d(t,{Z:()=>a});const a=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.2-tm-v0.34.27","core-latest-sha":"d280f37a8376ed54ae03b10896fa25a4cbbc6d5b","node-latest-tag":"v0.10.4","node-latest-sha":"03ff94a7d779caf1225f3dccb53a68e8f1646dc6"})},578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.19.1",golangNodeArabica:"1.20.2",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-9",bsrChainId:"blockspacerace-0",mochaChainId:"mocha",arabicaRollkitVersion:"v0.8.2-rc0",mochaRollkitVersion:"currently not compatible",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(578),l=n(8842);const i={sidebar_label:"Prompt scavenger",description:"Learn how to interact with the Celestia Node API with this tutorial."},s="Prompt scavenger",p={unversionedId:"developers/prompt-scavenger",id:"developers/prompt-scavenger",title:"Prompt scavenger",description:"Learn how to interact with the Celestia Node API with this tutorial.",source:"@site/docs/developers/prompt-scavenger.mdx",sourceDirName:"developers",slug:"/developers/prompt-scavenger",permalink:"/pr-preview/pr-855/developers/prompt-scavenger",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/prompt-scavenger.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Prompt scavenger",description:"Learn how to interact with the Celestia Node API with this tutorial."},sidebar:"developers",previous:{title:"Gateway API",permalink:"/pr-preview/pr-855/category/gateway-api"},next:{title:"Deploy a Rollup",permalink:"/pr-preview/pr-855/category/deploy-a-rollup"}},c={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Golang installation",id:"golang-installation",level:3},{value:"Install Celestia Node and run a Light Node",id:"install-celestia-node-and-run-a-light-node",level:3},{value:"Node API authentication key",id:"node-api-authentication-key",level:3},{value:"OpenAI key",id:"openai-key",level:3},{value:"Building the Prompt Scavenger",id:"building-the-prompt-scavenger",level:2},{value:"Copy over Go files",id:"copy-over-go-files",level:3},{value:"Build your import statements",id:"build-your-import-statements",level:3},{value:"Helpful functions",id:"helpful-functions",level:3},{value:"Wrapping up the functions",id:"wrapping-up-the-functions",level:3},{value:"Next steps",id:"next-steps",level:2}],d={toc:u},h="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prompt-scavenger"},"Prompt scavenger"),(0,o.kt)("p",null,"Welcome to the world of Prompt Scavenger, a game where\nyou\u2019ll be using Celestia\u2019s Node API and OpenAI\u2019s GPT-3.5\nto decode hidden messages scattered throughout Celestia\u2019s\nblockchain. In this tutorial, we\u2019ll be using Golang to\nwrite the code for the game."),(0,o.kt)("p",null,"Through this tutorial, you\u2019ll gain experience using\nCelestia\u2019s Node API to fetch data from the blockchain,\nprocess it, and submit new transactions with that data.\nYou\u2019ll also learn how to integrate OpenAI\u2019s GPT-3.5 API\nto generate fun responses based on the data you\u2019ve found."),(0,o.kt)("p",null,"So if you\u2019re ready to embark on an adventure that combines\nblockchain technology with the power of AI, and learn some\nGolang along the way, let\u2019s get started!"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"The following dependencies are needed to be installed or obtained:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang"),(0,o.kt)("li",{parentName:"ul"},"Celestia Light Node"),(0,o.kt)("li",{parentName:"ul"},"Getting an OpenAI API Key for GPT3.5")),(0,o.kt)("h3",{id:"golang-installation"},"Golang installation"),(0,o.kt)("p",null,"Run the following to install golang on your machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,'ver="',r.Z.golangNodeBSR,'"',(0,o.kt)("br",null),(0,o.kt)("br",null),"cd $HOME",(0,o.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"',(0,o.kt)("br",null),"sudo rm -rf /usr/local/go",(0,o.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"',(0,o.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz"',(0,o.kt)("br",null))),(0,o.kt)("p",null,"Now we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,o.kt)("p",null,"To check if Go was installed correctly run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,o.kt)("p",null,"The output should be the version installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"go version go",r.Z.golangNodeBSR," linux/amd64")),(0,o.kt)("h3",{id:"install-celestia-node-and-run-a-light-node"},"Install Celestia Node and run a Light Node"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"cd $HOME",(0,o.kt)("br",null),"rm -rf celestia-node",(0,o.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,o.kt)("br",null),"cd celestia-node/",(0,o.kt)("br",null),"git checkout tags/",l.Z["node-latest-tag"],(0,o.kt)("br",null),"make build",(0,o.kt)("br",null),"make install",(0,o.kt)("br",null),"make cel-key",(0,o.kt)("br",null))),(0,o.kt)("pre",null,(0,o.kt)("code",null,"$ celestia version",(0,o.kt)("br",null),"Semantic version: ",l.Z["node-latest-tag"],(0,o.kt)("br",null),"Commit: ",l.Z["node-latest-sha"],(0,o.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,o.kt)("br",null),"System version: amd64/linux",(0,o.kt)("br",null),"Golang version: go",r.Z.golangNodeBSR,(0,o.kt)("br",null))),(0,o.kt)("p",null,"Let\u2019s run the following commands to get our env\nvars setup (NOTE: For ",(0,o.kt)("inlineCode",{parentName:"p"},"CORE_IP")," you can select\nfrom list of available RPC endpoints ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/blockspace-race/#rpc-endpoints"},"here"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'KEYNAME="scavenger_key"\nNODETYPE="light"\nNETWORK="blockspacerace"\nAUTHTYPE="admin"\nCORE_IP=""\n')),(0,o.kt)("p",null,"First, let\u2019s generate a wallet key for our light node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add $KEYNAME --keyring-backend test --node.type $NODETYPE --p2p.network $NETWORK\n")),(0,o.kt)("p",null,"Be sure to save the mnemonics and your celestia1 public\naddress in a safe place."),(0,o.kt)("p",null,"Then head over to our Discord Server and request tokens from\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"#faucet")," channel under Blockspace Race."),(0,o.kt)("p",null,"You can track receiving the funds on the explorer here: ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.mintscan.io/celestia-incentivized-testnet"},"Interchain Explorer by Cosmostation")),(0,o.kt)("p",null,"Just make sure to paste your ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia1****")," address in order to look it up."),(0,o.kt)("p",null,"We will be running this version of Celestia Node with Blockspace\nRace test network. First, let\u2019s initialize our node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network blockspacerace\n")),(0,o.kt)("p",null,"Next, we will start our node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip $CORE_IP --p2p.network $NETWORK --gateway.deprecated-endpoints --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --keyring.accname $KEYNAME\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"You should now have a running light node on your machine.\nThe rest of the tutorial will assume you will be building the\nscript and running it where the light node is in your localhost."),(0,o.kt)("h3",{id:"node-api-authentication-key"},"Node API authentication key"),(0,o.kt)("p",null,"In the same machine as where you Celestia Light Node is running, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export AUTH_TOKEN=$(celestia $NODETYPE auth $AUTHTYPE)\n")),(0,o.kt)("p",null,"Now run the following to get the auth token for your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo $AUTH_TOKEN\n")),(0,o.kt)("p",null,"This will be used for the env var file we setup later."),(0,o.kt)("h3",{id:"openai-key"},"OpenAI key"),(0,o.kt)("p",null,"Make sure to go over to ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/"},"OpenAI")," in\norder to sign up to an account and generate an OpenAI API key.\nThe key will be needed to communicate with OpenAI."),(0,o.kt)("h2",{id:"building-the-prompt-scavenger"},"Building the Prompt Scavenger"),(0,o.kt)("p",null,"We will first need to setup a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with the following pasted in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-.env"},'NODE_RPC_IP="http://localhost:26658"\nNODE_JWT_TOKEN=""\nOPENAI_KEY=""\nNAMESPACE_ID="00000000ce1e571a"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENAI_KEY")," is the API key you got from Open AI.\nFor ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_RPC_IP"),", it is assumed to be the local host but\nit can point to a light node that is remote. ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_JWT_TOKEN")," is\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTH_TOKEN")," you generated earlier. For Namespace ID, we\nmade a sample one for you to use but you can generate your own."),(0,o.kt)("p",null,"Now, let\u2019s build!"),(0,o.kt)("h3",{id:"copy-over-go-files"},"Copy over Go files"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir test_scavenger\ngit clone https://github.com/celestiaorg/PromptScavenger.git\ncp PromptScavenger/go.mod test_scavenger/\ncp PromptScavenger/go.sum test_scavenger/\ncd test_scavenger\n")),(0,o.kt)("p",null,"This will copy over the required ",(0,o.kt)("inlineCode",{parentName:"p"},"go.sum")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," files\nto a new directory we will use to import the Node API golang library."),(0,o.kt)("h3",{id:"build-your-import-statements"},"Build your import statements"),(0,o.kt)("p",null,"Inside the directory, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go"),"file and setup the import statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n        "context"\n        "fmt"\n        "log"\n        "os"\n\n        "github.com/celestiaorg/celestia-node/api/rpc/client"\n        nodeheader "github.com/celestiaorg/celestia-node/header"\n        "github.com/celestiaorg/nmt/namespace"\n        "github.com/joho/godotenv"\n        cosmosmath "cosmossdk.io/math"\n        openai "github.com/sashabaranov/go-openai"\n        "encoding/base64"\n        "encoding/hex"\n)\n\nfunc main() {\n  // TODO\n}\n')),(0,o.kt)("p",null,"Here we setup all required libraries we need to use plus the ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"\nfunction where we will use for our game."),(0,o.kt)("h3",{id:"helpful-functions"},"Helpful functions"),(0,o.kt)("p",null,"First we will need to create some helpful functions that you will\nneed later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// loadEnv loads environment variables from the .env file.\nfunc loadEnv() {\n        err := godotenv.Load(".env")\n        if err != nil {\n                log.Fatal("Error loading .env file")\n        }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loadEnv")," function allows us to load up our ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file which\nhas all the necessary env vars needed."),(0,o.kt)("p",null,"Next, let\u2019s create a helper function that allows us to load an\ninstance of the Celestia Node client given the correct env\nvars passed to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// createClient initializes a new Celestia node client.\nfunc createClient(ctx context.Context) *client.Client {\n        nodeRPCIP := os.Getenv("NODE_RPC_IP")\n        jwtToken := os.Getenv("NODE_JWT_TOKEN")\n\n        rpc, err := client.NewClient(ctx, nodeRPCIP, jwtToken)\n        if err != nil {\n                log.Fatalf("Error creating client: %v", err)\n        }\n\n        return rpc\n}\n')),(0,o.kt)("p",null,"As you can see, here the Celestia Node client takes in the Node\nRPC IP and the JWT Token we setup before."),(0,o.kt)("p",null,"Now, if we go back to our ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function, we can do the following\nto setup and load our env and client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel()\n  loadEnv()\n\n  // Close the client when you are finished\n  client.Close()\n}\n")),(0,o.kt)("p",null,"Here, we setup a workflow that allows us to load our env vars,\ninstantiate the client with it, then close the client."),(0,o.kt)("p",null,"Now, let\u2019s build some more helpful functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func createNamespaceID() []byte {\n        nIDString := os.Getenv("NAMESPACE_ID")\n        data, err := hex.DecodeString(nIDString)\n        if err != nil {\n                log.Fatalf("Error decoding hex string:", err)\n        }\n        // Encode the byte array in Base64\n        base64Str := base64.StdEncoding.EncodeToString(data)\n        namespaceID, err := base64.StdEncoding.DecodeString(base64Str)\n        if err != nil {\n                log.Fatalf("Error decoding Base64 string:", err)\n        }\n        return namespaceID\n}\n')),(0,o.kt)("p",null,"Here, we are creating a helpful function called ",(0,o.kt)("inlineCode",{parentName:"p"},"createNameSpaceID"),"\nthat given a string for a namespace ID, it can decode the hex\nstring, encode it after to a byte array, then decode it as a base64\nstring which is needed by Node API."),(0,o.kt)("p",null,"We will need to create just a few more functions before we wrap up things."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// postDataAndGetHeight submits a new transaction with the\n// provided data to the Celestia node.\nfunc postDataAndGetHeight(client *client.Client, namespaceID namespace.ID, payLoad [\n]byte, fee cosmosmath.Int, gasLimit uint64) uint64 {\n        response, err := client.State.SubmitPayForBlob(context.Background(), namespa\nceID, payLoad, fee, gasLimit)\n        if err != nil {\n                log.Fatalf("Error submitting pay for blob: %v", err)\n        }\n        fmt.Printf("Got output: %v", response)\n        height := uint64(response.Height)\n        fmt.Printf("Height that data was submitted at: %v", height)\n        return height\n}\n')),(0,o.kt)("p",null,"In the function ",(0,o.kt)("inlineCode",{parentName:"p"},"postDataAndGetHeight"),", we show you how to submit\na message to a specific namespace ID provided on Celestia. After\na successful submission, the function returns back to you the block\nheight it was submitted at."),(0,o.kt)("p",null,"Next, implement the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func getDataAsPrompt(client *client.Client, height uint64, namespaceID namespace.ID)\n string {\n        headerParam := getHeader(client, height)\n        response, err := client.Share.GetSharesByNamespace(context.Background(), hea\nderParam.DAH, namespaceID)\n        if err != nil {\n                log.Fatalf("Error getting shares by namespace data for block height:\n %v. Error is %v", height, err)\n        }\n        var dataString string\n        for _, shares := range response {\n                for _, share := range shares.Shares {\n                        dataString = string(share[8:])\n                }\n        }\n        return dataString\n}\n')),(0,o.kt)("p",null,"In the function ",(0,o.kt)("inlineCode",{parentName:"p"},"getDataAsPrompt"),", we show a helpful function that given a particular block height and a namespace ID, it can return back the block data (called shares here) which we then convert to a string and return it back."),(0,o.kt)("p",null,"Finally, we implement a GPT-3.5 helper function that given a prompt, it returns back a statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// gpt3 processes a given message using GPT-3 and prints the response.\nfunc gpt3(msg string) {\n        // Set the authentication header\n        openAIKey := os.Getenv("OPENAI_KEY")\n        client := openai.NewClient(openAIKey)\n        resp, err := client.CreateChatCompletion(\n                context.Background(),\n                openai.ChatCompletionRequest{\n                        Model: openai.GPT3Dot5Turbo,\n                        Messages: []openai.ChatCompletionMessage{\n                                {\n                                        Role:    openai.ChatMessageRoleUser,\n                                        Content: msg,\n                                },\n                        },\n                },\n        )\n\n        if err != nil {\n                fmt.Printf("ChatCompletion error: %v\\n", err)\n                return\n        }\n        fmt.Println(resp.Choices[0].Message.Content)\n}\n')),(0,o.kt)("h3",{id:"wrapping-up-the-functions"},"Wrapping up the functions"),(0,o.kt)("p",null,"Now, we will update our ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"function to include the logic from the functions we built where we show you how to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instantiate namespace ID, fee, gas limit and GPT prompt"),(0,o.kt)("li",{parentName:"ul"},"Submit the GPT prompt as a PayForBlob transaction and then get back the Block Height"),(0,o.kt)("li",{parentName:"ul"},"Get Back the Prompt from that Block Height as a Data Share and convert it to a string and return it"),(0,o.kt)("li",{parentName:"ul"},"Submit that string to the GPT function to get a prompt output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n        ctx, cancel := context.WithCancel(context.Background())\n        defer cancel()\n        loadEnv()\n        var namespaceID namespace.ID = createNamespaceID()\n        client := createClient(ctx)\n        var gasLimit uint64 = 6000000\n        fee := cosmosmath.NewInt(10000)\n        var gptPrompt string = "What are modular blockchains?"\n        prompt := []byte{0x00, 0x01, 0x02}\n        prompt = append(prompt, []byte(gptPrompt)...)\n        height := postDataAndGetHeight(client, namespaceID, prompt, fee, gasLimit)\n        promptString := getDataAsPrompt(client, height, namespaceID)\n        gpt3(promptString)\n        // Close the client when you are finished\n        client.Close()\n}\n')),(0,o.kt)("p",null,"And now you have the final version of the game!"),(0,o.kt)("p",null,"Run the golang script with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go run main.go\n")),(0,o.kt)("p",null,"After some time, it\u2019ll post the output of the prompt you submitted to OpenAI that you pulled from Celestia\u2019s blockchain."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"With this tutorial, you were able to construct a PFB transaction, submit it to Celestia, get it back from Celestia and decode its contents, then for added bonus, submit the message to GPT-3.5."),(0,o.kt)("p",null,"For the next steps, we will be releasing quests to this tutorial where users will need to complete challenges that helps familiarize them with the Celestia Data Availability layer."))}g.isMDXComponent=!0}}]);