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
Connection.select({
    From: "Table_Name",
    Where: {
        Column1: some_value,
        Column2: some_another_value
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

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/where">Example</a>
    <button class="btn info btnNext">Next</button>
</p>