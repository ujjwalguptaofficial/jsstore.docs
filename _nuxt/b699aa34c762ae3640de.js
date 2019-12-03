(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{176:function(e,t,r){var o=r(179);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(27).default)("7a78b854",o,!0,{})},177:function(e,t,r){"use strict";var o=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=o},178:function(e,t,r){"use strict";var o=r(176);r.n(o).a},179:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(e,t,r){"use strict";var o,n=r(13),a=r(177),i=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},c=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){i.b.$on("version_change",this.onVersionChange),i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,r=this.links.find(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new a.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return new a.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event"];break;case 2:e=["promise","export-json","v2-to-v3","data-type","initiate-database","event"];case 3:e=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},t.prototype.onNextBtnClick=function(){var e=this.getCurrentUrlIndex();if(e>=0){var t=s[e+1];t&&this.$router.push(this.relativeUrl+t.url)}},t=u([Object(n.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),p=(r(178),r(12)),d=Object(p.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return r("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),r("br"),e._v("get your logo here\n        ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),r("br"),e._v("get your logo on our page\n        ")]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[e._v("edit")])],1):e._e(),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{id:"codefund"}}),e._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";t.a=d.exports},257:function(e,t,r){"use strict";r.r(t);var o,n=r(13),a=r(180),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EIn%20this%20get%20started%20tutorial%20we%20will%20learn%20how%20to%20do%20crud%20operation%20in%20indexeddb%20using%20jsstore.%20You%20can%20download%20the%20example%20of%20this%20tutorial%20from%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/Simple%2520Example%22%3ECrud%20implementation%3C/a%3E%3C/p%3E%0A%3Ch4%20id=%22installation%22%3EInstallation%3C/h4%3E%0A%3Cp%3EJsStore%20can%20be%20installed%20using%20npm,%20cdn%20or%20scripts%20can%20be%20also%20download%20from%20jsstore%20github%20page.%20%3C/p%3E%0A%3Cp%3EIndexedDb%20query%20can%20be%20executed%20inside%20web%20worker%20&amp;%20JsStore%20preserve%20this%20functionality.%20JsStore%20provides%20way%20to%20execute%20query%20inside%20both%20web%20worker%20&amp;%20without%20web%20worker.%20But%20it%20is%20highly%20recommended%20to%20use%20%3Ca%20href=%22https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers%22%3Eweb%20worker%3C/a%3E%20because%20it%20runs%20scripts%20in%20background%20thread.%20So%20i%20am%20going%20to%20use%20web%20worker%20in%20this%20tutorial.%20%3C/p%3E%0A%3Cp%3ELet's%20download%20the%20script%20from%20github.%20Go%20to%20this%20link%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/releases/latest%22%20target=%22_blank%22%3Ejsstore%20release%3C/a%3E%20&amp;%20download%20files%20jsstore.js%20&amp;%20jsstore.worker.js.%20%3C/p%3E%0A%3Cp%3ENow%20create%20a%20html%20page%20&amp;%20include%20jsstore.js%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3E&lt;!DOCTYPE%20html&gt;%0A&lt;html%20lang=%22en%22&gt;%0A&lt;head&gt;%0A%20%20%20%20&lt;meta%20charset=%22UTF-8%22&gt;%0A%20%20%20%20&lt;meta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1.0%22&gt;%0A%20%20%20%20&lt;meta%20http-equiv=%22X-UA-Compatible%22%20content=%22ie=edge%22&gt;%0A%20%20%20%20&lt;title&gt;Crud%20Demo%20using%20jsstore&lt;/title&gt;%0A%20%20%20%20&lt;script%20src=%22jsstore.js%22&gt;&lt;/script&gt;%0A&lt;/head&gt;%0A&lt;body&gt;%0A&lt;h4&gt;We%20have%20included%20JsStore%20in%20this%20html%20code.&lt;/h4&gt;%0A&lt;/body&gt;%0A&lt;/html&gt;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFor%20more%20about%20installation%20check%20out%20the%20%3Ca%20href=%22/tutorial/installation%22%3Einstallation%3C/a%3E%20page%3C/p%3E%0A%3Ch4%20id=%22creatingdatabase%22%3ECreating%20Database%3C/h4%3E%0A%3Cp%3EJsStore%20follows%20SQL%20approach%20to%20create%20database%20-%20A%20database%20is%20consist%20of%20tables%20and%20a%20table%20is%20consist%20of%20columns.%3C/p%3E%0A%3Cp%3ELets%20see%20how%20to%20create%20a%20database%20schema%20in%20JsStore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20dbName%20='JsStore_Demo';%0Afunction%20getDbSchema()%20%7B%0A%20%20var%20tblProduct%20=%20%7B%0A%20%20%20%20name:%20'Product',%0A%20%20%20%20columns:%20%7B%0A%20%20%20%20%20%20%20%20//%20Here%20%22Id%22%20is%20name%20of%20column%20%0A%20%20%20%20%20%20%20%20id:%7B%20primaryKey:%20true,%20autoIncrement:%20true%20%7D,%0A%20%20%20%20%20%20%20%20itemName:%20%20%7B%20notNull:%20true,%20dataType:%20%22string%22%20%7D,%0A%20%20%20%20%20%20%20%20price:%20%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D,%0A%20%20%20%20%20%20%20%20quantity%20:%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D%0A%20%20%20%20%7D%0A%20%20%7D;%0A%20%20var%20db%20=%20%7B%0A%20%20%20%20%20%20name:%20dbName,%0A%20%20%20%20%20%20tables:%20%5BtblProduct%5D%0A%20%20%7D%0A%20%20return%20db;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAs%20written%20in%20the%20code%20you%20can%20define%20constraints%20like%20autoincrement,%20datatype,%20default,%20notnull%20similar%20to%20what%20you%20can%20do%20in%20SQL.%3C/p%3E%0A%3Cp%3ENow%20we%20need%20to%20use%20the%20above%20database%20schema%20to%20create%20the%20database%20in%20indexeddb%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E//%20executing%20jsstore%20inside%20a%20web%20worker%0Avar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore.worker.js'));%0A%0Aasync%20function%20initJsStore()%20%7B%0A%20%20%20%20%20%20var%20database%20=%20getDbSchema();%0A%20%20%20%20%20%20const%20isDbCreated%20=%20await%20connection.initDb(database);%0A%20%20%20%20%20%20if(isDbCreated===true)%7B%0A%20%20%20%20%20%20%20%20%20%20console.log(%22db%20created%22);%0A%20%20%20%20%20%20%20%20%20%20//%20here%20you%20can%20prefill%20database%20with%20some%20data%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.log(%22db%20opened%22);%0A%20%20%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ELine%201%20-%20Storing%20the%20JsStore%20connection%20instance%20in%20a%20variable%20'connection'.%3C/li%3E%0A%3Cli%3ELine%202%20-%20Declared%20a%20function%20initJsStore%20which%20will%20create%20the%20database%20using%20provided%20schema%20in%20IndexedDB.%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0A%3Cstrong%3ENote%20:-%3C/strong%3E%20The%20connection%20object%20will%20be%20used%20to%20execute%20future%20queries%20so%20we%20dont%20need%20to%20initiate%20it%20multiple%20times.%3C/p%3E%0A%3Ch4%20id=%22insertingdata%22%3EInserting%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20%3Ca%20href=%22/tutorial/insert%22%3Einsert%3C/a%3E%20API%20for%20inserting%20data.%3C/p%3E%0A%3Cp%3ELet's%20say%20we%20have%20below%20value%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20value%20=%20%7B%0A%20%20%20%20itemName:%20'Blue%20Jeans',%0A%20%20%20%20price:%202000,%0A%20%20%20%20quantity:%201000%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EOne%20thing%20to%20notice%20is%20that%20value%20does%20not%20contain%20the%20%22id%22%20property.%20Since%20it%20is%20an%20autoincrement%20column,%20it%20will%20be%20automatically%20generated%20by%20jsstore%20before%20inserting%20data%20and%20added%20with%20supplied%20data.%20%3C/p%3E%0A%3Cp%3ENow,%20let's%20insert%20this%20value%20into%20db%20-%20%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20noOfDataInserted%20=%20await%20connection.insert(%7B%0A%20%20%20%20into:%20'Product',%0A%20%20%20%20values:%20%5Bvalue%5D%0A%7D);%0Aif%20(noOfDataInserted%20&gt;%200)%20%7B%0A%20%20%20%20alert('successfully%20added');%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22readdata%22%3ERead%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20%3Ca%20href=%22/tutorial/select%22%3Eselect%3C/a%3E%20API%20for%20reading%20data.%20Lets%20say%20I%20want%20to%20retrieve%20the%20record%20with%20Id%20of%205.%3C/p%3E%0A%3Cpre%3E%3Ccode%3E//%20results%20will%20be%20array%20of%20objects%0Avar%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20id:%205%0A%20%20%20%20%7D%0A%7D);%0Aalert(results.length%20+%20'record%20found');%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20also%20perform%20operations%20like-%20%22IN%22,%20%22LIKE%22,%20%22BETWEEN%22,%20%22LIMIT%22%20etc.%3C/p%3E%0A%3Ch4%20id=%22updatingdata%22%3EUpdating%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20%3Ca%20href=%22/tutorial/update%22%3Eupdate%3C/a%3E%20API%20for%20reading%20data.%20%3C/p%3E%0A%3Cp%3ELets%20say%20We%20want%20to%20update%20Quantity%20to%202000%20on%20the%20products%20with%20Item%20Name%20containing%20the%20substring%20'black'.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20rowsUpdated%20=%20await%20connection.update(%7B%20%0A%20%20%20%20in:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20itemName:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20like:%20'%25black%25'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D,%0A%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20quantity:%202000%0A%20%20%20%20%7D%0A%7D);%0Aalert(rowsUpdated%20+%20'%20rows%20updated');%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22removedata%22%3ERemove%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20%3Ca%20href=%22/tutorial/remove%22%3Eremove%3C/a%3E%20API%20for%20reading%20data.%20%3C/p%3E%0A%3Cp%3ELets%20say%20I%20want%20to%20delete%20the%20product%20with%20Id%20of%2010.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20rowsDeleted%20=%20await%20connection.remove(%7B%0A%20%20%20%20from:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20id:%2010%0A%20%20%20%20%7D%0A%7D);%0Aalert(rowsDeleted%20+%20'%20record%20deleted');%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20hope%20you%20have%20understood%20this%20article.%20Now%20lets%20make%20something%20awesome.%3C/p%3E%0A%3Ch4%20id=%22checkitoutsometutorialexamplesformoreunderstanding%22%3E*%20Check%20it%20out%20some%20tutorial%20&amp;%20examples%20for%20more%20understanding%20-%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/Simple%2520Example%22%3ECrud%20implementation%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/TypeScript%2520Example%22%3EUsing%20jsstore%20in%20typescript%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack%22%3EBuilding%20an%20indexeddb%20app%20with%20webpack%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/react%22%3EUsing%20react%20and%20webpack%20to%20store%20data%20in%20indexeddb%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/angular%22%3EUsing%20jsstore%20in%20angular%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/electron%22%3EStoring%20data%20in%20an%20electron%20app%20using%20JsStore%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/without%2520web%2520worker%22%3EJsStore%20without%20web%20worker%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cstyle%3E%0A%20%20%20%20iframe%20%7B%0A%20%20%20%20%20%20%20%20height:%20300px;%0A%20%20%20%20%7D%0A%3C/style%3E",t.title="Get Started",t.keywords="jsstore, get started, introduction, indexeddb, tutorial",t.description="learn how to use indexeddb with jsstore",t}return i(t,e),t=s([Object(n.Component)({components:{Tutorial:a.a}})],t)}(n.Vue),u=r(12),c=Object(u.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="get-started.vue";t.default=c.exports}}]);