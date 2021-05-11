---
Title: "Limit"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance().openDb("Demo");
Connection.select({
    From: "Customers",
    Limit: 10,
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```