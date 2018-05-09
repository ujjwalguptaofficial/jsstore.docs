---
Title: "Distinct"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Distinct is used to return the unique set of result. Distinct filters the result for all columns together except Primary column, since Primary column will make the result always unique.

**Note :-** If you want to return the distinct results based on some columns, then you should use GroupBy.

#### Sql (Where)

```
Select Distinct * From Table_Name;
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Distinct: true,
    // it is optional value which takes boolean value- true or false.
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
    <a class="btn info" target="_blank" href="/example/distinct">Example</a>
    <button class="btn info btnNext">Next</button>
</p>