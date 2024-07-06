---
sidebar_position: 10
keywords: [store, select, query, indexeddb, sql]
---

# Store

`store` is an option in select api which allows to query on data from variable. All query options like ordering, where, group by, aggregate etc can be performed.

```javascript
var customers = []; // some existing value in customers variable

const results = await connection.select({
    store: customers,
    meta: {
        primaryKey: 'customerId'
    },
    limit: 10,
    order: {
        by: 'country'
    }
});

```

👉 `meta` option is used to pass **primaryKey field** of the data.

It can be used in many cases where you have data in memory and you want to perform query on the memory data.

e.g - consider you have stored age in your database as number type. 

```
const data = [
    {
        name:'Ujjwal Gupta',
        age: 28,
        country:'India'
    },    
    {
        name:'Batman',
        age: 40,
        country:'DC'
    },    
    {
        name:'IronMan',
        age: 45,
        country:'Marvel'
    },    
]
```

In your UI - you want to show it whether the person is old or young not the age value. So you fetch the data from the database and format it to achieve the required output.

``` javascript
// get data from database
const results =  await connection.select({
    from:'Persons'
});

// format it to achieve person is old or young

const formattedResults = results.map(item=>{
    if(item.age>40){
        item.ageType = 'old'
    }
    else{
        item.ageType = 'young'
    }
})

```

now you have your data but you want to perform `group by ageType` and `count by country` on the formatted results. So you can perform the select query on the `formattedResults` by using `store` 

```javascript
const results =  await connection.select({
    store: formattedResults,
    aggregate: {
        count: "country"
    },
    groupBy: 'ageType'
});
 
```

**Note:-** It is recommended to use `transaction` api in these cases, as everything can be evaluated at single place and in a single transaction thus faster.
