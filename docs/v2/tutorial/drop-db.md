---
Title: "Drop Database"
Keywords: "drop, database, remove, indexeddb, jsstore"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

dropDb is used to remove the current database from browser storage.

```
connection.dropDb().then(function() {
    console.log('Db deleted successfully');
}).catch(function(error) {
    console.log(error);
});;
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/drop_db">Example</a>
    <button class="btn info btnNext">Next</button>
</p>