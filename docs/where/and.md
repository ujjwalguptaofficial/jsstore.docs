---
sidebar_position: 1
keywords: [where, filter, query, indexeddb, jsstore]
---

# And

The `AND` operator is used with the `WHERE` clause in SQL to filter records based on multiple conditions. It allows you to specify multiple conditions that must all be true for a record to be included in the result set.


## SQL

```sql
Select * From Table_Name
Where
Column1=some_value
and
Column2=some_another_value;
```

## JsStore

```javascript
var results = await connection.select({
    from: "Table_Name",
    where: {
        column1: some_value,
        column2: some_another_value
    }
});
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20country%3A%20'Mexico'%2C%0A%20%20%20%20%20%20%20%20postalCode%3A%2205033%22%0A%20%20%20%20%7D%0A%7D)%3B">Example</a>
</p>