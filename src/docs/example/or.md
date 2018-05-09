---
Title: "Or"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Customers",
    where:{
        country:'Mexico',
        or:{
            city:'London'
        }
    }
});

```