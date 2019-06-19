---
Title: "Change Table Design"
Keywords: "change table, api, query, indexeddb, jsstore"
Description: "how to change table schema after database is created"
---

Define your Table Object and add an extra property 'version' with a value greater than Db Version. 

You can get Db version by using below code.

```
connection.getDbVersion(db_name).then(function(version) {
    console.log(version)
})
```

The above code is for only development purpose. Dont execute this code to increase Db Version. You will have to specify the value manually.

**Note :-** Doing this will delete all data from browser for the particular table.

If you want to save your data.You can select all data and save it in a variable. When your new db schema is created , inserts all data into new table.

#### Example

Change the version in your table schema

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


<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>