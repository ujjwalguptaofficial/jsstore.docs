---
sidebar_position: 1
keywords:
  [
    jsstore,
    get started,
    introduction,
    indexeddb,
    tutorial,
    sql,
    documentation,
    indexeddb demo,
  ]
---

# Get Started

Welcome to the Get Started tutorial for using JsStore to perform CRUD operations in IndexedDB.

To follow along with this tutorial, you can download the example code from the [Crud implementation](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example) repository.

Let's dive in and learn how to leverage the power of JsStore to work with IndexedDB!

In this tutorial, we will be using vanilla JavaScript for simplicity. However, you are free to use any framework such as React, Vue, etc.

## Introduction

JsStore is a wrapper for [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) that provides a simple SQL-like API, making it easy to learn and use.

IndexedDB queries can be executed inside a web worker, and JsStore preserves this functionality by providing a separate worker file.

You can choose to execute queries either inside a web worker or without one. However, it is strongly recommended to use a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) because it runs scripts in a background thread, improving performance and responsiveness.

## Installation

Let's install jsstore using npm.

```bash
npm i jsstore
```

## Connection

In JsStore, the Connection class serves as the primary interface for querying the single database. It can be initialized with or without a web worker file, offering flexibility in handling database operations either directly on the main thread or in the background with a worker for improved performance.

For more information, refer to the [Connection](/docs/connection.md) page.

```js
import { Connection } from "jsstore";

const getWorkerPath = () => {
  // return dev build when env is development
  if (process.env.NODE_ENV === "development") {
    return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
  } else {
    // return prod build when env is production
    return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
  }
};

const workerPath = getWorkerPath().default;

// The connection will be used to execute indexedb queries
const connection = new JsStore.Connection(new Worker(workerPath));
```

:::info
The code above uses Webpack’s `file-loader` to retrieve the worker path. For Vite or other build tools, a different configuration is required. See the [Vite support documentation](docs/connection.md#connection-in-vite) for details.
:::

## Creating Database

JsStore follows SQL approach to create a database - A database consists of tables and a table consists of columns.

Let's see an example -

```js
var dbName = "JsStore_Demo";
var tblProduct = {
  name: "Product",
  columns: {
    // Here "Id" is name of column
    id: { primaryKey: true, autoIncrement: true },
    itemName: { notNull: true, dataType: "string" },
    price: { notNull: true, dataType: "number" },
    quantity: { notNull: true, dataType: "number" },
  },
};
var database = {
  name: dbName,
  tables: [tblProduct],
};
```

As written in the code, you can define constraints like autoincrement, data type, default, not null, similar to what you can do in SQL. Read more about columns [here](/docs/database/column.md).

Now we need to use the above database schema to create the database in indexeddb.

## initDb

[initDb](/docs/database#2callinitdb) API is used to initiate the database. It accepts the database schema and creates or opens the database.

It returns a boolean value which can be used to know if the database is created or opened.

```js
const isDbCreated = await connection.initDb(database);
if (isDbCreated === true) {
  console.log("db created");
  // here you can prefill database with some data
} else {
  console.log("db opened");
}
```

**Note :-** The connection variable will be used to execute future queries so we don't need to initiate it multiple times.

## Inserting data

JsStore provides [insert](/docs/insert/index.md) API for inserting data.

Let's say we have below value -

```js
var value = {
  itemName: "Blue Jeans",
  price: 2000,
  quantity: 1000,
};
```

:::info
value does not contains id property because it is an autoincrement column. It will be automatically generated before storing data.
:::

Now, let's insert this value into db -

```js
var insertCount = await connection.insert({
  into: "Product",
  values: [value],
});

console.log(`${insertCount} rows inserted`);
```

## Fetch data

JsStore provides [select](/docs/select/index.md) API for fetching data. Let's say I want to retrieve the record with Id of 5.

```js
// results will be array of objects
var results = await connection.select({
  from: "Product",
  where: {
    id: 5,
  },
});

alert(results.length + "record found");
```

You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc. For more filtering option , read [where doc](/docs/where/index.md).

## Updating data

JsStore provides [update](/docs/update/index.md) API for updating data.

Consider we want to update Quantity to 2000 on the products with item name containing substring 'black'.

```js
var rowsUpdated = await connection.update({
  in: "Product",
  where: {
    itemName: {
      like: "%black%",
    },
  },
  set: {
    quantity: 2000,
  },
});
alert(rowsUpdated + " rows updated");
```

## Remove data

JsStore provides [remove](/docs/remove.md) API for removing data.

Consider we want to delete the product with id of 10.

```js
var rowsDeleted = await connection.remove({
  from: "Product",
  where: {
    id: 10,
  },
});
alert(rowsDeleted + " record deleted");
```

Congratulations on completing this article! Now it's time to put your knowledge into action and create something amazing.

---

## Tutorial and examples

For a better understanding, check out the following tutorials and examples:

- [Vue integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue)
- [React integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react)
- [Angular integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular)
- [Svelte integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte)
- [ElectronJs integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron)
- [JsStore without web worker](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker)
- [Building an indexeddb app with webpack](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack)
- [Crud implementation](https://github.com/ujjwalguptaofficial/jsstore-examples)
- [Using jsstore in typescript](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/typescript)

* [Vue integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue)
* [React integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react)
* [Angular integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular)
* [Svelte integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte)
* [ElectronJs integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron)
* [JsStore without web worker](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker)
* [Building an indexeddb app with webpack](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack)
* [Crud implementation](https://github.com/ujjwalguptaofficial/jsstore-examples)
* [Using jsstore in typescript](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/typescript)
