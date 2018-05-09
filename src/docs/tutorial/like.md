---
Title: "Like"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Like is used with Where to search for a specified pattern in a column. Currently We support only '%' character.

Some Examples of Like supported by JsStore -

*   **Like 'a%' :** Finds any values that starts with "a".
*   **Like '%a' :** Finds any values that ends with "a".
*   **Like '%a%' :** Finds any values that contains "a" at any position.

#### Sql

```
Select * From Table_Name;
Where
Column_Name Like 'a%'
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Where: {
        Column_Name: {
            Like: 'a%'
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

[Example](/example/like) [Next](#)