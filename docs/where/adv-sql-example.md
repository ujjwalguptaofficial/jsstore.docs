---
keywords: [advanced sql, select, example, where]
---

# Advanced Example

These are some examples of common use cases -
        
## Select * from Table_Name where Column1=value1 or (Column2=value2 and Column3=value3)

```javascript
connection.select({
    from: "Table_Name",
    where: [{
            Column1: value1
        },
        {
            or: {
                Column2: value2,
                Column3: value3
            }
        }
    ]
});
```

## Select * from Products where supplierId = 1 and (categoryId = 1 and price = 18) or(categoryId = 2 and price = 39)

```javascript
select({
    from: "Products",
    where: [{
        supplierId: 1,
    }, {
        categoryId: 1,
        price: 18,
    }, {
        or: {
            categoryId: 2,
            price: 39,
        }
    }]
});
```

## 
    

Hope these examples will help you to write more complex queries. If you are not able to understand or write some complex queries - ask at stackoverflow mentioning jsstore and indexeddb.
