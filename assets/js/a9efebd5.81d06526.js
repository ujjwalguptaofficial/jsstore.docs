"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[210],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(4137));const a={keywords:["indexeddb","join","left","inner","jsstore","sql"],sidebar_position:8},l="Join",i={unversionedId:"select/join",id:"select/join",title:"Join",description:"JsStore supports two joins - inner (by default) and left.",source:"@site/docs/select/join.md",sourceDirName:"select",slug:"/select/join",permalink:"/docs/select/join",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/select/join.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{keywords:["indexeddb","join","left","inner","jsstore","sql"],sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Case",permalink:"/docs/select/case"},next:{title:"Flatten",permalink:"/docs/select/flatten"}},s={},u=[{value:"Join between two tables",id:"join-between-two-tables",level:2},{value:"Sql",id:"sql",level:3},{value:"JsStore",id:"jsstore",level:3},{value:"Join options",id:"join-options",level:2},{value:"with",id:"with",level:3},{value:"on",id:"on",level:3},{value:"as",id:"as",level:3},{value:"where",id:"where",level:3},{value:"order",id:"order",level:3},{value:"groupBy",id:"groupby",level:3},{value:"aggregate",id:"aggregate",level:3},{value:"Join between three tables",id:"join-between-three-tables",level:2},{value:"Sql",id:"sql-1",level:3},{value:"JsStore",id:"jsstore-1",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join"},"Join"),(0,r.kt)("p",null,"JsStore supports two joins - ",(0,r.kt)("strong",{parentName:"p"},"inner")," (by default) and ",(0,r.kt)("strong",{parentName:"p"},"left"),"."),(0,r.kt)("h2",{id:"join-between-two-tables"},"Join between two tables"),(0,r.kt)("h3",{id:"sql"},"Sql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Select * From Table1;\nInner Join Table2\nOn Table1.common_field = Table2.common_field\nWhere\nTable1.Column1=some_value\nAnd\nTable2.Column1=some_another_value\n")),(0,r.kt)("h3",{id:"jsstore"},"JsStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: table1 name,\n    where: {\n        [column name]: some value\n    },\n    join: {\n        with: table2_name,\n        on: "table1.common_field=table2.common_field",\n        type:"inner",\n        where: {\n            [column name]: some value\n        }\n    }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :-")," you can use all other options present in select query like - ",(0,r.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"skip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," etc."),(0,r.kt)("p",{class:"text--center"},(0,r.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20'Customers'%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%0A%20%20%20%20%7D%0A%7D)%3B"},"Example")),(0,r.kt)("h2",{id:"join-options"},"Join options"),(0,r.kt)("p",null,"join has following options -"),(0,r.kt)("h3",{id:"with"},"with"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"with")," is used to specify name of table to join"),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"on")," is used to specify join condition "),(0,r.kt)("p",null,"eg - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"table1.property = table2.property\n")),(0,r.kt)("h3",{id:"as"},"as"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"as")," is used to rename some column name in order to avoid the column match with other tables. "),(0,r.kt)("p",null,"e.g - If a column customerId is present in both table, then a column match error will be thrown and in this situation you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," to resolve the error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"connection.select({\n    from: table1 name,\n    join: {\n        with: table2_name,\n        on: \"table1.common_field=table2.common_field\",\n        as: {\n            customerId: 'table2_customerId'\n        } \n    }\n});\n")),(0,r.kt)("p",{class:"text--center"},(0,r.kt)("a",{class:"button button--info",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20%22Orders%22%2C%0A%20%20%20%20%20%20%20%20type%3A%20%22inner%22%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%2C%0A%20%20%20%20%20%20%20%20as%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20customerId%3A%20'cId'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)",target:"_blank"},"Example")),(0,r.kt)("h3",{id:"where"},"where"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"where")," can be used to filter the data"),(0,r.kt)("h3",{id:"order"},"order"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"order")," is used for ordering data "),(0,r.kt)("p",null,"\ud83d\udc49 but unlike query without join - order here is little different. You need to provide query along with table name in the form of ","[tablename]",".","[columnName]","."),(0,r.kt)("h3",{id:"groupby"},"groupBy"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"groupByfor")," can be used for grouping data"),(0,r.kt)("h3",{id:"aggregate"},"aggregate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," can be used for aggregation of data "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"join-between-three-tables"},"Join between three tables"),(0,r.kt)("h3",{id:"sql-1"},"Sql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Select * From Table1;\nInner Join Table2\nOn Table1.common_field = Table2.common_field\nInner Join Table3\nOn Table1.some_column = Table3.some_common_column\n")),(0,r.kt)("h3",{id:"jsstore-1"},"JsStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: table1_name,\n    join:[{\n        with:table2_name,\n        on: "table1.common_field=table2.common_field"\n    },{\n        with:table3_name,\n        on: "table1.common_field=table3.common_field"\n    }]\n});\n')),(0,r.kt)("p",{class:"text--center"},(0,r.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20with%3A%20'Customers'%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%0A%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20with%3A%22Shippers%22%2C%0A%20%20%20%20%20%20%20%20on%3A%22Orders.shipperId%3DShippers.shipperId%22%0A%20%20%20%20%7D%5D%0A%7D)%3B"},"Example")))}d.isMDXComponent=!0}}]);