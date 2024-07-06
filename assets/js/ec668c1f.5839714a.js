"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9188],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:3,keywords:["order by","sort by","select","indexeddb","jsstore","sql"]},l="Order By",s={unversionedId:"select/order-by",id:"select/order-by",title:"Order By",description:"Order By is used to sort the data in ascending or descending order, based on any column.",source:"@site/docs/select/order-by.md",sourceDirName:"select",slug:"/select/order-by",permalink:"/docs/select/order-by",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/select/order-by.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["order by","sort by","select","indexeddb","jsstore","sql"]},sidebar:"tutorialSidebar",previous:{title:"Skip",permalink:"/docs/select/skip"},next:{title:"Aggregate Functions",permalink:"/docs/select/aggregate"}},i={},c=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2},{value:"Option",id:"option",level:2},{value:"By multiple column",id:"by-multiple-column",level:2},{value:"In join",id:"in-join",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"order-by"},"Order By"),(0,o.kt)("p",null,"Order By is used to sort the data in ascending or descending order, based on any column."),(0,o.kt)("h2",{id:"sql"},"Sql"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"Select * from Table_Name Order by column_name sort_type;\n")),(0,o.kt)("h2",{id:"jsstore"},"JsStore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: "Table_Name",\n    order: {\n        by: column_name,\n        type: sort_type //supprted sort type is - asc,desc\n    }\n});\n//results will be array of objects.\nconsole.log(results);\n')),(0,o.kt)("h2",{id:"option"},"Option"),(0,o.kt)("p",null,"Order has following options -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"by: string; // sorting column name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"type: string; // sorting type - asc/desc, default is asc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"idbSorting: boolean // whether to do sorting by indexeddb or by jsstore, default - true"))),(0,o.kt)("p",{class:"text--center"},(0,o.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%20%20%20%20type%3A%20%22desc%22%0A%20%20%20%20%7D%0A%7D)%3B%0A"},"Example")),(0,o.kt)("h2",{id:"by-multiple-column"},"By multiple column"),(0,o.kt)("p",null,"For ordering by multiple column - you need to provide all order object value in an array"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: "Table_Name",\n    order: [{\n        by: column_name1,\n        type: sort_type //supprted sort type is - asc,desc\n    },\n    {\n        by: column_name2,\n        type: sort_type //supprted sort type is - asc,desc\n    }]\n});\n//results will be array of objects.\nconsole.log(results);\n')),(0,o.kt)("p",{class:"text--center"},(0,o.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20order%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'city'%0A%20%20%20%20%7D%5D%0A%7D)%3B"},"Example")),(0,o.kt)("h2",{id:"in-join"},"In join"),(0,o.kt)("p",null,"Unlike query without join, order here is little different. You need to provide query along with table name in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"[tablename].[columnName]")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'select({\n    from: "Student",\n    join: {\n        with: "StudentDetail",\n        on: "Student.Name=StudentDetail.Name"\n    },\n    order: { by: \'Student.Order\', type: \'asc\' }\n})\n')),(0,o.kt)("p",{class:"text--center"},(0,o.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20'OrderDetails'%2C%0A%20%20%20%20%20%20%20%20on%3A%20'Orders.orderId%3DOrderDetails.orderId'%0A%20%20%20%20%7D%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'OrderDetails.orderId'%0A%20%20%20%20%7D%0A%7D)"},"Example")))}p.isMDXComponent=!0}}]);