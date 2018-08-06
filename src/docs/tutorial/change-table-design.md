---
Title: "Change Table Design"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Define your Table Object and add an extra property 'Version' with a value greater than Db Version and call api 'isDbExit' supplying table details (check out example). You can get Db version by using below code.

```
connection.getDbVersion(db_name).then(function(version) {
    console.log(version)
})
```

The above code is for only development purpose.Dont execute this code to increase Db Version. You will have to specify the value manually.

**Note :-** Doing this will delete all data from browser for the particular table.

If you want to save your data.You can select all data and save it in a variable. When your new db schema is created , inserts all data into new table.

#### Example

Step - 1 : Define your table

```
var table1 = {
    name: "table_name",
    columns: [{
            name: "column1",
            dataType: 'datatype'
            primaryKey: true
        },
        {
            name: "column2",
            dataType: 'datatype'
        },
        ..... {
            name: "columnN",
            dataType: 'datatype'
        }
    ],
    version: 2 //Default version is 1.
}
```

Step - 2 : call api 'isDbExit' supplying table details

```
// You can also change multiple table at a time. Just change version no and specify only one table in isDbExist and JsStore will take care of everything.

var connection = new JsStore.Instance(new Worker('jsstore.js'));
connection.isDbExist({
    dbName: "db_name",
    table: {
        name: table_name,
        version: 2 // the same version which you have specified in the table
    }
}).then(function(isExist) {
    if (isExist) {
        connection.openDb("db_name");
    } else {
        connection.createDb(Database);
    }
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/change_table_design">Example</a>
    <button class="btn info btnNext">Next</button>
</p>