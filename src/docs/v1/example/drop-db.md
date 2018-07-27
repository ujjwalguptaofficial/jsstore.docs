---
Title: "Drop Database"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb("Demo");
Connection.dropDb(function (){
    log("Db dropped successfully");
},
function (error) {
    log(error);
});

```