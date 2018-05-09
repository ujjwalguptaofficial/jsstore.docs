---
Title: "Export Json"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance('Demo');
Connection.exportJson({
    From: "Customers",
    OnSuccess:function (){
        log('Successfully exported');
    },
    OnError:function (error) {
        log(error);
    }
});

```