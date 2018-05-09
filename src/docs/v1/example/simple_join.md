---
Title: "Simple Join"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var JoinLogic={
    Table1:{
        Table:'Orders',
        Column:'customerId'
    },
    Join:'inner',
    Table2:{
        Table:'Customers',
        Column:'customerId'
    }
}

var Connection = new JsStore.Instance();
Connection.openDb("Demo").select({
    From: JoinLogic,
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```