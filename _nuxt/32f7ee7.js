(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{233:function(n,e,t){"use strict";t.r(e);var o={components:{Layout:t(172).a}},r=t(14),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Layout",{attrs:{title:"Update Database Schema",description:"how to update db schema after database is created",keywords:"change, update, schema, database, indexeddb",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/update-schema.md"}},[t("p",[n._v("database schema can be updated by ")]),n._v(" "),t("ul",[t("li",[n._v("incrementing the version in database object ")]),n._v(" "),t("li",[n._v("defining what to change in alter field of table.")])]),n._v(" "),t("h4",{attrs:{id:"example"}},[n._v("Example")]),n._v(" "),t("pre",[t("code",[n._v("var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        // 2 is database version to target\n        2: {\n            modify: {\n                id:{\n                    notNull:true\n                }\n            },\n            add:{\n                name:{\n                    dataType:'string'\n                }\n            },\n            drop:{\n                count:{\n\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 2 //Default version is 1.\n}\n")])]),n._v(" "),t("h2",{attrs:{id:"howtogetcurrentdbversion"}},[n._v("How to get current db version")]),n._v(" "),t("p",[n._v("you can find your current db version in indexedDb section of browser development tools.")]),n._v(" "),t("p",[t("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/img/version_screenshot.png"}})]),n._v(" "),t("h2",{attrs:{id:"whatistheneedofdbversion"}},[n._v("What is the need of db version")]),n._v(" "),t("p",[t("br"),n._v("\nIndexedDb is a database technology for browser which means if you do some changes in your web application , any one who use your web app should get latest changes including database changes. ")]),n._v(" "),t("p",[n._v("Browser decides to change db schema when indexedb is initiated with db version greater than current db version.")]),n._v(" "),t("h2",{attrs:{id:"whathappenstodatawhenschemaischanged"}},[n._v("What happens to data when schema is changed")]),n._v(" "),t("p",[n._v("Your data remains constant. Only index specification is changed.")]),n._v(" "),t("h2",{attrs:{id:"whathappenswhendatatypeischanged"}},[n._v("What happens when Data type is changed")]),n._v(" "),t("p",[n._v("JsStore does not do any change in existing data. But validate for new data based on new data type.")]),n._v(" "),t("p",[n._v("So it is recommended to change the existing data into new datatype after db is created.")]),n._v(" "),t("p",[n._v("consider your old schema was - ")]),n._v(" "),t("pre",[t("code",[n._v("var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct]\n}\n")])]),n._v(" "),t("p",[n._v("Now you want to change the datatype of count column. So your new schema is - ")]),n._v(" "),t("pre",[t("code",[n._v("var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        2: {\n            modify: {\n                count:{\n                    dataType:'string'\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 2 \n}\n")])]),n._v(" "),t("p",[n._v("now let's change db schema & convert data- ")]),n._v(" "),t("pre",[t("code",[n._v("var connection = new JsStore.Connection();\nvar created = await connection.initDb(db);\n\nif(created){\n    if(db.version===2){\n        // change datatype from number to string\n\n        var existingData = await connection.select({\n            from: 'Product'\n        });\n\n        existingData = existingData.map(value=>{\n            value.count = value.count.toString();\n            return value;\n        })\n\n        await connection.insert({\n            into: \"Product\",\n            upsert:true,\n            values:existingData\n        })\n    }\n}\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);