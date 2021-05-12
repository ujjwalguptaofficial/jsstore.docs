---
Title: "DataBase"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

A database in JsStore is array of tables.

```
var Database = {
    Name: "database name",
    Tables: [Table1, Table2, Table3]
}
```

Now you have successfully created instance of Database. Lets create the database in browser and fetch the db connection.

```
var Connection = new JsStore.Instance();
Connection.createDb(Database);
```

You can also perform the above steps in one line.

```
var Connection = new JsStore.Instance().createDb(Database);
```

When Db is already created. You can use below code to get Connection.

```
var Connection = new JsStore.Instance().openDb('db_name');
```

Or

```
var Connection = new JsStore.Instance('db_name');
```  

Below code is recommended to get db connection -

```
var Connection = new JsStore.Instance();
JsStore.isDbExist(db_name, function(isExist) {
        if (isExist) {
            Connection.openDb(db_name);
        } else {
            Connection.createDb(Database);
        }
    },
    function(err) {
        //this will be fired when indexedDB is not supported.
        alert(err._message);
    }
);
```

Or using promise

For more information about promise in jsstore - [Promise in JsStore](#)

```
var Connection = new JsStore.Instance();
JsStore.isDbExist(db_name).then(function(isExist) {
    if (isExist) {
        Connection.openDb(db_name);
    } else {
        Connection.createDb(Database);
    }
}.catch(err) {
    //this will be fired when indexedDB is not supported.
    alert(err._message);
});
```

**Note :-**  

*   The connection variable will be used to execute the further query.
*   you dont need to open the db multiple times. Declare it one time at page load and use it always.

<p class="margin-top-40px text-center">
      <a class="btn info" target="_blank" href="/example/create_db">Example</a>
      <button class="btn info btnNext">Next</button>
</p>