---
Title: "keyPath"
Keywords: "keypath, column, indexing, indexeddb, jsstore"
Description: "learn how to use keypath for querying faster in indexeddb"
---

`keyPath` is a option in column. It is used to add multiple index, so that query execution can be made faster. It takes an array of type string.

It can b used to increase speed of `select` query.

e.g - Lets take a table name with cities having column pinCodes & name

```
var table = {
    name: 'cities',
    columns: {
        cityName:{},
        pincCodes:{}
    }
}

```

We want to query on pincodes & name so a select query will be like this - 

```
connection.select({
    from: 'cities',
    where: {
        pinCodes: 12345,
        name: 'london'
    }
})
```

Now lets define the table using keyPath 

```
var table = {
    name: 'cities',
    columns: {
        cityName:{},
        pincCodes:{},
        cityPincodes:{keyPath:['cityName','pinCodes']}
    }
}

```

and now new query can be written as - 

```
connection.select({
    from: 'cities',
    where: {
        cityPincodes: ['london',12345] // order of values should be same as what has been defined in keyPath
    }
})
```

Note :- Please compare between query execution time if there is no difference or very less then don't use keyPath. Adding multiple index will increase the db size which is limited for users.