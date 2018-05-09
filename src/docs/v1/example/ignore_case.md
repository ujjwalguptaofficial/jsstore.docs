---
Title: "Ignore Case"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance().openDb("Demo");
Connection.select({
    From: "Customers",
    IgnoreCase:true,
    Where:{
        country:'mexico'
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```