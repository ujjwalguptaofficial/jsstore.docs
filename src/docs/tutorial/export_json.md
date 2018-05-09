---
Title: "Export Json"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

As the name say - "exportJson" will download a json file. It takes a select query and result from the query is saved as a json file.

```
connection.exportJson({
    from: "Table_Name",
    where: {
        Column1: some_value,
        Column2: some_another_value
    }
}).then(function() {
    console.log('Successfully exported');
}).catch(function(error) {
    console.log(error);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/export_json">Example</a>
    <button class="btn info btnNext">Next</button>
</p>