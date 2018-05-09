---
Title: "Update"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance().openDb("Demo");
Connection.update({
    In: "Customers",
    Set: {
        contactName: 'Ujjwal',
        city: 'Bhubaneswar'
    },Where: {
        customerId: 1
    },
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```