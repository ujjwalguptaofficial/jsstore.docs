---
Title: "Promise"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance('Demo');
Connection.select({
    From: "Customers",
})
.then(function (results){
    log(results);
})
.catch(function (error) {
    alert(error._message);
});

```