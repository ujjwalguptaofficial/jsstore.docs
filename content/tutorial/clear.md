---
Title: "Clear"
Keywords: "clear, table, api, indexeddb, jsstore"
Description: "clear api removes all records from a table."
---

`clear` is used to remove all records from a table. 

<div class="highlight">
You can also use delete api to clear records from particular table but clear will be fast and won't return no of record deleted while delete will return no of record deleted.
</div>

```
await connection.clear(table_name);
console.log('data cleared successfully');
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=clear(%22Suppliers%22)%3B">Example</a>
</p>