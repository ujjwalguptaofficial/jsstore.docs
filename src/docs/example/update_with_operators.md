---
Title: "Update With Operators"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance().openDb("Demo");
Connection.update({
    In: "Products",
    Set: {
        price: {'+':5}
    },
    Where: {
        productId: 1
    },
    OnSuccess:function (rowsAffected){
        log(rowsAffected);
    },
    OnError:function (error) {
        log(error);
    }
});

```