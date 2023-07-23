"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:26,keywords:["performance","optimization","speed","indexeddb","jsstore"]},a="Performance Optimization",s={unversionedId:"optimization",id:"optimization",title:"Performance Optimization",description:"With high amount of data in your tables - query execute time is slow and which means your app becomes slow.",source:"@site/docs/optimization.md",sourceDirName:".",slug:"/optimization",permalink:"/docs/optimization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/optimization.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,keywords:["performance","optimization","speed","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Plugin",permalink:"/docs/plugin"},next:{title:"SqlWeb",permalink:"/docs/sqlweb"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-optimization"},"Performance Optimization"),(0,o.kt)("p",null,"With high amount of data in your tables - query execute time is slow and which means your app becomes slow. "),(0,o.kt)("p",null,"There are couple of tricks that can be used to increase speed : -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If insert query is slow - use ",(0,o.kt)("strong",{parentName:"p"},"skipDataCheck")," to speed up the insert query.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If select query is slow - try to find different version of your query & compare the time. Use IdbStudio for these purposes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If select query is still slow - use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/keypath"},"keypath"))," to add multiple indexes. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/JsStore/issues/80"},"this issue")," & find out how Marco Mart\xednez has improved the speed of select query for 150,000 records."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note :-")," IndexedDb is a client side database, which means a client can be a high configuration pc device or a low configuration mobile device so fill up your database according to your client."))}m.isMDXComponent=!0}}]);