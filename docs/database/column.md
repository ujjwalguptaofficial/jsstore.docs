---
keywords: [column, api, query, indexeddb, jsstore]
---

# Column

Column in jsstore is an object where column name is key & column options are values.

```
var columns = {
    [column name]: {} 
}
```

Let's see an example - 

```javascript
var columns = {
    Id:{ primaryKey: true, autoIncrement: true },
    ItemName:  { notNull: true, dataType: "string" },
    Price:  { notNull: true, dataType: "number" },
    Quantity : { notNull: true, dataType: "number" }
}
```

## Options

Column has following options -

* primaryKey: boolean, // declare this column as primary key (optional)

* notNull: boolean, // ensure this column value should not be null (optional)

* dataType: JsStore.DATA_TYPE, // datatype of this column (optional)

For more info about data type, see this link - [DataType](/docs/database/data-type/)

* autoIncrement: boolean, // automatically increment value (optional)

* unique: boolean // This column will have unique value (optional)

* default: any, // Provides a default value for a column when none is specified (optional)

* [multiEntry](/docs/multi-entry.md): boolean, // Provides support to search inside array values (optional)

* enableSearch: boolean - default value is true // Turn on/off search for this column (optional)

* [keyPath](/docs/keypath.md) : string[] - allows you to use multiple indexing // optional 

