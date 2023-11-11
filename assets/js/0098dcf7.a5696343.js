"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7443],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const o={Keywords:["upsert","api","insert","indexeddb","jsstore"]},i="Upsert",s={unversionedId:"insert/upsert",id:"insert/upsert",title:"Upsert",description:"upsert is an option in insert api which is used to replace the record if exist otherwise insert as new record if does not exist.",source:"@site/docs/insert/upsert.md",sourceDirName:"insert",slug:"/insert/upsert",permalink:"/docs/insert/upsert",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/insert/upsert.md",tags:[],version:"current",frontMatter:{Keywords:["upsert","api","insert","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/docs/insert/"},next:{title:"Select",permalink:"/docs/select/"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upsert"},"Upsert"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"upsert")," is an option in ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," api which is used to replace the record if exist otherwise insert as new record if does not exist."),(0,a.kt)("p",null,'e.g - Consider we have below record in a table "Customers"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    id:90, //primary key\n    name:"ujjwal gupta",\n    address:"Bengaluru India"\n}\n')),(0,a.kt)("p",null,"now we want to replace the whole data , so we will call ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," api with option ",(0,a.kt)("inlineCode",{parentName:"p"},"upsert"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var newData = {\n    id:90, //primary key\n    name:"some other name",\n    address:"some other address"\n}\n\nvar noOfRowsInserted = await connection.insert({\n    into: "Customers",\n    upsert:true,\n    values: [newData], //you can insert multiple values at a time\n});\n')),(0,a.kt)("p",null,"\ud83d\udc49 Points to note :- "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"While using upsert - primary key should be same as old records otherwise new record will be created. IndexedDb uses primary key to identify existing record.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In a case where you want to update particular column, you should use ",(0,a.kt)("a",{parentName:"p",href:"/docs/update/"},"update")," api. ",(0,a.kt)("inlineCode",{parentName:"p"},"upsert")," replace the old record completely except primary key and add a new record."))))}d.isMDXComponent=!0}}]);