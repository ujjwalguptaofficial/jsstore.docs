---
Title: "Update"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

You can use Where to filter results.

#### Sql

```
Update Table_Name;
Set
    column1 = value1,
    column2 = value2,
Where
    Column3=some_value
and
    Column4=some_another_value;
```

#### JsStore

```
Connection.update({
    In: "Table_Name",
    Set: {
        Column1: value1,
        Column2: value2
    },
    Where: {
        Column3: some_value,
        Column4: some_another_value
    },
    OnSuccess: function(rowUpdated) {
        //results will contains no of rows updated.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/update">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
