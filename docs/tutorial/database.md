---
Title: "DataBase"
Keywords: "database, api, query, indexeddb, jsstore"
Last Updated : "09/05/2018"
---

A database in JsStore is array of tables.

```
var database = {
    name: "database name",
    tables: [table1, table2, table3]
}
```

Now you have successfully defined Database. Lets create the database in browser and fetch the db connection.

JsStore executes everything in worker. So we need to supply worker instance for initiating the jsstore.

```
var connection = new JsStore.Instance(new Worker('jsstore worker location'));
connection.createDb(Database);
```

When Db is already created. You can open the connection using **openDb**.

**Note :-** 'createDb' api is time consuming, so when you have already created database - it is recommended to use 'openDb'.

```
var connection = new JsStore.Instance(new Worker('jsstore worker location'));
connection.openDb(Database_Name);
```

JsStore provides **isDbExist** api to check whether database is created or not.

```
connection.isDbExist(db_name).then(function(isExist) {
    console.log(isExist);
});
```

So if we will wrap above concept, we can use below code to initiate database.

```
var connection = new JsStore.Instance(new Worker('jsstore.worker.js'));
connection.isDbExist(db_name).then(function(isExist) {
    if (isExist) {
        Connection.openDb(db_name);
    } else {
        Connection.createDb(Database);
    }
}).catch(function(err) {
    //this will be fired when indexedDB is not supported.
    alert(err.message);
});
```

**Note :-**  

*   The connection variable will be used to execute the further query.
*   You dont need to open the db multiple times. Declare it one time at page load and use it always.
*   At a time one db can be handled by one jsstore instance. So if you want to open multiple db, create multiple instance.


If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples).

<p class="margin-top-40px center-align">
      <button class="btn info btnNext">Next</button>
</p>