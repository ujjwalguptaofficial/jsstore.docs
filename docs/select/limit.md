---
sidebar_position: 1
keywords: [limit, select, query, indexeddb, sql, jsstore]
---

# Limit

Limit is used to specify the number of records to return. It is available with only select.

## Sql

```sql
Select * from Table_Name Limit number;
```

## JsStore

```javascript
var results = await connection.select({
    from: "Table_Name",
    limit: number
});

//results will be array of objects.
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20limit%3A%2010%0A%7D)%3B%0A">Example</a>
</p>
