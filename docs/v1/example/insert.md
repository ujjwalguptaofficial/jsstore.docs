---
Title: "Insert"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance();
Connection.openDb('Demo');

var Value={
    customerName:'ujjwal gupta', 
    contactName:'ujjwal', 
    address:'bhubaneswar odisha', 
    city:'bhubaneswar', 
    postalCode:'12345', 
    country:'India'
}

Connection.insert({
    Into: "Customers",
    Values: [Value],
    OnSuccess:function (rowAffected){
        log(rowAffected + " records added");
    },
    OnError:function (error) {
        log(error);
    }
});

```