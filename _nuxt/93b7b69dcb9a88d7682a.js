(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{176:function(e,t,r){var n=r(179);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(27).default)("478f6032",n,!0,{})},177:function(e,t,r){"use strict";var n=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=n},178:function(e,t,r){"use strict";var n=r(176);r.n(n).a},179:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100px;height:auto\n}\n.ad-container-text{font-size:30px;text-align:center\n}",""])},180:function(e,t,r){"use strict";var n,o=r(13),i=r(177),a=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},c=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.jsstoreText=["Component based framework for nodejs"],t.adIndex=-1,t.catchEvents(),t}return l(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.showAds(),this.setVersion();var t=this.$route.path,r=this.links.find(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return new i.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:e=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:e=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},t.prototype.onNextBtnClick=function(){var e=this.getCurrentUrlIndex();if(e>=0){var t=s[e+1];t&&this.$router.push(this.relativeUrl+t.url)}},t.prototype.showAds=function(){var e=++this.adIndex;e>=this.jsstoreText.length&&(e=this.adIndex=0),this.adIndex=e},t=u([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(a.a),p=(r(178),r(12)),d=Object(p.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return r("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),r("br"),e._v("get your logo here\n        ")]),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),r("br"),e._v("get your logo on our page\n        ")]),e._v(" "),r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[e._v("FortJs")]),e._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[e._v("edit")])],1):e._e(),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{id:"codefund"}}),e._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";t.a=d.exports},250:function(e,t,r){"use strict";r.r(t);var n,o=r(13),i=r(180),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EThe%20Insert%20api%20is%20used%20to%20insert%20new%20records%20in%20a%20table.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EINSERT%20INTO%20TABLE_NAME%0A(column1,%20column2,%20column3,...columnN)%0AVALUES%0A(value1,%20value2,%20value3,...valueN);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20value%20=%20%7B%0A%20%20%20%20column1:%20value1,%0A%20%20%20%20column2:%20value2,%0A%20%20%20%20column3:%20value3,%0A%20%20%20%20...%0A%20%20%20%20columnN:%20valueN%0A%7D;%0A%0Avar%20noOfRowsInserted%20=%20await%20connection.insert(%7B%0A%20%20%20%20into:%20%22TABLE_NAME%22,%0A%20%20%20%20values:%20%5BValue%5D,%20//you%20can%20insert%20multiple%20values%20at%20a%20time%0A%7D);%0Aif%20(noOfRowsInserted%20&gt;%200)%20%7B%0A%20%20%20%20alert('Successfully%20Added');%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cbr%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20You%20can%20also%20insert%20data%20for%20a%20column,%20which%20you%20have%20not%20defined%20in%20db%20schema.%20JsStore%20preserves%20the%20NoSql%20functionality%20of%20IndexedDb.%3C/p%3E%0A%3Ch4%20id=%22upsert%22%3EUpsert%3C/h4%3E%0A%3Cp%3EUpsert%20is%20used%20to%20replace%20the%20existing%20data%20otherwise%20insert%20as%20new%20record%20if%20does%20not%20exist.%20%3Ccode%3Eupsert%3C/code%3E%20is%20an%20option%20in%20jsstore%20insert%20query%20which%20is%20by%20default%20false.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20we%20have%20below%20record%20in%20a%20table%20%22Customers%22%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20id:90,%20//primary%20key%0A%20%20%20%20name:%22ujjwal%20gupta%22,%0A%20%20%20%20address:%22Bengaluru%20India%22%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Enow%20we%20want%20to%20replace%20the%20whole%20data%20,%20so%20we%20will%20call%20%3Ccode%3Einsert%3C/code%3E%20api%20with%20option%20%3Ccode%3Eupsert%3C/code%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20newData%20=%20%7B%0A%20%20%20%20id:90,%20//primary%20key%0A%20%20%20%20name:%22some%20other%20name%22,%0A%20%20%20%20address:%22some%20other%20address%22%0A%7D%0Avar%20noOfRowsInserted%20=%20await%20connection.insert(%7B%0A%20%20%20%20into:%20%22Customers%22,%0A%20%20%20%20upsert:true,%0A%20%20%20%20values:%20%5BnewData%5D,%20//you%20can%20insert%20multiple%20values%20at%20a%20time%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EPoints%20to%20note%20:-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EWhile%20using%20upsert%20-%20primary%20key%20should%20be%20same%20as%20old%20records%20otherwise%20new%20record%20will%20be%20created.%20IndexedDb%20uses%20primary%20key%20to%20identify%20existing%20record.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EIn%20a%20case%20where%20you%20want%20to%20update%20particular%20column,%20you%20should%20use%20%3Ca%20href=%22/tutorial/update%22%3Eupdate%3C/a%3E%20api.%20%3Ccode%3Eupsert%3C/code%3E%20replace%20the%20old%20record%20completely%20except%20primary%20key%20and%20add%20a%20new%20record.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cdiv%20class=%22margin-top-30px%20top-border%20margin-bottom-20px%22%3E%3C/div%3E%0A%3Cp%3E%3Cstrong%3Einsert%3C/strong%3E%20api%20has%20following%20options%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3Einto%20:%20string%20//%20table%20name%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Evalues:%20Array%20//%20values%20to%20insert%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Ereturn?:%20Boolean%20//%20Return%20the%20inserted%20record.%20Default%20value%20is%20false.This%20is%20useful%20in%20case%20-%20you%20want%20the%20autoincrement%20column%20value.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EskipDataCheck?:%20Boolean%20//%20Whether%20to%20check%20or%20not%20supplied%20data.%20Default%20value%20is%20false.%20If%20supplied%20true,%20this%20will%20directly%20insert%20data%20without%20checking%20any%20thing%20like%20datatype,%20auto%20increment%20etc.%20This%20is%20useful%20in%20case%20-%20where%20you%20want%20to%20insert%20huge%20record%20at%20a%20time.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Eupsert?:%20boolean;%20//%20Update%20data%20if%20exist%20otherwise%20insert%20%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=insert(%257B%250A%2520%2520%2520%2520into%253A%2520%2522Customers%2522%252C%250A%2520%2520%2520%2520values%253A%2520%255B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520customerName%253A%2520'ujjwal%2520gupta'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520contactName%253A%2520'ujjwal'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520address%253A%2520'bhubaneswar%2520odisha'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520city%253A%2520'bhubaneswar'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520postalCode%253A%2520'12345'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520country%253A%2520'India'%250A%2520%2520%2520%2520%257D%255D%250A%257D)%253B%250A%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="Insert",t.keywords="insert, api, upsert, indexeddb, jsstore",t.description="insert data in indexedb",t}return a(t,e),t=s([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=r(12),c=Object(u.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="insert.vue";t.default=c.exports}}]);