---
Title: "Insert"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var value={
    customerName:'ujjwal gupta', 
    contactName:'ujjwal', 
    address:'bhubaneswar odisha', 
    city:'bhubaneswar', 
    postalCode:'12345', 
    country:'India'
}

insert({
    into: "Customers",
    values: [value]
});

```