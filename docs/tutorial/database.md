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

Now you have successfully defined Database, lets create the database in browser.

JsStore executes everything in worker. So we need to supply worker instance for initiating the jsstore.

```
var connection = new JsStore.Instance(new Worker('jsstore worker location'));
var isDbCreated = await connection.initDb(Database);
```

When Db is already created. You can open the connection using **openDb**.

```
var connection = new JsStore.Instance(new Worker('jsstore worker location'));
await connection.openDb(Database_Name);
```

JsStore provides **isDbExist** api to check whether database is created or not.

```
await isExist = connection.isDbExist(db_name);
```

**Note :-**  

*   You dont need to open the db multiple times. Declare it one time at page load and use it always.
*   At a time one db can be handled by one jsstore instance. So if you want to open multiple db, create multiple instance.


<br>If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples) or our [medium page](https://medium.com/jsstore) 

<p class="margin-top-40px center-align">
      <button class="btn info btnNext">Next</button>
</p>