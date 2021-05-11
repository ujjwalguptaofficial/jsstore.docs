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
Connection.select({
    From: "Table_Name",
    Where: {
        Column_Name: {
            '-': {
                Low: value1
                High: value2
            }
        },
    },
    OnSuccess: function(results) {
        //results will be array of objects.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/between">Example</a>
    <button class="btn info btnNext">Next</button>
</p>