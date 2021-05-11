---
Title: "In"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo").
select({
    From: "Customers",
    Where:{
        country:{In:['Germany', 'France', 'UK']}
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```