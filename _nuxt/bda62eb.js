(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(e,n,l){"use strict";l.r(n);var o={components:{Layout:l(172).a}},t=l(14),component=Object(t.a)(o,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("Layout",{attrs:{title:"Advanced Sql Example",description:"Advanced sql example with respective jsstore query",keywords:"advanced sql, example, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/adv-sql-example.md"}},[l("p",[e._v("These are some examples of common use cases -")]),e._v(" "),l("ul",[l("li",[l("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 or Column2=value2 or Column3=value3;")])]),e._v(" "),l("pre",[l("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: {\n        Column1: value1,\n        or: {\n            Column2: value2,\n            Column3: value3\n        }\n    }\n});\n')])]),e._v(" "),l("ul",[l("li",[l("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 and (Column2=value2 or Column3=value3);")])]),e._v(" "),l("pre",[l("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            Column2: value2,\n            or: {\n                Column3: value3\n            }\n        }\n    ]\n});\n')])]),e._v(" "),l("ul",[l("li",[l("strong",[e._v("SQL")]),e._v(" - Select * from Table_Name where Column1=value1 or (Column2=value2 and Column3=value3);")])]),e._v(" "),l("pre",[l("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: [{\n            Column1: value1\n        },\n        {\n            or: {\n                Column2: value2,\n                Column3: value3\n            }\n        }\n    ]\n});\n')])]),e._v(" "),l("p",[e._v("Hope these examples will help you to write more complex queries. If you are not able to understand or write some complex queries - ask at stackoverflow mentioning jsstore and indexeddb.")])])}),[],!1,null,null,null);n.default=component.exports}}]);