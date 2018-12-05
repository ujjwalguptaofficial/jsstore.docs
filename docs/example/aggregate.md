---
Title: "Aggregate"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Products",
    aggregate: {
        min: "price" // column name
    }
});

```