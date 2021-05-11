---
Title: "Like"
Keywords: "like, filter, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "10/05/2018"
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
connection.select({
    from: "Table_Name",
    where: {
        Column_Name: {
            like: 'a%'
        },
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/like">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
