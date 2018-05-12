---
Title: "Ignore Case"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Customers",
    ignoreCase:true,
    where:{
        country:'mexico'
    }
});

```