---
Title: "Table"
Keywords: "column, api, query, indexeddb, jsstore"
Created Date: "09/05/2018"
Last Updated : "10/05/2018"
---

Columns in jsstore is an object where column name is key & column options are values.

```
var columns = {
    [column name]: {} 
}
```

Let's see an example - 

```
var columns = {
    Id:{ primaryKey: true, autoIncrement: true },
    ItemName:  { notNull: true, dataType: "string" },
    Price:  { notNull: true, dataType: "number" },
    Quantity : { notNull: true, dataType: "number" }
}
```

A column has following properties -

* primaryKey: boolean, // declare this column as primary key (optional)
    // We strongly recommend to create the primary keys (optional)

* notNull: boolean, // ensure this column value should not be null (optional)

* dataType: JsStore.DATA_TYPE, // datatype of this column (optional)

**Note:-** do not use data type boolean, if you want to filter on that column. For more info,check out - https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792

* autoIncrement: boolean, // automatically increment value (optional)

* unique: boolean // This column will have unique value (optional)

* default: any, // Provides a default value for a column when none is specified (optional)

* multiEntry: boolean, // Provides support to search inside array values (optional)

* enableSearch: boolean - default value is true // Turn on/off search for this column (optional)

* keyPath : string[] - allows you to use multiple indexing // optional 

For all data types see this link - [DataType](/tutorial/enums/)
