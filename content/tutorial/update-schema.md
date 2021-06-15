---
Title: "Update Database Schema"
Keywords: "change, update, schema, database, indexeddb"
Description: "how to update db schema after database is created"
---

database schema can be updated by 

* incrementing the version in database object 
* defining what to change in alter field of table.

#### Example

```
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        // 2 is database version to target
        2: {
            modify: {
                id:{
                    notNull:true
                }
            },
            add:{
                name:{
                    dataType:'string'
                }
            },
            drop:{
                count:{
                    
                }
            }
        }
    }
}
var db = {
    name: "db_name",
    tables:[tblProduct],
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

Your data remains constant. Only index specification is changed.

## What happens when Data type is changed

JsStore does not do any change in existing data. But validate for new data based on new data type.

So it is recommended to change the existing data into new datatype after db is created.

consider your old schema was - 

```
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    }
}
var db = {
    name: "db_name",
    tables:[tblProduct]
}
```

Now you want to change the datatype of count column. So your new schema is - 

```
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        2: {
            modify: {
                count:{
                    dataType:'string'
                }
            }
        }
    }
}
var db = {
    name: "db_name",
    tables:[tblProduct],
    version: 2 
}
```

now let's change db schema & convert data- 

```
var connection = new JsStore.Connection();
var created = await connection.initDb(db);

if(created){
    if(db.version===2){
        // change datatype from number to string

        var existingData = await connection.select({
            from: 'Product'
        });

        existingData = existingData.map(value=>{
            value.count = value.count.toString();
            return value;
        })

        await connection.insert({
            into: "Product",
            upsert:true,
            values:existingData
        })
    }
}
```