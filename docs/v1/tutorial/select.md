---
Title: "Select"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

#### Sql

```
Select * from Table_Name;
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
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
    <a class="btn info" target="_blank" href="/example/select">Example</a>
    <button class="btn info btnNext">Next</button>
</p>