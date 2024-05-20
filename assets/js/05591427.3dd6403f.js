"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2345],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:5,keywords:["operators",">","<","where","indexeddb","jsstore"]},l="Operators",s={unversionedId:"where/operators",id:"where/operators",title:"Operators",description:"JsStore supports following operators : -",source:"@site/docs/where/operators.md",sourceDirName:"where",slug:"/where/operators",permalink:"/docs/where/operators",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/where/operators.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["operators",">","<","where","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Regex",permalink:"/docs/where/regex"},next:{title:"Between",permalink:"/docs/where/between"}},i={},p=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operators"},"Operators"),(0,a.kt)("p",null,"JsStore supports following operators : -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" ',">",' " :')," Finds value greater than supplied value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" ',"<",' " :')," Finds value less than supplied value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" ',">",'= " :')," Finds value greater than or equal to supplied value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" ',"<",'= " :')," Finds value less than or equal to supplied value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" ',"-",' " :')," Finds value between two supplied value. Read ",(0,a.kt)("a",{href:"/docs/where/between"},"between doc")," for more info."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'" != " :')," Finds value not equal to supplied value. ")),(0,a.kt)("h2",{id:"sql"},"Sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Select * From Table_Name\nWhere\nColumn_Name > some_value;\n")),(0,a.kt)("h2",{id:"jsstore"},"JsStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var results = await connection.select({\n    from: \"Table_Name\",\n    where: {\n        Column_Name: {\n            '>': some_value\n        },\n    }\n});\n//results will be array of objects.\nconsole.log(results);\n")),(0,a.kt)("p",{class:"text--center"},(0,a.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Products%22%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20price%3A%7B%0A%20%20%20%20%20%20%20%20%20%22%3E%22%3A20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%3B%0A"},"Example")))}d.isMDXComponent=!0}}]);