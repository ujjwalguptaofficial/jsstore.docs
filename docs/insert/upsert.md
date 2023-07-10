---
Keywords: [upsert, api, insert, indexeddb, jsstore]
---

# Upsert

`upsert` is an option in `insert` api which is used to replace the record if exist otherwise insert as new record if does not exist.

e.g - Consider we have below record in a table "Customers"

```javascript
{
    id:90, //primary key
    name:"ujjwal gupta",
    address:"Bengaluru India"
}
```

now we want to replace the whole data , so we will call `insert` api with option `upsert`.

```javascript
var newData = {
    id:90, //primary key
    name:"some other name",
    address:"some other address"
}

var noOfRowsInserted = await connection.insert({
    into: "Customers",
    upsert:true,
    values: [newData], //you can insert multiple values at a time
});
``` 

👉 Points to note :- 

* While using upsert - primary key should be same as old records otherwise new record will be created. IndexedDb uses primary key to identify existing record.

* In a case where you want to update particular column, you should use [update](/docs/update/index.md) api. `upsert` replace the old record completely except primary key and add a new record.
