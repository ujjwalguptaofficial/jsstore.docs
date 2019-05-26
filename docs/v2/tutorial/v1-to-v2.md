---
Title: "Migrating from v1 to v2"
Keywords: "migrate, v1, v2, indexeddb, jsstore"
Created Date: "13/05/2018"
Last Updated : "13/05/2018"
---

Migrating from V1 to V2 is very easy -

1. JsStore V2 now follows standard javascript coding style while v1 was not - so you need to change codes as per V2.

    e.g - 
    select code in V1 was like this :

    ```
    select({
        From:'table_name',
        Where:{
            Column_Name:'Value'
        }
    })
    ```

    Same code in v2 will be little change : 

    ```
    select({
        from:'table_name',
        where:{
            Column_Name:'Value'
        }
    })
    ```
    As you can see - 'From' is changed to 'from' and 'Where' is changed to 'where'. To make it fast you can use replace function of your edior.

2. Copy and call below code before you call any jsstore code - 

    Copy this code
    ```
     // dbName- Name of database
    // dbSchema - database schema in V2 Format
    function setDbSchemaForV2(dbName, dbSchema) {
        return new Promise(function(resolve, reject) {
            connection.getDbSchema(dbName).then(function(result) {
                // In JsStore V1 db was stored in different structure
                if (result._name) {
                    connection.set("JsStore_" + dbName + "_Schema", dbSchema).then(function() {
                        resolve();
                    }).catch(function(err) {
                        reject(err)
                    })
                } else {
                    resolve();
                }
            }).catch(function(err) {
                reject(err)
            })
        });
    }
    ```

    Call first this code before any jsstore code

    ```
    setDbSchemaForV2(dbName,dbSchema).then(function(){

    }).catch(function(err){

    })
    ```

That's all you need to do. Now every thing should work as normal.