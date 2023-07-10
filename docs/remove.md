---
sidebar_position: 9
keywords: [remove, delete, api, indexeddb, jsstore]
---

# Remove

`remove` api can be used to remove records from a table. `where` can be used to filter target records.

## Sql

```
Delete From Table_Name
Where
    Column1=some_value
and
    Column2=some_another_value;
```

## JsStore

```
var rowsDeleted = await connection.remove({
    from: "Table_Name",
    where: {
        column1: some_value,
        column2: some_another_value
    }
});
//results will contains no of rows deleted.
console.log(rowsDeleted);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=remove(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20customerName%3A'Alfreds%20Futterkiste'%0A%20%20%20%20%7D%0A%7D)%3B%0A">Example</a>
</p>