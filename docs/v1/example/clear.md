---
Title: "Clear"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo").
clear("Customers",function (){
    log("Table cleared successfully");
},
function (error) {
    log(error);
});

```