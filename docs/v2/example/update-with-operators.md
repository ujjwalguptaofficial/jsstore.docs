---
Title: "Update With Operators"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
update({
    in: "Products",
    set: {
        price: {'+':5}
    },
    where: {
        productId: 1
    }
});

```