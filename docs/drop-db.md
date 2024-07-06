---
sidebar_position: 16
keywords: [drop, database, remove, indexeddb, jsstore]
---

# Drop Database

`dropDb` is used to remove the current database from browser storage.

```javascript
connection.dropDb().then(function() {
    console.log('Db deleted successfully');
}).catch(function(error) {
    console.log(error);
});
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=dropDb()%3B">Example</a>
</p>
