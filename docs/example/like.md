---
Title: "Like"
Created Date: "09/05/2018"
Last Updated : "10/05/2018"
---

```
select({
    from: "Customers",
    where: {
        customerName:{ like:'%or%'}
    }
});

```