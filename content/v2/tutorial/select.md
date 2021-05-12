---
Title: "Select"
Keywords: "select, api, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

The Select api is used to select data from a database.

#### Sql

```
Select * from Table_Name;
```

#### JsStore

```
connection.select({
    from: "Table_Name"
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/select">Example</a>
    <button class="btn info btnNext">Next</button>
</p>