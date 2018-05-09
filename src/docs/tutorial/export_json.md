---
Title: "Export Json"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

As the name say - "exportJson" will download a json file. It takes a select query and result from the query is saved as a json file.

```
Connection.exportJson({
    From: "Table_Name",
    Where: {
        Column1: some_value,
        Column2: some_another_value
    },
    OnSuccess: function() {
        console.log('Successfully exported');
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

[Example](/example/export_json) [Next](#)