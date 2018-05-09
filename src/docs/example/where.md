---
Title: "Where"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

```
var Connection = new JsStore.Instance().openDb("Demo");
Connection.select({
    From: "Customers",
    Where:{
        Country:'Mexico'
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});
```
