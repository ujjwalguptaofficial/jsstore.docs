---
Title: "Where"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Where can be used to filter records same as Sql Where clause.

#### Sql (Where)

```
Select * From Table_Name
Where
Column1=some_value
and
Column2=some_another_value;
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    where: {
        column1: some_value,
        column2: some_another_value
    }
}).then(function(results) {
    //results will contains no of rows deleted.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/where">Example</a>
    <button class="btn info btnNext">Next</button>
</p>