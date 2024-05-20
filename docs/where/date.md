---
sidebar_position: 10
keywords: [where, filter, date, indexeddb, jsstore]
---

# Date type

To filter by the Date data type, you need to pass a JavaScript Date object in the `where` column.

## Example

```javascript
var results = await connection.select({
    from: "Orders",
    where: {
        orderDate: new Date("1996-07-04T00:00:00.000Z")
    }
});
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Orders%22%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20orderDate%3A%20new%20Date(%221996-07-04T00%3A00%3A00.000Z%22)%0A%20%20%20%20%7D%0A%7D)%3B">Example</a>
</p>

**Note:** This functionality is specifically designed to work with columns that have a data type of `Date`.