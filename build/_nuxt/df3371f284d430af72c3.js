(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{175:function(e,t,r){var n=r(178);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(27).default)("7a78b854",n,!0,{})},176:function(e,t,r){"use strict";var n=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=n},177:function(e,t,r){"use strict";var n=r(175);r.n(n).a},178:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},179:function(e,t,r){"use strict";var n,o=r(13),a=r(176),i=r(32),l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},u=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),t.prototype.catchEvents=function(){i.b.$on("version_change",this.onVersionChange),i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+="<a href="+r.url+">"+r.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,r=this.links.find(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new a.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle}},t.prototype.getVersion=function(){return new a.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction"];break;case 2:e=["promise"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.onNextBtnClick=function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.links),n=r.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});if(n>=0){var o=r[n+1];o&&this.$router.push(this.relativeUrl+o.url)}},t=s([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],t)}(i.a),c=(r(177),r(12)),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return r("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),r("v-flex",{class:{"margin-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"md1 margin-top-50px"},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("Sponsor "),r("br"),e._v("Us")]),e._v(" "),r("br"),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("Be a backer")])],1)],1)},[],!1,null,null,null);p.options.__file="tutorial.vue";t.a=p.exports},329:function(e,t,r){"use strict";r.r(t);var n,o=r(13),a=r(179),i=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EBefore%20creating%20Table,%20lets%20see%20how%20to%20create%20a%20column.%20A%20column%20in%20JsStore%20is%20a%20JSON%20object.%20It%20has%20following%20properties%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20name:%20string,%20//%20name%20of%20column%20(required)%0A%20%20%20%20primaryKey:%20boolean,%20//%20declare%20this%20column%20as%20primary%20key%20(optional)%0A%20%20%20%20//%20We%20strongly%20recommend%20to%20create%20the%20primary%20keys%20(optional)%0A%20%20%20%20notNull:%20boolean,%20//%20ensure%20this%20column%20value%20should%20not%20be%20null%20(optional)%0A%20%20%20%20dataType:%20JsStore.DATA_TYPE,%20//%20datatype%20of%20this%20column%20(optional)%0A%20%20%20%20autoIncrement:%20boolean,%20//%20automatically%20increment%20value%20(optional)%0A%20%20%20%20unique:%20boolean%20//%20This%20column%20will%20have%20unique%20value%20(optional)%0A%20%20%20%20default:%20any,%20//%20Provides%20a%20default%20value%20for%20a%20column%20when%20none%20is%20specified%20(optional)%0A%20%20%20%20multiEntry:%20boolean,%20//%20Provides%20support%20to%20search%20inside%20array%20values%20(optional)%0A%20%20%20%20enableSearch:%20boolean%20-%20default%20value%20is%20true%20//%20Turn%20on/off%20search%20for%20this%20column%20(optional)%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20Table%20in%20JsStore%20is%20an%20Array%20of%20columns.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table1%20=%20%7B%0A%20%20%20%20name:%20%22table_name%22,%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column1%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype',%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryKey:%20true%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column2%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20.....%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22columnN%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20We%20strongly%20recommend%20to%20create%20a%20primary%20key%20for%20every%20table.%3C/p%3E%0A%3Cp%3EAbove%20Syntax%20is%20good%20and%20clear%20but%20when%20there%20are%20lots%20of%20tables%20-%20codes%20becomes%20large%20and%20messy.%20So%20JsStore%20provides%20another%20approach%20to%20create%20tables.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table1%20=%20%7B%0A%20%20%20%20name:%20%22table_name%22,%0A%20%20%20%20columns:%20%5B%0A%20%20%20%20%20%20%20%20new%20JsStore.Column(%22column1%22).options(%5BCOL_OPTION.PrimaryKey%5D).setDataType('datatype'),%0A%20%20%20%20%20%20%20%20new%20JsStore.Column(%22column2%22).setDataType('datatype'),%0A%20%20%20%20%20%20%20%20.....,%0A%20%20%20%20%20%20%20%20new%20JsStore.Column(%22columnN%22).setDataType('datatype')%0A%20%20%20%20%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%20we%20are%20creating%20instance%20of%20class%20-%20%22Column%22%20and%20calling%20its%20methods%20with%20supplying%20parameter.%3C/p%3E%0A%3Cp%3EFor%20more%20information%20about%20column%20-%20please%20check%20%3Ca%20href=%22/tutorial/column%22%3Ecolumn%3C/a%3E%20doc.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="Table",t}return i(t,e),t=l([Object(o.Component)({components:{Tutorial:a.a}})],t)}(o.Vue),u=r(12),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="table.vue";t.default=c.exports}}]);