---
Title: "Or"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Or can be used with Where to filter records.

#### Sql

```
Select * From Table_Name;
Where
Column1=some_value
or
Column2=some_another_value;
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    where: {
        Column1: some_value,
        or: {
            Column2: some_another_value
        }
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});;
```


<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/or">Example</a>
    <button class="btn info btnNext">Next</button>
</p>