---
Title: "Skip"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Skip is used to specify the number of records to skip. It is available with only select.

It can be done in sql in no of ways, so i am not mentioning any particluar example.

#### JsStore

```
connection.select({
    from: "Table_Name",
    skip: number,
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/skip">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
