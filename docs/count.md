---
sidebar_position: 10
keywords: [count, api, query, indexeddb, jsstore]
---

# Count
`count` api can be used to count records in a table. You can use `where` to filter results similar to select.

## Sql

```
Select count(*) From Table_Name
Where
    Column1=some_value
and
    Column2=some_another_value;
```

## JsStore

```javascript
const results = await connection.count({
    from: "Table_Name",
    where: {
        column1: some_value,
        column2: some_another_value
    }
});
// results will be a number
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=count(%7B%0A%20%20%20%20from%3A%20%22Customers%22%0A%7D)%0A">Example</a>
</p>
