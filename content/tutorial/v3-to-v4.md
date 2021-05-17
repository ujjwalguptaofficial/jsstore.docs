---
Title: "Migrating from v2 to v3"
Keywords: "migrate, v2, v3, indexeddb, jsstore"
Description: "migrating from v2 to v3"
---

<p class="highlight">
v4 now suports multiple database feature, which was lacking in earlier version of jsstore. In order to do that some big changes has been done in v4.
</p>

In order to migrate from v3 to v4 - Increase db version greater than current version. 

```
var dbSchema = {
    name:"Demo",
    version: 2 // previous version was 1,
    tables:[{
        name:'Products',
        columns:[{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }]
    }]
}

var connection = new JsStore.Connection();
connection.initDb(dbSchema);
```

you can find your current db version in indexedDb section of browser development tools.

<img style="max-width:100%;" src="/img/version_screenshot.png"/>

👉 Note:- This step will recreate database & in turn all your data will be cleared. 

If you want to keep your data, you can fetch data before upgrading then insert it after upgrading. In order to do that you will have to keep two db schema.

```
var dbSchema = {
    name:"Demo",
    version: 1 ,
    tables:[{
        name:'Products',
        columns:[{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }]
    }]
};

var newDbSchema = {
    name:"Demo",
    version: 2 // previous version was 1,
    tables:[{
        name:'Products',
        columns:[{
            id: {
                autoIncrement:true,
                primaryKey:true
            }
        }]
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
        insert({
            into:key,
            values: tablesData[key]
        })
    }
}
```





