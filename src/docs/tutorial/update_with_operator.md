---
Title: "Update With Operators"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore provides you a way to update data with arithmetic operators.

e.g - you want to add 5 to current stored data.

```
Connection.update({
    In: "Table_Name",
    Set: {
        Column1: {
            '+': value1
        },
        //Supported operators are - +, -, *, /
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
[Example](/example/update_with_operators) [Next](#)