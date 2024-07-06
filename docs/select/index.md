---
sidebar_position: 6
keywords: [select, retrieve data, query, api, sql, indexeddb]
---

# Select

The `select` API allows you to retrieve data from a database. It allows you to fetch specific information based on your query criteria. With its intuitive syntax and flexibility, the `Select` API makes it easy to retrieve the data you need.

## SQL

```sql
Select * from Table_Name;
```

## JsStore

```js
var results = await connection.select({
    from: "Table_Name"
});
//results will be array of objects.
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%0A%7D)%3B%0A">Example</a>
</p>
