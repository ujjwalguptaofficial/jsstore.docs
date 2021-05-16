(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{207:function(t,e,o){"use strict";o.r(e);var n={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Layout",{attrs:{title:"Count",description:"count api is used to count no of record in a table.",keywords:"count, api, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/count.md"}},[o("p",[o("code",[t._v("count")]),t._v(" api can be used to count records in a table. You can use "),o("code",[t._v("where")]),t._v(" to filter results similar to select.")]),t._v(" "),o("h4",{attrs:{id:"sql"}},[t._v("Sql")]),t._v(" "),o("pre",[o("code",[t._v("Select count(*) From Table_Name;\nWhere\n    Column1=some_value\nand\n    Column2=some_another_value;\n")])]),t._v(" "),o("h4",{attrs:{id:"jsstore"}},[t._v("JsStore")]),t._v(" "),o("pre",[o("code",[t._v('const results = await connection.count({\n    from: "Table_Name",\n    where: {\n        column1: some_value,\n        column2: some_another_value\n    }\n});\n// results will be a number\nconsole.log(results);\n')])]),t._v(" "),o("p",{staticClass:"margin-top-40px text-center"},[o("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=count(%7B%0A%20%20%20%20from%3A%20%22Customers%22%0A%7D)%0A"}},[t._v("Example")])])])}),[],!1,null,null,null);e.default=component.exports}}]);