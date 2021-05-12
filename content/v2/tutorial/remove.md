---
Title: "Delete"
Keywords: "remove, delete, api, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

You can use Where to filter results.

#### Sql

```
Delete From Table_Name;
Where
    Column1=some_value
and
    Column2=some_another_value;
```

#### JsStore

```
connection.remove({
    from: "Table_Name",
    where: {
        column1: some_value,
        column2: some_another_value
    }
}).then(function(rowsDeleted) {
    //results will contains no of rows deleted.
    console.log(rowsDeleted);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/remove">Example</a>
    <button class="btn info btnNext">Next</button>
</p>