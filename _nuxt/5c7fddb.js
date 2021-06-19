(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{192:function(e,t,o){"use strict";o.r(t);var n={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",{attrs:{title:"Helpers",description:"jsstore helpers methods",keywords:"helpers, api, query, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/helpers.md"}},[o("h4",{attrs:{id:"logstatus"}},[e._v("logStatus")]),e._v(" "),o("p",[e._v("It sets the status of log. When supplied true - JsStore logs query flow in console. This is helpful in debugging.")]),e._v(" "),o("pre",[o("code",[e._v("connection.logStatus = true;\n")])]),e._v(" "),o("h4",{attrs:{id:"getdblist"}},[e._v("getDbList")]),e._v(" "),o("p",[e._v("It returns list of database created using jsstore.")]),e._v(" "),o("pre",[o("code",[e._v("connection.getDbList().then(function(result) {\n    console.log(result)\n});\n")])]),e._v(" "),o("h4",{attrs:{id:"set"}},[e._v("set")]),e._v(" "),o("p",[e._v("It stores data in form of key and value in a special table. You can think of it is similar to localStorage but you can store every type of data using 'set' which is not the case with localStorage (can be stored only string).")]),e._v(" "),o("p",[e._v("Lets say you want to store user profile picture or may be some basic information, so that you can load it on page load.")]),e._v(" "),o("pre",[o("code",[e._v("var userInfo = {\n    name: 'ujjwal gupta',\n    accountType: 'super_admin',\n    profilePic: Blob Object // i am not creating it.\n\n}\nconnection.set(\"user_info\", userInfo).then(function() {\n    console.log('value setted');\n});\n")])]),e._v(" "),o("h4",{attrs:{id:"get"}},[e._v("get")]),e._v(" "),o("p",[e._v("Get data from special table.")]),e._v(" "),o("pre",[o("code",[e._v('connection.get("user_info").then(function(userInfo) {\n    console.log(userInfo); \n});\n')])])])}),[],!1,null,null,null);t.default=component.exports}}]);