---
Title: "Delete"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance('Demo');
Connection.remove({
    From: "Customers",
    Where:{
        customerName:'Alfreds Futterkiste'
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```