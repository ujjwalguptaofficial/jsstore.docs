"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4156],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:6,Keywords:["select","api","query","indexeddb","jsstore"]},s="Select",l={unversionedId:"select/index",id:"select/index",title:"Select",description:"The Select api is used to select data from a database.",source:"@site/docs/select/index.md",sourceDirName:"select",slug:"/select/",permalink:"/docs/select/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/select/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,Keywords:["select","api","query","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Upsert",permalink:"/docs/insert/upsert"},next:{title:"Limit",permalink:"/docs/select/limit"}},c={},i=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("p",null,"The Select api is used to select data from a database."),(0,a.kt)("h2",{id:"sql"},"Sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Select * from Table_Name;\n")),(0,a.kt)("h2",{id:"jsstore"},"JsStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: "Table_Name"\n});\n//results will be array of objects.\nconsole.log(results);\n')),(0,a.kt)("p",{class:"text--center"},(0,a.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%0A%7D)%3B%0A"},"Example")))}d.isMDXComponent=!0}}]);