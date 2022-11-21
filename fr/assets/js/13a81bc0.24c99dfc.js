"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6904],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6263:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const l={sidebar_label:"Aper\xe7u de Gm World"},i="\u2600\ufe0f Introduction",a={unversionedId:"developers/gm-world",id:"developers/gm-world",title:"\u2600\ufe0f Introduction",description:"Dans ce tutoriel, nous allons construire un rollup souverain gm world en utilisant rollmint, la disponibilit\xe9 de donn\xe9es et la couche de consensus de Celestia pour soumettre des blocs rollmint.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/gm-world.md",sourceDirName:"developers",slug:"/developers/gm-world",permalink:"/fr/developers/gm-world",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-world.md",tags:[],version:"current",frontMatter:{sidebar_label:"Aper\xe7u de Gm World"},sidebar:"developers",previous:{title:"gm world",permalink:"/fr/category/gm-world"},next:{title:"Configuration",permalink:"/fr/developers/gm-setup"}},u={},s=[{value:"Table des mati\xe8res",id:"table-des-mati\xe8res",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-introduction"},"\u2600\ufe0f Introduction"),(0,o.kt)("p",null,"Dans ce tutoriel, nous allons construire un rollup souverain ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," en utilisant rollmint, la disponibilit\xe9 de donn\xe9es et la couche de consensus de Celestia pour soumettre des blocs rollmint."),(0,o.kt)("p",null,"Ce tutoriel couvrira la configuration d'un Light Node Celestia , le CLI Ignite, et la construction d'un rollup de blockchain sp\xe9cifique \xe0 l'application du Cosmos-SDK sur Celestia."),(0,o.kt)("p",null,"Le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," est une structure pour construire des applications blockchain. L'\xe9cosyst\xe8me Cosmos utilise ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"}," la Communication Inter-Blockchain (IBC en anglais)")," pour permettre aux blockchains de communiquer entre elles."),(0,o.kt)("h2",{id:"table-des-mati\xe8res"},"Table des mati\xe8res"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/developers/gm-world"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/developers/gm-setup"},"Configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/developers/gm-node"},"Ex\xe9cuter un Light Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/developers/gm-rollmint"},"Construire un rollup souverain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/developers/gm-query"},"Interroger votre rollup"))))}p.isMDXComponent=!0}}]);