---
sidebar_position: 14
keywords: [multi entry, option, column, indexeddb, jsstore]
---

# Multi Entry

MultiEntry allows you to add indexing on array column.

consider these values in a table

```javascript
var values = [
    {
        name: "Ray",
        tags: ["apple", "banana", "beer"]
    },
    {
        name: "Scott",
        tags: ["beer"]
    }, 
    {
        name: "Marc",
        tags: ["mongo", "jenkins","jsstore"]
    }
];
```

now you want to fetch records whose tags is 'mongo'. So a simple select query will be - 

```javascript
const results = await connection.select({
    from: 'people',
    where: {
        tags: 'mongo'
    }
});
```

Here results will be always empty array, because indexeddb does not know anything about 'mongo' since it has stored an array value.

In order to solve this problem - IndexedDb provides an option 'multi entry'.

> MultiEntry lets you search inside a column with array values. MultiEntry creates index for each item in array value.

In this case - you will have to enable `multiEntry` option for column "tags".

Here is an example database schema -

```javascript
var people = {
    name: 'people',
    columns: {
        name: {
            unique: true,
            dataType: JsStore.DATA_TYPE.String
        },
        tags: {
            dataType: JsStore.DATA_TYPE.Array,
            multiEntry: true
        }
    }
};

var dataBase = {
    name: 'MultiEntryTest',
    tables: [people]
};
```

**Note :-** `multiEntry` will only work for plain values i.e string, number but not for compound types like json data or array. Because indexedDb provides one level indexing only.