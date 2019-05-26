---
Title: "Count"
Keywords: "count, api, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

You can use Where and WhereIn to filter results.

#### Sql

```
Select count(*) From Table_Name;
Where
    Column1=some_value
and
    Column2=some_another_value;
```

#### JsStore

```
connection.count({
    from: "Table_Name",
    where: {
        Column1: some_value,
        Column2: some_another_value
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    console.log(error);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/count">Example</a>
    <button class="btn info btnNext">Next</button>
</p>