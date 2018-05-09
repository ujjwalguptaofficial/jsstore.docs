---
Title: "Or"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo").select({
    From: "Customers",
    Where:{
        country:'Mexico',
        Or:{
            city:'London'
        }
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```