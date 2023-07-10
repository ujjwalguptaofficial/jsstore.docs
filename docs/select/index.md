---
sidebar_position: 6
Keywords: [select, api, query, indexeddb, jsstore]
---

# Select

The Select api is used to select data from a database.

## Sql

```sql
Select * from Table_Name;
```

## JsStore

```javascript
var results = await connection.select({
    from: "Table_Name"
});
//results will be array of objects.
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%0A%7D)%3B%0A">Example</a>
</p>