---
Title: "DataBase"
Keywords: "database, api, query, indexeddb, jsstore"
Last Updated : "09/05/2018"
---

Database in JsStore contains name of database and list of tables.

### Syntax :- 

```
var database = {
    name: "database name",
    tables: [table1, table2, table3]
}
```

### Example :- 

```
var tblProduct = {
    name: 'Product',
    columns: {
        // Here "Id" is name of column 
        Id:{ primaryKey: true, autoIncrement: true },
        ItemName:  { notNull: true, dataType: "string" },
        Price:  { notNull: true, dataType: "number" },
        Quantity : { notNull: true, dataType: "number" }
    }
};

var tblOrder = {
    name: 'Order',
    columns: {
        // Here "OrderId" is name of column 
        OrderId:{ primaryKey: true, autoIncrement: true }
    }
};

var db = {
      name: dbName,
      tables: [tblProduct, tblOrder]
}
```

<br>If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples) or our [medium page](https://medium.com/jsstore) 

<p class="margin-top-40px center-align">
      <button class="btn info btnNext">Next</button>
</p>