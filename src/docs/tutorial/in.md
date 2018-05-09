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
Connection.select({
    From: "Table_Name",
    Where: {
        Column_Name: {
            In: [value1, value2, ...]
        }
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

[Example](/example/in) [Next](#)