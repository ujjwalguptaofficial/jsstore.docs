"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7447],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:5,keywords:["insert","api","upsert","indexeddb","jsstore","sql","query"]},o="Insert",l={unversionedId:"insert/index",id:"insert/index",title:"Insert",description:"insert api is used to insert new records in a table.",source:"@site/docs/insert/index.md",sourceDirName:"insert",slug:"/insert/",permalink:"/docs/insert/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/insert/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["insert","api","upsert","indexeddb","jsstore","sql","query"]},sidebar:"tutorialSidebar",previous:{title:"DataType",permalink:"/docs/database/data-type"},next:{title:"Upsert",permalink:"/docs/insert/upsert"}},s={},u=[{value:"Sql",id:"sql",level:3},{value:"JsStore",id:"jsstore",level:3},{value:"Options",id:"options",level:2},{value:"into",id:"into",level:3},{value:"values",id:"values",level:3},{value:"return",id:"return",level:3},{value:"upsert",id:"upsert",level:3},{value:"validation",id:"validation",level:3},{value:"skipDataCheck",id:"skipdatacheck",level:3},{value:"ignore",id:"ignore",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert"},"Insert"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"insert")," api is used to insert new records in a table."),(0,r.kt)("h3",{id:"sql"},"Sql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE_NAME\n(column1, column2, column3,...columnN)\nVALUES\n(value1, value2, value3,...valueN);\n")),(0,r.kt)("h3",{id:"jsstore"},"JsStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var value = {\n    column1: value1,\n    column2: value2,\n    column3: value3,\n    ...\n    columnN: valueN\n};\n\nvar noOfRowsInserted = await connection.insert({\n    into: \"TABLE_NAME\",\n    values: [Value], //you can insert multiple values at a time\n});\n\nif (noOfRowsInserted > 0) {\n    alert('Successfully Added');\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udc49 Note :-")," You can also insert data for a column, which you have not defined in db schema. JsStore preserves the NoSql functionality of IndexedDb."),(0,r.kt)("p",{class:"text--center"},(0,r.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=insert(%7B%0A%20%20%20%20into%3A%20%22Customers%22%2C%0A%20%20%20%20values%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20customerName%3A%20'ujjwal%20gupta'%2C%0A%20%20%20%20%20%20%20%20contactName%3A%20'ujjwal'%2C%0A%20%20%20%20%20%20%20%20address%3A%20'bhubaneswar%20odisha'%2C%0A%20%20%20%20%20%20%20%20city%3A%20'bhubaneswar'%2C%0A%20%20%20%20%20%20%20%20postalCode%3A%20'12345'%2C%0A%20%20%20%20%20%20%20%20country%3A%20'India'%0A%20%20%20%20%7D%5D%0A%7D)%3B%0A"},"Example")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"insert")," api has following options -"),(0,r.kt)("h3",{id:"into"},"into"),(0,r.kt)("p",null,"into is used to specify name of table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products'\n})\n")),(0,r.kt)("h3",{id:"values"},"values"),(0,r.kt)("p",null,"values is used to specify data to insert. It takes array of data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products',\n    values:[data1,data2]\n})\n")),(0,r.kt)("h3",{id:"return"},"return"),(0,r.kt)("p",null,"return is a optional & type of boolean field. It is used to get the inserted data. This is useful in case - you want the autoincrement column value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products',\n    values:[data1,data2],\n    return: true\n})\n")),(0,r.kt)("p",null,"Default value of return is false."),(0,r.kt)("h3",{id:"upsert"},"upsert"),(0,r.kt)("p",null,"Update data if exist otherwise insert . Default value is false."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/insert/upsert"},"Read upsert doc"),"."),(0,r.kt)("h3",{id:"validation"},"validation"),(0,r.kt)("p",null,"Whether to validate data or not. By default value is true. This can be used to speed up insert query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products',\n    values:[data1,data2],\n    validation: false\n})\n")),(0,r.kt)("p",null,"\ud83d\udc49 when validation is false - it only checks and update : ",(0,r.kt)("inlineCode",{parentName:"p"},"autoincrement")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value."),(0,r.kt)("h3",{id:"skipdatacheck"},"skipDataCheck"),(0,r.kt)("p",null,"Do not check or change anything in data. By default value is false. "),(0,r.kt)("p",null,"If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time and doesn't have any constraint on schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products',\n    values:[data1,data2],\n    skipDataCheck: true\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Difference between validation & skipDataCheck is - validation generates autoIncrement field for autoIncrement column and default value but skipDataCheck do not change anything in data.")),(0,r.kt)("p",null,"\ud83d\udc49 Note:- Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"skipDataCheck")," in case you have autoincrement field, otherwise your autoincrement data might not get sync with your inserted data and can create problems."),(0,r.kt)("h3",{id:"ignore"},"ignore"),(0,r.kt)("p",null,"ignore records when error occurs. This is helpful in case when you are recieving some random data from users or any source."),(0,r.kt)("p",null,"e.g - consider you have 5 rows and 3 of them are not valid. It can be anything like - null value, data type does not match, existing value of primary key etc."),(0,r.kt)("p",null,"then 2 rows will be inserted & three will be ignored. So in result you will get 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert({\n    into:'Products',\n    values:[datas],\n    ignore: true\n})\n")),(0,r.kt)("p",null,"By default ignore value is false. So when any error occurs you will get error & whole transaction is aborted."))}p.isMDXComponent=!0}}]);