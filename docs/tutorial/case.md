---
Title: "Case"
Keywords: "case, query, indexeddb, jsstore"
Description: "case is used to change stored value based on some condition."
---

 The case is an option in select query which is used to change stored value based on some condition. It is similar to multiple if else statetement. So once a condition is true it is stopped and value is returned.

 Note : - This is not used to filter values but to change value. To filter value `where` is used.


```
const results = await connection.select({
    from: 'Customers',
    case: {
        city: [{
            '=': 'London',
            then: 'London UK'
        }, {
            then: 'World'
        }]
    }
})
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20case%3A%20%7B%0A%20%20%20%20%20%20%20%20city%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'London%20UK'%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'World'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)">Example</a>
</p>

<p>
The case can be also used in order query to change the ordering of result.

```
// In Customers table - record contains country -  Argentina, Austria , etc.
// when sorting by asc the record austria comes first
// but for some reason we want Argentina to comes first


const results = await connection.select({
    from: 'Customers',
    limit: 10,
    order: {
        by: 'country',
        case: {
            country: [{
                '=': 'Austria',
                then: "a"
            }, {
                then: "b"
            }]
        }
    }
})
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20limit%3A%2010%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%20%20%20%20case%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20country%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'Austria'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22a%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22b%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)">Example</a>
    <button class="btn info btnNext">Next</button>
</p>

</p>