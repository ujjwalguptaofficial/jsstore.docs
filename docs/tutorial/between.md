---
Title: "Between"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

**" \- "** symbol is used to select result between two values. The values should be numbers only.

#### Sql (Where)

```
Select * From Table_Name;
Where
Column_Name Between value1 and value2
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    where: {
        Column_Name: {
            '-': {
                Low: value1
                High: value2
            }
        },
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
     console.log(error);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/between">Example</a>
    <button class="btn info btnNext">Next</button>
</p>