---
Title: "Update Schema"
Keywords: "change, update, schema, database, indexeddb"
Description: "how to update db schema after database is created"
---

database schema can be updated by incrementing the version in database object.

#### Example

```
var db = {
    name: "db_name",
    tables:[],
    version: 2 //Default version is 1.
}
```

## How to get current db version
 
you can find your current db version in indexedDb section of browser development tools.

<img style="max-width:100%;" src="/img/version_screenshot.png"/>

## What is the need of db version
<br>
IndexedDb is a database technology for browser which means if you do some changes in your web application , any one who use your web app should get latest changes including database changes. 

Browser decides to change db schema when indexedb is initiated with db version greater than current db version.

## What happens to data when schema is changed

All table except one with `upgrade` value false are recreated and thus all data in receated table is deleted. 

So upgrade can be used to preserve the data inside table.

```
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
    },
    upgrade:false // do not change schema of this table
};

var db = {
    name: "db_name",
    tables:[],
    version: 2 //Default version is 1.
}
```

### How do i preserve my data for table which has schema changes

Before calling `initDb` api with new db schema changes, select all data from a table and then insert it after the connection is initiated.

e.g - 

```
async function changeDbSchema() {
    var allData = await connection.select({
        from:`{tableName}`
    });

    var isDbCreated = await connection.initDb(newDbSchema);
    if(isDbCreated){
        await connection.insert({
            into:`{tableName}`
        })
    }
}

// should be called after connection is initiated with old schema
changeDbSchema();

```
