(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(e,t,o){"use strict";o.r(t);var n={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",{attrs:{title:"Connection",description:"How to create connection in jsstore",keywords:"database, connection, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/connection.md"}},[o("p",[e._v("Connection is a Class which contains all apis like "),o("code",[e._v("select")]),e._v(", "),o("code",[e._v("count")]),e._v(" etc. Under the hood it talks with indexeddb and return results.")]),e._v(" "),o("div",{staticClass:"highlight"},[e._v("\nConnection can be initialize with web worker or without web worker. If initialized with web worker, then all logic will be executed inside web worker. It is strongly recommended to use web worker.\n")]),e._v(" "),o("h3",{attrs:{id:"withwebworker"}},[e._v("With Web Worker")]),e._v(" "),o("pre",[o("code",[e._v("var connection = new JsStore.Connection(new Worker('jsstore worker path'));\n")])]),e._v(" "),o("p",[o("strong",[e._v("example")]),e._v(" - "),o("a",{attrs:{target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"}},[e._v("https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example")])]),e._v(" "),o("h3",{attrs:{id:"withoutwebworker"}},[e._v("Without web worker")]),e._v(" "),o("pre",[o("code",[e._v("var connection = new JsStore.Connection();\n")])]),e._v(" "),o("p",[o("strong",[e._v("example")]),e._v(" - "),o("a",{attrs:{target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker"}},[e._v("https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker")])]),e._v(" "),o("div",{staticClass:"mt-20px top-border"}),e._v(" "),o("h2",{attrs:{id:"howtocreateconnectioninwebpack"}},[e._v("How to create connection in webpack")]),e._v(" "),o("p",[o("br")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Install jsstore using npm or yarn - "),o("code",[e._v("npm i jsstore")])])]),e._v(" "),o("li",[o("p",[e._v("Install file-loader -  "),o("code",[e._v("npm i file-loader -D")])])]),e._v(" "),o("li",[o("p",[e._v("Create a file jsstore_con.js or jsstore_con.ts (for typescript). This file will be used to create the jsstore connection. You can choose any file name.")])]),e._v(" "),o("li",[o("p",[e._v("Inside the file jsstore_con.js, write below code - ")])])]),e._v(" "),o("p",[e._v("👉 With Web Worker")]),e._v(" "),o("pre",[o("code",[e._v('const getWorkerPath = () => {\n\n    // return dev build when env is development\n    if (process.env.NODE_ENV === \'development\') {\n\n        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");\n\n    }\n    else { // return prod build when env is production\n\n        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");\n\n    }\n};\n\nconst workerPath = getWorkerPath().default;\nexport const connection = new JsStore.Connection(new Worker(workerPath));\n')])]),e._v(" "),o("p",{attrs:{id:"webpack-without-web-worker"}},[e._v("\n👉 Without Web Worker "),o("a",{staticClass:"anchor",attrs:{href:"#webpack-without-web-worker"}},[e._v("#")])]),e._v(" "),o("pre",[o("code",[e._v('import workerInjector from "jsstore/dist/worker_injector";\nconst connection = new Connection();\n\nconnection.addPlugin(workerInjector);\n')])]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Step 4 creates a connection and export the connection variable. You can import this connection variable to anywhere in your code.")])]),e._v(" "),o("p",[o("br"),e._v("In the above code we are using "),o("strong",[e._v("file-loader")]),e._v(" to load jsstore worker file but you are free to use your own technique to load jsstore worker. The simplest approach is download jsstore.worker.js and then specify its path.  ")]),e._v(" "),o("p",[e._v("If you are finding difficult to understand, please take a look at "),o("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples"}},[e._v("examples")]),e._v(" or our "),o("a",{attrs:{href:"https://medium.com/jsstore"}},[e._v("medium page")])]),e._v(" "),o("h4",{attrs:{id:"importantpoints"}},[e._v("Important points")]),e._v(" "),o("ul",[o("li",[e._v("The connection variable will be used to execute the all query for a single database.")]),e._v(" "),o("li",[e._v("A connection will handle one db at a time.")]),e._v(" "),o("li",[e._v("You can create mutiple connection for multiple database but do not create multiple connection for one database as it will lead you to some data stale issue. A single connection can handle all the query and it executes query one by one, so you have always latest data.")])])])}),[],!1,null,null,null);t.default=component.exports}}]);