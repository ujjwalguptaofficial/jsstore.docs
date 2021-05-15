---
Title: "Connection"
Keywords: "database, connection, query, indexeddb, jsstore"
Description: "How to create connection in jsstore"
---

Connection is a Class which contains all apis like `select`, `count` etc. Under the hood it talks with indexeddb and return results.

<div class="highlight">
Connection can be initialize with web worker or without web worker. If initialized with web worker, then all logic will be executed inside web worker. It is strongly recommended to use web worker.
</div>

### With Web Worker

```
var connection = new JsStore.Connection(new Worker('jsstore worker path'));

```

**example** - <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example">https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example</a>


### Without web worker

```
var connection = new JsStore.Connection();

```

**example** - <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker">https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without\_web_worker</a>

<div class="mt-20px top-border"></div>
## How to create connection in webpack
<br>

1. Install jsstore using npm or yarn - `npm i jsstore`

2. Install file-loader -  `npm i file-loader -D`

3. Create a file jsstore\_con.js or jsstore\_con.ts (for typescript). This file will be used to create the jsstore connection. You can choose any file name.

4. Inside the file jsstore\_con.js, write below code - 

👉 With Web Worker

```
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

👉 Without Web Worker

```
import workerInjector from "jsstore/dist/worker_injector";
const connection = new Connection();

connection.addPlugin(workerInjector);
```

5. Step 4 creates a connection and export the connection variable. You can import this connection variable to anywhere in your code.

<br>In the above code we are using **file-loader** to load jsstore worker file but you are free to use your own technique to load jsstore worker. The simplest approach is download jsstore.worker.js and then specify its path.  

If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/jsstore-examples) or our [medium page](https://medium.com/jsstore)

#### Important points 

*   The connection variable will be used to execute the all query for a single database.
*   A connection will handle one db at a time.
*   You can create mutiple connection for multiple database but do not create multiple connection for one database as it will lead you to some data stale issue. A single connection can handle all the query and it executes query one by one, so you have always latest data.


