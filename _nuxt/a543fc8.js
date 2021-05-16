(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{210:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(172).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Transaction",description:"learn how to use transaction in jsstore",keywords:"transaction, api, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/transaction.md"}},[n("p",[t._v("IndexedDB is a pure transactional database which means all the query is executed using the transaction.")]),t._v(" "),n("p",[t._v("JsStore provides - "),n("code",[t._v("transaction")]),t._v(" api for executing transaction. ")]),t._v(" "),n("pre",[n("code",[t._v("await connection.transaction({\n    tables: ['Customers'], // list of tables which will be used inside a transaction\n    method: \"buyProducts\" // name of method which implements transaction\n    data: any // pass any data , that will be used in runing transaction\n});\n")])]),t._v(" "),n("p",[n("br")]),t._v(" "),n("h2",{attrs:{id:"howtoimplementatransaction"}},[t._v("How to implement a transaction")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("JsStore takes a method name in transaction api, which is called with a context.")]),t._v(" "),n("p",[t._v("The context is an object which contains following props -")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("start - start the transaction.")])]),t._v(" "),n("li",[n("p",[t._v("select")])]),t._v(" "),n("li",[n("p",[t._v("count")])]),t._v(" "),n("li",[n("p",[t._v("update")])]),t._v(" "),n("li",[n("p",[t._v("remove")])]),t._v(" "),n("li",[n("p",[t._v("insert")])]),t._v(" "),n("li",[n("p",[t._v("setResult - setResult accepts key and value. setResult is used to save the value which will be returned when transaction completes. The transaction returns an object, the object is in form of key and value which is set using setResult.")])]),t._v(" "),n("li",[n("p",[t._v("abort - abort is used to abort the transaction. ")])]),t._v(" "),n("li",[n("p",[t._v("getResult - getResult is used to get the value setted by setResult.")])]),t._v(" "),n("li",[n("p",[t._v("data - value passed in transaction api as data.")])])]),t._v(" "),n("p",[t._v("The transaction method should be -")]),t._v(" "),n("ul",[n("li",[t._v("Accessible - so that it can be called.")]),t._v(" "),n("li",[t._v("Should not have any asychronous logic except calling context apis")])]),t._v(" "),n("p",[n("br")]),t._v(" "),n("h3",{attrs:{id:"accessiblityinwebworker"}},[t._v("Accessiblity in web worker")]),t._v(" "),n("p",[n("br"),t._v("\nWhen using jsstore with a web worker - you can use "),n("a",{attrs:{href:"/tutorial/import-scripts"}},[t._v("importScripts")]),t._v(" to import your scripts which contains your transaction methods.")]),t._v(" "),n("pre",[n("code",[t._v('await importSripts("transaction.js");\n')])]),t._v(" "),n("p",[t._v("after script is imported your method is now available inside the jsstore web worker.\n"),n("br"),t._v(" "),n("br")]),t._v(" "),n("h3",{attrs:{id:"accessiblitywithoutwebworker"}},[t._v("Accessiblity without  web worker")]),t._v(" "),n("p",[n("br"),t._v("\nyou can create a method anywhere and make it available on window.")]),t._v(" "),n("pre",[n("code",[t._v("function buyProducts(){\n\n}\n\n// if method not available on window, otherwise no need\nwindow.buyProducts = buyProducts;\n")])]),t._v(" "),n("p",[t._v("Let's see a example - Consider a situation where a customer buy some products and customer is new.")]),t._v(" "),n("p",[t._v("So the steps will be - ")]),t._v(" "),n("ol",[n("li",[t._v('Add new customer - insert in the table - "Customer"')]),t._v(" "),n("li",[t._v("add new order - insert new order for the above customer")]),t._v(" "),n("li",[t._v("Insert OrderDetails ")]),t._v(" "),n("li",[t._v("Update products - reduce the quantity of product available. ")]),t._v(" "),n("li",[t._v("Calculate total price")])]),t._v(" "),n("pre",[n("code",[t._v("FileName -  transaction.js\n\nasync function buyProducts(ctx) {  \n\n    ctx.start(); // start the transaction\n\n    const insertedCustomers = await ctx.insert({\n        into: 'customers',\n        values: [ctx.data.customer],\n        return: true\n    });\n\n    const newCustomer = insertedCustomers[0];\n\n    // insert order\n\n    const order = {\n        customerId: newCustomer.id,\n        orderDate: new Date(),\n    };\n\n    const insertedOrders = await ctx.insert({\n        into: 'orders',\n        values: [order],\n        return: true\n    })\n\n    const newOrder = insertedOrders[0];\n\n    // insert orderDetail\n\n    const orderDetails = ctx.data.orderDetails.map((value) => {\n        value.orderId = newOrder.orderId\n        return value;\n    });\n\n    const insertedOrderDetails = await ctx.insert({\n        into: 'orderDetails',\n        values: orderDetails,\n    })\n\n    // update the product inventory and evaluate price\n\n    ctx.setResult('totalPrice', 0); //initiating totalPrice\n\n    ctx.data.orderDetails.forEach((orderDetail, index) => {\n        const where = {\n            productId: orderDetail.productId\n        };\n\n        const updateProduct = async () => {\n            const productUpdated = await ctx.update({\n                in: 'products',\n                where: where,\n                set: {\n                    unit: {\n                        '-': orderDetail.quantity\n                    }\n                }\n            });\n            if (productUpdated < 0) {\n                ctx.abort(\"No orderDetails inserted\");\n            }  \n        };\n\n        updateProduct();\n\n        const products = await ctx.select({\n            from: 'products',\n            where: where\n        })\n\n        const product = results[0];\n        const price = product.price * orderDetail.quantity\n        ctx.setResult('totalPrice', ctx.getResult('totalPrice') + price);\n    })\n},\n")])]),t._v(" "),n("div",{staticClass:"margin-top-30px top-border margin-bottom-20px"}),t._v(" "),n("h2",{attrs:{id:"accessibilty"}},[t._v("Accessibilty")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("h3",{attrs:{id:"ifusingwebworker"}},[t._v("If using web worker")]),t._v(" "),n("pre",[n("code",[t._v('// import scripts first, so that transaction methods becomes available\n\nawait connection.importScripts("./transaction.js");\n')])]),t._v(" "),n("h3",{attrs:{id:"withoutwebworker"}},[t._v("Without web worker")]),t._v(" "),n("pre",[n("code",[t._v("window.buyProducts = buyProducts;\n")])]),t._v(" "),n("div",{staticClass:"margin-top-30px top-border margin-bottom-20px"}),t._v(" "),n("p",[t._v("Now method is accessible and can be executed, let's call the transaction api -")]),t._v(" "),n("pre",[n("code",[t._v("var result = await connection.transaction({\n    tables: ['customers', 'orders', 'products', 'orderDetails'], // list of tables which will be used in transaction\n    method: \"buyProducts\" \n    data: { // the transaction logic will be called with supplying data\n        customer: {\n            customerName: 'ujjwal gupta',\n            address: 'bhubaneswar odisha',\n            city: 'bhubaneswar',\n            postalCode: 'asdf',\n            country: 'india',\n            email: 'sdfg@m.com'\n        },\n        orderDetails: [{\n            productId: 1,\n            quantity: 2\n        }, {\n            productId: 2,\n            quantity: 4\n        }]\n    }\n});\nconst totalPrice = result.totalPrice;\n")])]),t._v(" "),n("div",{staticClass:"margin-top-30px top-border margin-bottom-20px"}),t._v(" "),n("p",[t._v("Few important things to make sure you are using transaction in right way - ")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Transaction should be light weight. Dont write too many or heavy logics inside it. The reason is  - the indexeddb transaction is asyc and automatically commited and so jsstore.")])]),t._v(" "),n("li",[n("p",[t._v("There may be situation where you have a heavy logic, in that case - calculate the result and put it in data option.")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);