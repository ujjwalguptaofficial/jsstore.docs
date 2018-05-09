---
Title: "In"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

In allows you to specify multiple values in a Where.It can be used to execute multiple or condition.

#### Sql (Where)

```
Select * From Table_Name;
Where
Column_Name In (value1, value2, ...)
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    where: {
        Column_Name: { 
            in: [value1, value2, ...]
        }
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/in">Example</a>
    <button class="btn info btnNext">Next</button>
</p>