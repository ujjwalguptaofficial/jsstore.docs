---
Title: "Simple Join"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var joinLogic={
    table1:{
        table:'Orders',
        column:'customerId'
    },
    join:'inner',
    table2:{
        table:'Customers',
        column:'customerId'
    }
}

select({
    from: joinLogic
});

```