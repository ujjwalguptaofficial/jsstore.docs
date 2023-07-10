---
sidebar_position: 17
keywords: [change, update, schema, database, alter]
---

# Update Database Schema
Database schema can be updated by incrementing the version in database object. 

👉 Let's see some usecases

## Add new table

Let's say your schema looks like this - 

```javascript
var tblProduct = {
    name: 'Product',
        columns: {
            id:{ primaryKey: true, autoIncrement: true },
            price:{
                dataType:'number'
            },
            name:{
                dataType:'string'
            }
        }
    }
}
var db = {
    name: "db_name",
    tables:[tblProduct],
}
```

now you need to add another table `Customer`-

```javascript
var tblCustomer = {
    name: 'Customer',
        columns: {
            id:{ primaryKey: true, autoIncrement: true },
            name:{
                dataType:'string'
            },
            country:{
                dataType:'string'
            }
        }
    }
}
```

You need to add the table into the tables array and update the database version -

```javascript
var db = {
    name: "db_name",
    tables: [tblProduct, tblCustomer],
    version: 2
}
```

## Alter existing table 

You can use **alter** option in the schema to `add`, `modify` and `drop` column from existing table. You need to define what to change in alter field of table.

Let's say your schema looks like this - 

```javascript
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
};
var db = {
    name: "db_name",
    tables: [tblProduct]
}
```

### Add column

Let's add a column `name` for the version 2 of the database - 

```javascript
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        // for version 2
        2: {
            add:{
                name:{
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

### Modify 

Let's say we want to add `notNull` to the column `name`. 

```javascript
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        // for version 2
        2: {
            add:{
                name:{
                    dataType:'string'
                }
            }
        },
        3:{
            modify:{
                name:{
                    notNull:true
                }
            }
        }
    }
}
var db = {
    name: "db_name",
    tables:[tblProduct],
    version: 3
}
```

### Drop

Drop can be used to drop a column from existing table.

Let's say we want to drop the column `count`

```javascript
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        // for version 2
        2: {
            add:{
                name:{
                    dataType:'string'
                }
            }
        },
        3:{
            modify:{
                name:{
                    notNull:true
                }
            }
        },
        4:{
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
    version: 4
}
```

Here is an <a href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/change-db-schema" target="_blank">example</a> project.

## How to get current db version
 
you can find your current db version in indexedDb section of browser development tools.

<img style={{maxWidth:"100%"}} src={require("/static/img/version_screenshot.png").default} />

## What is the need of db version

IndexedDb is a database technology for browser which means if you do some changes in your web application , any one who use your web app should get latest changes including database changes. 

Browser decides to change db schema when indexedb is initiated with db version greater than current db version.

## What happens to data when schema is changed

Your data remains constant. Only index specification is changed.

## What happens when Data type is changed

JsStore does not do any change in existing data. But validate for new data based on new data type.

So it is recommended to change the existing data into new datatype after db is created.

consider your old schema was - 

```javascript
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

```javascript
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

```javascript
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