---
Title: "In"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Customers",
    where:{
        country:{in:['Germany', 'France', 'UK']}
    }
});

```