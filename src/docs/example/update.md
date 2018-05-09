---
Title: "Update"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
update({
    in: "Customers",
    set: {
        contactName: 'Ujjwal',
        city: 'Bhubaneswar'
    },
    where: {
        customerId: 1
    }
});

```