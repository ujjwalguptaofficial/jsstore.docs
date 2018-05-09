---
Title: "Between"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo").select({
    From: "Products",
    Where: {
        price:{
         "-":{
                Low: 10,
                High: 20
            }
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