---
Title: "Count"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo").
count({
    From: "Customers",
    OnSuccess:function (results){
        log('Count :'+results);
    },
    OnError:function (error) {
        log(error);
    }
});

```