---
Title: "Connection"
Keywords: "database, connection, query, indexeddb, jsstore"
Description: "How to create connection in jsstore"
---

Connection in jsstore is object of class `Instance`. All apis are called using connection.

##### Syntax
<br>
### With Web Worker

```
var connection = new JsStore.Instance(new Worker('jsstore worker path'));

```

### Without web worker

```
var connection = new JsStore.Instance();

```
<div class="margin-top-30px top-border margin-bottom-20px"></div>
<br>
## How to create connection in webpack
<br>

1. Install jsstore using npm or yarn - `npm i jsstore`

2. Install file-loader -  `npm i file-loader -D`

3. Create a file jsstore\_con.js or jsstore\_con.ts (for typescript). This file will be used to create the jsstore connection. You can choose any file name.

4. Inside the file jsstore\_con.js, write below code - 

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

const workerPath = getWorkerPath();
export const connection = new JsStore.Instance(new Worker(workerPath));
```

5. Step 4 creates a connection and export the connection variable. You can import this connection variable to anywhere in your code.

<br>If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples) or our [medium page](https://medium.com/jsstore) 

<br>
**Important points :-**  

*   The connection variable will be used to execute the further query.
*   A connection will handle one db at a time.
*   Do not create multiple connection for one db.


<p class="margin-top-40px center-align">
      <button class="btn info btnNext">Next</button>
</p>