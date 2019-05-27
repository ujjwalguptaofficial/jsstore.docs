---
Title: "Limit"
Keywords: "limit, select, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Limit is used to specify the number of records to return. It is available with only select.

#### Sql

```
Select * from Table_Name Limit number;
```

#### JsStore

```
var results = await connection.select({
    from: "Table_Name",
    limit: number
});

//results will be array of objects.
console.log(results);
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/limit">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
