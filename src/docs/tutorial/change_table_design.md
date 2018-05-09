---
Title: "Change Table Design"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Define your Table Object and add an extra property 'Version' with a value greater than Db Version and call api 'isDbExit' supplying table details (check out example). You can get Db version by using below code.

```
JsStore.getDbVersion(db_name, function(version) {
    console.log(version)
});
```

The above code is for only development purpose.Dont execute this code to increase Db Version. You will have to specify the value manually.

**Note :-** Doing this will delete all data from browser for the particular table.

If you want to save your data.You can select all data and save it in a variable or you can use [KeyStore](https://github.com/ujjwalguptaofficial/KeyStore). And you can insert data into new table later.

**Note :-** [KeyStore](https://github.com/ujjwalguptaofficial/KeyStore) is part of JsStore. It uses KeyStore to store meta data.

#### Example

Step - 1 : Define your table

```
var Table1 = {
    Name: "table_name",
    Columns: [{
            Name: "column1",
            DataType: 'datatype'
            PrimaryKey: true
        },
        {
            Name: "column2",
            DataType: 'datatype'
        },
        ..... {
            Name: "columnN",
            DataType: 'datatype'
        }
    ],
    Version: 2 //Default version is 1.
}
```

Step - 2 : call api 'isDbExit' supplying table details

```
// You can also change multiple table at a time. Just change version no and specify only one table in isDbExist and JsStore will take care of everything.
var Connection == new JsStore.Instance();
JsStore.isDbExist({
    DbName: db_name,
    Table: {
        Name: table_name,
        Version: 2
    }
}, function(isExist) {
    if (isExist) {
        Connection.openDb(db_name);
    } else {
        Connection.createDb(Database);
    }
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/change_table_design">Example</a>
    <button class="btn info btnNext">Next</button>
</p>