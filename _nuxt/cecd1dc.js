(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,n,o){"use strict";o.r(n);var l={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(l,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("Layout",{attrs:{title:"Advanced Sql Example",description:"Advanced sql example with respective jsstore query",keywords:"advanced sql, example, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/adv-sql-example.md"}},[o("p",[e._v("These are some examples of common use cases -")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 or Column2=value2 or Column3=value3;")])]),e._v(" "),o("pre",[o("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: {\n        Column1: value1,\n        or: {\n            Column2: value2,\n            Column3: value3\n        }\n    }\n});\n')])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 and (Column2=value2 or Column3=value3);")])]),e._v(" "),o("pre",[o("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            Column2: value2,\n            or: {\n                Column3: value3\n            }\n        }\n    ]\n});\n')])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 or (Column2=value2 and Column3=value3);")])]),e._v(" "),o("pre",[o("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            or: {\n                Column2: value2,\n                Column3: value3\n            }\n        }\n    ]\n});\n')])]),e._v(" "),o("p",[e._v("Hope these examples will help you to write more complex queries. If you are not able to understand or write some complex queries - ask at stackoverflow mentioning jsstore and indexeddb.")])])}),[],!1,null,null,null);n.default=component.exports}}]);