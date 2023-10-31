---
keywords: [migrate, v3, v4, indexeddb, jsstore]
sidebar_position: 22
---

# Migrating from v3 to v4

> v4 now suports multiple database feature, which was lacking in earlier version of jsstore. In order to do that some big changes has been done in v4.

In order to migrate from v3 to v4 - Increase db version greater than current version. 

```javascript
var dbSchema = {
    name:"Demo",
    version: 2 // previous version was 1,
    tables:[{
        name:'Products',
        columns:{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }
    }]
}

var connection = new JsStore.Connection();
connection.initDb(dbSchema);
```

you can find your current db version in indexedDb section of browser development tools.

<img style={{maxWidth:"100%"}} src={require("/img/version_screenshot.png").default} />

👉 Note:- This step will recreate database & in turn all your data will be cleared. 

If you want to keep your data, you can fetch data before upgrading then insert it after upgrading. In order to do that you will have to keep two db schema.

```javascript
var dbSchema = {
    name:"Demo",
    version: 1 ,
    tables:[{
        name:'Products',
        columns:{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }
    }]
};

var newDbSchema = {
    name:"Demo",
    version: 2 // previous version was 1,
    tables:[{
        name:'Products',
        columns:{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }
    }]
}

var connection = new JsStore.Connection();
var isDbCreated = connection.initDb(dbSchema);

var tablesData = {};

// if db is opened
if(!isDbCreated){

    // select from table prodcuts
    const results =  await connection.select({
        from:'Products'
    });
    tablesData['Products'] = results;
}

isDbCreated = connection.initDb(newDbSchema);

if(isDbCreated){
    for(const key in tablesData){
        connection.insert({
            into:key,
            values: tablesData[key]
        })
    }
}
```

---

👉 Another simple way to upgrade db & save your data is - to keep two dbs. So you create your schema with new db name and then after new db is created, fetch data from old db.

```javascript
var dbSchema = {
    name:"Demo",
    tables:[{
        name:'Products',
        columns:{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }
    }]
};

var newDbSchema = {
    name:"DemoV2",
    tables:[{
        name:'Products',
        columns:{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }
    }]
}

var connection = new JsStore.Connection();
var isDbCreated = connection.initDb(newDbSchema);

// if db is created
if(isDbCreated){

    var oldDbConnection = new JsStore.Connection();
    var isOldDbCreated = oldDbConnection.initDb(dbSchema);

    if(!isOldDbCreated){ // when db is opened

      // select from old db
        const results =  await oldDbConnection.select({
            from:'Products'
        });

     // insert into new db
        connection.insert({
            into:key,
            values: results
        })

      // now i don't need old db, so drop db

        oldDbConnection.dropDb();

    }    
}

```


