---
Title: "DataBase"
Keywords: "database, initiate, create database, indexeddb, jsstore"
Description: "Database in JsStore is an object which contains name of database and list of tables."
---

In order to create the database in indexeddb, you need to perform two steps - 

### 1. Create database schema

Database schema is an object which contains name of database and list of tables.

#### Syntax :- 

```
var database = {
    name: "database name",
    tables: [table1, table2, table3]
}
```

#### Example :- 

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

### 2. Call `initDb` api with database schema 

#### Example :-

```
// initiate jsstore connection
var connection = new JsStore.Connection();

// step1 - create database schema
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

// step 2
var isDbCreated = await connection.initDb(db);
// isDbCreated will be true when database will be initiated for first time

if(isDbCreated){
    alert('Db Created & connection is opened');
}
else{
    alert('Connection is opened');
}

// since connection is opened now, you can call apis.
```

<p class="text-center">
    <a target="_blank" class="btn info" href="https://github.com/ujjwalguptaofficial/jsstore-examples/blob/93a178ec8926151b144b064841c20647366d125f/simple_example/scripts/index.js#L12">Example</a>
</p>

