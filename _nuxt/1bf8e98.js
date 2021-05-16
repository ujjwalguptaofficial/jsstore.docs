(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{196:function(t,e,n){"use strict";n.r(e);var l={components:{Layout:n(172).a}},o=n(14),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Flatten",description:"flatten flats array data into primitive data",keywords:"flatten, select, multientry, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/select/flatten.md"}},[n("h6",{attrs:{id:"availableafterv3113"}},[t._v("Available after v - 3.11.3")]),t._v(" "),n("p",[n("br"),t._v("\nflatten is a option in select query which will flatten array data into primitive data.")]),t._v(" "),n("p",[t._v("e.g - Consider your data stored is :-")]),t._v(" "),n("pre",[n("code",[t._v('{\n    name:"ujjwal gupta",\n    hobbies:["travelling", "motorcycling"]\n}\n')])]),t._v(" "),n("p",[t._v("In the above example - hobbies column is array. ")]),t._v(" "),n("p",[t._v("After flattening data will become")]),t._v(" "),n("pre",[n("code",[t._v('[\n    {\n        name:"ujjwal gupta",\n        hobbies:"travelling"\n    },\n    {\n        name:"ujjwal gupta",\n        hobbies: "motorcycling"\n    }\n]\n')])]),t._v(" "),n("h2",{attrs:{id:"query"}},[t._v("Query")]),t._v(" "),n("pre",[n("code",[t._v('select({\n    from:"Members",\n    flatten:true\n})\n')])]),t._v(" "),n("p",[t._v("flatten is useful when you are doing join. Check this issue - "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/issues/188"}},[t._v("https://github.com/ujjwalguptaofficial/JsStore/issues/188")])])])}),[],!1,null,null,null);e.default=component.exports}}]);