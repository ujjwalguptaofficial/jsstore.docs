"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7800],{4137:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>v});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=o.createContext({}),i=function(e){var r=o.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=i(n),p=t,v=s["".concat(c,".").concat(p)]||s[p]||d[p]||l;return n?o.createElement(v,a(a({ref:r},m),{},{components:n})):o.createElement(v,a({ref:r},m))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,a=new Array(l);a[0]=p;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[s]="string"==typeof e?e:t,a[1]=u;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1331:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var o=n(7462),t=(n(7294),n(4137));const l={sidebar_position:2,keywords:["or query","or condition","where","query","filter","indexedDB","sql"]},a="Or",u={unversionedId:"where/or",id:"where/or",title:"Or",description:"or can be used with where to filter records to include records where any of the condition is true.",source:"@site/docs/where/or.md",sourceDirName:"where",slug:"/where/or",permalink:"/docs/where/or",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/where/or.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["or query","or condition","where","query","filter","indexedDB","sql"]},sidebar:"tutorialSidebar",previous:{title:"And",permalink:"/docs/where/and"},next:{title:"In",permalink:"/docs/where/in"}},c={},i=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2},{value:"More Examples",id:"more-examples",level:3},{value:"Select * from Table_Name where Column1=value1 or Column2=value2 or Column3=value3",id:"select--from-table_name-where-column1value1-or-column2value2-or-column3value3",level:4},{value:"Select * from Table_Name where Column1=value1 and (Column2=value2 or Column3=value3)",id:"select--from-table_name-where-column1value1-and-column2value2-or-column3value3",level:4},{value:"Select * from Table_Name where Column1=value1 or (Column2=value2 and Column3=value3)",id:"select--from-table_name-where-column1value1-or-column2value2-and-column3value3",level:4},{value:"Select * from Products where supplierId = 1 and (categoryId = 1 and price = 18) or(categoryId = 2 and price = 39)",id:"select--from-products-where-supplierid--1-and-categoryid--1-and-price--18-orcategoryid--2-and-price--39",level:4}],m={toc:i},s="wrapper";function d(e){let{components:r,...n}=e;return(0,t.kt)(s,(0,o.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"or"},"Or"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"or")," can be used with ",(0,t.kt)("inlineCode",{parentName:"p"},"where")," to filter records to include records where any of the condition is true."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Primary key is required for ",(0,t.kt)("strong",{parentName:"p"},"or query")," to work properly.")),(0,t.kt)("h2",{id:"sql"},"Sql"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Select * From Table_Name\nWhere\nColumn1=some_value\nor\nColumn2=some_another_value;\n")),(0,t.kt)("h2",{id:"jsstore"},"JsStore"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'var results = await connection.select({\n    from: "Table_Name",\n    where: {\n        column1: some_value,\n        or: {\n            column2: some_another_value\n        }\n    }\n});\n//results will be array of objects.\nconsole.log(results);\n')),(0,t.kt)("p",{class:"text--center"},(0,t.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20country%3A'Mexico'%2C%0A%20%20%20%20%20%20%20%20or%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20city%3A'London'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%3B%0A"},"Example")),(0,t.kt)("h3",{id:"more-examples"},"More Examples"),(0,t.kt)("p",null,"Let's understand some more examples query, which will help us to write any kinda of or query as per our requirements -"),(0,t.kt)("h4",{id:"select--from-table_name-where-column1value1-or-column2value2-or-column3value3"},"Select * from Table_Name where Column1=value1 or Column2=value2 or Column3=value3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'connection.select({\n    from: "Table_Name",\n    where: {\n        Column1: value1,\n        or: {\n            Column2: value2,\n            or:{\n                Column3: value3\n            }\n        }\n    }\n});\n')),(0,t.kt)("p",null,"The above syntax can be also written as -"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'connection.select({\n    from: "Table_Name",\n    where: {\n        Column1: value1,\n        or: [\n            {\n                Column2: value2\n            },\n            {\n                or:{\n                    Column3: value3\n                }\n            }\n        ]\n    }\n});\n')),(0,t.kt)("h4",{id:"select--from-table_name-where-column1value1-and-column2value2-or-column3value3"},"Select * from Table_Name where Column1=value1 and (Column2=value2 or Column3=value3)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            Column2: value2,\n            or: {\n                Column3: value3\n            }\n        }\n    ]\n});\n')),(0,t.kt)("h4",{id:"select--from-table_name-where-column1value1-or-column2value2-and-column3value3"},"Select * from Table_Name where Column1=value1 or (Column2=value2 and Column3=value3)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            or: {\n                Column2: value2,\n                Column3: value3\n            }\n        }\n    ]\n});\n')),(0,t.kt)("h4",{id:"select--from-products-where-supplierid--1-and-categoryid--1-and-price--18-orcategoryid--2-and-price--39"},"Select * from Products where supplierId = 1 and (categoryId = 1 and price = 18) or(categoryId = 2 and price = 39)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'select({\n    from: "Products",\n    where: [{\n        supplierId: 1,\n    }, {\n        categoryId: 1,\n        price: 18,\n    }, {\n        or: {\n            categoryId: 2,\n            price: 39,\n        }\n    }]\n});\n')))}d.isMDXComponent=!0}}]);