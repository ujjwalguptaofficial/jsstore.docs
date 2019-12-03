---
Title: "Union"
Keywords: "union, api, indexeddb, jsstore"
Description: "Union is an api which combine the result of two or more select query."
---

Union is an api which combine the result of two or more select query.

## Use Case
<br>
There are times when one query is not able to fulfill the situation and so you need to use multiple query but now you are in a situation where some of the values are same in both results. `Union` api is useful in these situation where it combines the results of multiple select query and removes the duplicate records.

e.g - Consider below queries - 

1st query 

```
connection.select({
    from: 'Products',
    where: {
        price: {
            '>': 10
        }
    }
})
```

2nd query 

```
connection.select({
    from: 'Products',
    where: {
        price: {
            '>': 50
        }
    }
})
```

now in the above two queries - results from first query will have some records existing in results of 2nd query.

so using union we will combine these two results and query will be - 

```
var results = await connection.union([
    {
        from: 'Products',
        where: {
            price: {
                '>': 10
            }
        }
    },
    {
        from: 'Products',
        where: {
            price: {
                '>': 50
            }
        }
    }
])
```


