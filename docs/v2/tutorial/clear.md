---
Title: "Clear"
Keywords: "clear, table, api, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

clear is used to remove all records from a table. You can also use delete api to clear records from particular table but difference is that clear will be fast and wont return no of record deleted while delete will return no of record deleted.

```
connection.clear(table_name).then(function() {
    console.log('data cleared successfully');
}).catch(function(error) {
    alert(error.value);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/clear">Example</a>
    <button class="btn info btnNext">Next</button>
</p>