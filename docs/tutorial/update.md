---
Title: "Update"
Keywords: "update, api, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Update is used to modify the existing records in a table. You can use Where to filter records.

#### Sql

```
Update Table_Name;
Set
    column1 = value1,
    column2 = value2,
Where
    Column3=some_value
and
    Column4=some_another_value;
```

#### JsStore

```
var noOfRowsUpdated = connection.update({ 
  	in: "Table_Name",
    set: {
        Column1: value1,
        Column2: value2
    },
    where: {
        Column3: some_value,
        Column4: some_another_value
    }
});
alert(noOfRowsUpdated + ' rows updated');
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/update">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
