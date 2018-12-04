---
Title: "Operators"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore supports following operators : -

*   **" &gt; " :** Finds value greater than supplied value.
*   **" &lt; " :** Finds value less than supplied value.
*   **" &gt;= " :** Finds value greater than or equal to supplied value.
*   **" &lt;= " :** Finds value less than or equal to supplied value.
*   **" \- " :** Finds value between two supplied value.
*   **" != " :** Finds value not equal to supplied value.

#### Sql

```
Select * From Table_Name;
Where
Column_Name > some_value
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Where: {
        Column_Name: {
            '>': some_value
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

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/operator">Example</a>
    <button class="btn info btnNext">Next</button>
</p>