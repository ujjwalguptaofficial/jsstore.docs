---
sidebar_position: 3
Keywords: [database, connection, query, indexeddb, jsstore]
---

# Connection

The `Connection` class is the main interface for interacting with the indexeddb database and provides various APIs such as `select`, `count`, etc. to perform operations on the database.

> Connection can be initialize with web worker or without web worker. If initialized with web worker, then all logic will be executed inside web worker. It is strongly recommended to use web worker.

## With Web Worker

```js
var connection = new JsStore.Connection(new Worker('jsstore worker path'));
```

**example** - <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example">https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example</a>


## Without web worker

```js
var connection = new JsStore.Connection();
```

When initializing without a web worker, ensure that you include the jsstore worker file.

**example** - <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker">https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without\_web_worker</a>

### Using import

```javascript
import workerInjector from "jsstore/dist/worker_injector";
export const connection = new Connection();

connection.addPlugin(workerInjector);
```

To use the `connection` variable in your project, simply import it wherever it is required.

## Using bundler

To use bundlers like webpack and vite with `jsstore`, follow these steps:

1. Install `jsstore` by running the following command:

```bash
npm i jsstore
```

### Webpack

Install the required plugins:

```
npm i file-loader -D
```

Create a file `jsstore_con.js` or `jsstore_con.ts` (for TypeScript). This file will be used to create the JsStore connection. You can choose any file name. Inside the file `jsstore_con.js`, write the following code:

```javascript
const getWorkerPath = () => {

    // return dev build when env is development
    if (process.env.NODE_ENV === 'development') {
        
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");

    }
    else { // return prod build when env is production
        
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
        
    }
};

const workerPath = getWorkerPath().default;
export const connection = new JsStore.Connection(new Worker(workerPath));
```

The code above creates a `connection` object and exports it. You can import this `connection` object wherever it is needed in your code.

:::info
In the above code, we are using **file-loader** to load the jsstore worker file. However, you are free to use your own technique to load the jsstore worker. One simple approach is to download `jsstore.worker.js` and specify its path.
:::

## Connection in vite

First, install the required Vite plugins:

```bash
npm install vite-plugin-externals vite-plugin-file --save-dev
```

Then, configure your `vite.config.js` file:

```javascript
import { defineConfig } from 'vite';
import externals from 'vite-plugin-externals';
import file from 'vite-plugin-file';

export default defineConfig({
  plugins: [
    externals({
      jsstore: 'jsstore',
    }),
    file({
      assetsDir: 'scripts',
      outputDir: 'dist',
      assetsInlineLimit: 0,
      esModule: false,
    }),
  ],
});
```

After configuring Vite, update your `getWorkerPath` function:

```javascript
const getWorkerPath = () => {
  if (import.meta.env.MODE === 'development') {
    return import.meta.ROLLUP_FILE_URL_jsstore_dist_jsstore_worker_js;
  } else {
    return import.meta.ROLLUP_FILE_URL_jsstore_dist_jsstore_worker_min_js;
  }
}; 
const workerPath = getWorkerPath();
export const connection = new JsStore.Connection(new Worker(workerPath));
```

Make sure you adjust the import URLs (`ROLLUP_FILE_URL`) according to your project structure and the output directory configured in the Vite configuration.

This setup will handle loading the appropriate worker file based on the environment (development or production) when using Vite for your project.

---

If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/jsstore-examples) or our [medium page](https://medium.com/jsstore)

## Important points 

Here are some important points to keep in mind when working with the `Connection` class:

* The `connection` variable represents the connection to a single database and is used to execute all queries for that database.
* Each connection can handle one database at a time.
* It is possible to create multiple connections for multiple databases, but avoid creating multiple connections for a single database as it can lead to data staleness issues. A single connection can handle all queries and executes them one by one, ensuring that you always have the latest data.


