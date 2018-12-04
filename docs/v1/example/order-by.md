---
Title: "Order By"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo");
Connection.select({
    From: "Customers",
    Order: {
        By: 'country',
        Type: "desc"
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```