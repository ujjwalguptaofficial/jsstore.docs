(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{188:function(t,e,r){var content=r(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("9ced3eb6",content,!0,{sourceMap:!1})},189:function(t,e,r){"use strict";var o=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(html){try{var t=this.createElement("div");return t.innerHTML=html,t.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=o},190:function(t,e,r){"use strict";r(188)},191:function(t,e,r){(e=r(38)(!1)).push([t.i,".link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center}.link-active a{color:#fff!important}#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0}#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block}#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)}#divMenuContainer ul li.search i{vertical-align:middle}#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px}#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle}#btnMenuToggle i{font-size:30px}.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll}.show-menu ul{border-right:none!important;margin-left:15px}.search .search-wrapper a:hover{background-color:#eee;outline:none}pre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%}pre,pre code{margin:20px 0}pre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400}.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.right-side-button{padding:15px;height:50px;text-align:center}.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center}.ad-container div{color:#000}.ad-container .ad-image,.ad-container img{width:100px;height:auto}.ad-container-text{font-size:30px;text-align:center}",""]),t.exports=e},192:function(t,e,r){"use strict";var o,n=r(17),l=r(189),c=r(50),d=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case (Deprecated)",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case",url:"case"},{text:"Flatten",url:"flatten"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],h=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,r,desc){var o,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(n<3?o(l):n>3?o(e,r,l):o(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return h(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){c.b.$on("version_change",this.onVersionChange),c.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,html="";this.links.forEach((function(link){link.text.toLowerCase().indexOf(t.searchValue)>=0&&(html+='<a href="/tutorial/'+link.url+'">'+link.text+"</a>")})),this.searchResult=html},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,r=this.links.find((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}));r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout((function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1}),200)},e.prototype.registerNextBtnEvents=function(){var t=new l.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new l.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter((function(e){return t.findIndex((function(t){return t===e.url}))<0}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}))},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=d[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=f([Object(n.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(c.a),m=(r(190),r(16)),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,(function(link){return r("li",{key:link.text,class:{"link-active":link.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+link.url}},[t._v(t._s(link.text))])])}))],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),r("a",{staticClass:"margin-top-20px ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"codefund"}}),t._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports},245:function(t,e,r){"use strict";r.r(e);var o,n=r(17),l=r(192),c=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,r,desc){var o,n=arguments.length,l=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(n<3?o(l):n>3?o(e,r,l):o(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3Ecase%20is%20an%20option%20in%20select%20query%20which%20is%20used%20to%20change%20stored%20value%20based%20on%20some%20condition.%20It%20is%20similar%20to%20multiple%20if%20else%20statetement.%20So%20once%20a%20condition%20is%20true%20it%20is%20stopped%20and%20value%20is%20returned.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econst%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20'Customers',%0A%20%20%20%20case:%20%7B%0A%20%20%20%20%20%20%20%20city:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'=':%20'London',%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20'London%20UK'%0A%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20'World'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20use%20other%20operators%20symbol%20similar%20to%20'='%20used%20above%20-%20'&gt;',%20'&gt;=,%20'&lt;'%20,'&lt;=',%20'!='%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%257B%250A%2520%2520%2520%2520from%253A%2520'Customers'%252C%250A%2520%2520%2520%2520case%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520city%253A%2520%255B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520'%253D'%253A%2520'London'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520'London%2520UK'%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520'World'%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%255D%250A%2520%2520%2520%2520%257D%250A%257D)%22%3EExample%3C/a%3E%0A%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:%20-%3C/strong%3E%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EIf%20you%20want%20to%20return%20stored%20value%20instead%20of%20custom%20value%20-%20provide%20null%20value%20in%20%3Ccode%3Ethen%3C/code%3E%20-%20%3Ccode%3E%7B%20then:null%20%7D%3C/code%3E%20%3C/li%3E%0A%3Cli%3EThis%20is%20not%20used%20to%20filter%20values%20but%20to%20change%20value.%20To%20filter%20value%20%3Ccode%3Ewhere%3C/code%3E%20is%20used.%3C/li%3E%0A%3C/ul%3E%0A%3Cdiv%20class=%22margin-top-30px%20top-border%20margin-bottom-20px%22%3E%3C/div%3E%0A%3Ch4%20id=%22order%22%3EOrder%3C/h4%3E%0A%3Cp%3E%3Cbr%3E%0Acase%20can%20be%20also%20used%20in%20order%20query%20to%20change%20the%20ordering%20of%20result.%3C/p%3E%0A%3Cp%3E%3Cstrong%3Ee.g%20-%3C/strong%3E%20In%20Customers%20table%20:%20record%20contains%20values%20-%20%20%22Argentina%22,%20%22Austria%22%20,%20etc.%20in%20column%20%22country%22.%20When%20sorting%20by%20coluntry%20in%20ascending%20order%20-%20the%20record%20%22Argentina%22%20comes%20first%20&amp;%20then%20%22Austria%22.%20But%20for%20some%20reason%20we%20want%20Austria%20to%20comes%20first.%3C/p%3E%0A%3Cp%3EIn%20this%20case%20we%20will%20have%20to%20use%20%3Ccode%3Ecase%20query%3C/code%3E%20in%20%3Ccode%3Eorder%3C/code%3E%20&amp;%20provide%20a%20value%20for%20%22Austria%22%20which%20is%20lesser%20than%20%22Argentina%22.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econst%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20'Customers',%0A%20%20%20%20order:%20%7B%0A%20%20%20%20%20%20%20%20by:%20'country',%0A%20%20%20%20%20%20%20%20case:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'=':%20'Austria',%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20%22a%22%20//%20telling%20value%20of%20'Austria%20is%20a'%0A%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20null%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20Use%20same%20data%20type%20as%20column%20in%20%3Ccode%3Ethen%3C/code%3E%20value%20otherwise%20you%20might%20get%20some%20error.%20In%20the%20above%20example%20-%20i%20have%20provided%20string%20value%20%22a%22,%20as%20country%20data%20type%20is%20string.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%257B%250A%2520%2520%2520%2520from%253A%2520'Customers'%252C%250A%2520%2520%2520%2520limit%253A%252010%252C%250A%2520%2520%2520%2520order%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520by%253A%2520'country'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520case%253A%2520%255B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520'%253D'%253A%2520'Austria'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520%2522a%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520null%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%255D%250A%2520%2520%2520%2520%257D%250A%257D)%22%3EExample%3C/a%3E%0A%3C/p%3E%0A%3Cp%3EAnother%20scenario%20is%20when%20you%20want%20to%20change%20order%20by%20column%20based%20on%20some%20condition.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eselect(%7B%0A%20%20%20%20from:%20'Customers',%0A%20%20%20%20order:%20%7B%0A%20%20%20%20%20%20%20%20by:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'country':%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'=':%20'Spain',%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then:%20%22city%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then:%20'country'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%257B%250A%2520%2520%2520%2520from%253A%2520'Customers'%252C%250A%2520%2520%2520%2520order%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520by%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520'country'%253A%2520%255B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520'%253D'%253A%2520'Spain'%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520%2522city%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520'country'%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%257D)%22%3EExample%3C/a%3E%0A%3C/p%3E%0A%3Ch4%20id=%22groupby%22%3EGroup%20By%3C/h4%3E%0A%3Cp%3Ecase%20can%20be%20used%20in%20group%20by%20for%20grouping%20values%20dynamically.%3C/p%3E%0A%3Cp%3Ee.g%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econst%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20'Products',%0A%20%20%20%20groupBy:%20%7B%0A%20%20%20%20%20%20%20%20'price':%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'&lt;=':%20100,%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20'affordable%20item'%0A%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then:%20'costly%20item'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%257B%250A%2520%2520%2520%2520from%253A%2520'Products'%252C%250A%2520%2520%2520%2520groupBy%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520'price'%253A%2520%255B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520'%253C%253D'%253A%2520100%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520'affordable%2520item'%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520then%253A%2520'costly%2520item'%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%255D%250A%2520%2520%2520%2520%257D%250A%257D)%22%3EExample%3C/a%3E%0A%3C/p%3E",e.title="Case",e.keywords="case, query, indexeddb, jsstore",e.description="case is used to change stored value based on some condition.",e}return c(e,t),e=d([Object(n.Component)({components:{Tutorial:l.a}})],e)}(n.Vue),f=r(16),component=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})}),[],!1,null,null,null);e.default=component.exports}}]);