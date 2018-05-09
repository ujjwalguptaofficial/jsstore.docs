---
Title: "Order By"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Customers",
    order: {
        by: 'country',
        type: "desc"
    }
});

```