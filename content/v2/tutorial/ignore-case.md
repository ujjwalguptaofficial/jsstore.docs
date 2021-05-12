---
Title: "Ignore Case"
Keywords: "case sensitive, ignore case, query, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JavasScript is case sensitive, so is the IndexedDB. You can use option - 'IgnoreCase' to filter records with case insensitive.


```
connection.select({
    from: "Table_Name",
    ignoreCase: true,
    where: {
        Column1: some_value,
        Column2: some_another_value
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/ignore-case">Example</a>
    <button class="btn info btnNext">Next</button>
</p>