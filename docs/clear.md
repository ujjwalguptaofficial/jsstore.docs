---
sidebar_position: 12
keywords: [clear, table, api, indexeddb, jsstore]
---

# Clear

`clear` is used to remove all records from a table. 

> You can also use delete api to clear records from particular table but clear will be fast and won't return no of record deleted while delete will return no of record deleted.

``` javascript
await connection.clear(table_name);
console.log('data cleared successfully');
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=clear(%22Suppliers%22)%3B">Example</a>
</p>
