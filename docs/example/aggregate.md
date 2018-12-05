---
Title: "Aggregate"
---

```
select({
    from: "Products",
    aggregate: {
        min: "price"
    }
});

```