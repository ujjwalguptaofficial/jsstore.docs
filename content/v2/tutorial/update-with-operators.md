---
Title: "Update With Operators"
Keywords: "update , operators, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore provides you a way to update data with arithmetic operators.

e.g - you want to add 5 to current stored data.

```
connection.update({
    in: "Table_Name",
    set: {
        Column1: {
            '+': value1
        },
        //Supported operators are - +, -, *, /
        Column2: value2
    },
    where: {
        Column3: some_value,
        Column4: some_another_value
    }
}).then(function(rowsUpdated) {
    alert(rowsUpdated + ' rows updated');
}).catch(function(err) {
    console.log(err);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/update-with-operators">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
