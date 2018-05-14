---
Title: "Get Started"
Created Date: "09/05/2018"
Last Updated : "12/05/2018"
---

In this get started tutorial we will learn how to do crud operation in jsstore.

#### Installation

The simplest way to install jsstore is by using cdn. But since JsStore needs to be executed inside web worker and browsers does not allow cdn script for web worker. So the best way will be to download the script directly and use it.

You can download the script from [github](https://github.com/ujjwalguptaofficial/JsStore "jsstore github link") or from [npm](https://www.npmjs.com/package/jsstore "jsstore npm link")

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Crud Demo using jsstore</title>
    <script src="jsstore.min.js"></script>
</head>
<body>
<h4>We have included JsStore in this html code.</h4>
</body>
</html>

```

For more about installation check out the [installation](/tutorial/installation)

#### Creating Database

JsStore follows SQL approach to create database - A database is consist of tables and a table is consist of columns.

Lets see how to create a database schema in JsStore.

```
var dbName ='JsStore_Demo';
function getDbSchema() {
  var tblProduct = {
    name: 'Product',
    columns: [
      {
          name: 'Id',
          primaryKey: true,
          autoIncrement: true
      }, 
      {
          name: 'ItemName',
          notNull: true,
          dataType: JsStore.DATA_TYPE.String
      }, 
      {
          name: 'Price',
          notNull: true,
          dataType: JsStore.DATA_TYPE.Number
      }, 
      {
          Name: 'Quantity',
          NotNull: true,
          DataType: JsStore.DATA_TYPE.Number
      }
    ]
  };
  var db = {
      name: dbName,
      tables: [tblProduct]
  }
  return db;
}
```
As written in the code, you can define the constraints like autoincrement, datatype, default, notnull as you can do in SQL.

Now we need to create the database in indexeddb. So, lets create the database.

```

var connection = new JsStore.Instance(new Worker('jsstore.worker.js'));
function initJsStore() {
    connection.isDbExist(DbName).then(function(isExist) {
        if (isExist) {
            connection.openDb(DbName);
        } else {
            var database = getDbSchema();
            connection.createDb(database);
        }
    }).catch(function(err) {
        console.error(err);
    })
}

```

In the above code -

* Line 1 - Storing the JsStore connection instance in a variable 'connection'.
* Line 2 - Declared a function initJsStore which will initiate the jsstore. Basically this will create database if it does not exist or open if it exist.


**Note :-** The connection object will be used to execute the further query. So we dont need to initiate it multiple times.

#### Inserting data

JsStore provides insert API for inserting data.

```
var value = {
    itemName: 'Blue Jeans',
    price: 2000,
    quantity: 1000
}

//since Id is autoincrement column, so the value will be automatically generated.
connection.insert({
    into: 'Product',
    values: [value]
}).then(function(rowsInserted) {
    if (rowsInserted > 0) {
        alert('successfully added');
    }
}).catch(function(err) {
    console.log(err);
    alert(err.message);
});

```
  
#### Read data

JsStore provides select API for reading data. Lets say I want to retrieve the record which contains Id 5.

```
connection.select({
    from: 'Product',
    where: {
        id: 5
    }
}).then(function(results) {
    alert(results.length + 'record found');
}).catch(function(err) {
    console.log(err);
    alert(err.message);
});
```

You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc.

#### Updating data

Lets say I want to update the product Quantity to 2000 which contains the item name - 'black'.

```
connection.update({ 
    in: 'Product',
    where: {
        itemName: {
            like: '%black%'
        }
    },
    set: {
        quantity: 2000
    }
}).then(function(rowsUpdated) {
    alert(rowsUpdated + ' rows updated');
}).catch(function(err) {
    console.log(err);
});
```

#### Remove data

Lets say I want to delete the product which contains the id - 10.

```
connection.remove({
    from: 'Product',
    where: {
        id: 10
    }
}).then(function(rowsDeleted) {
    alert(rowsDeleted + ' record deleted');
}).catch(function(err) {
    console.log(err);
});
```
    
We hope - you have understood the above article. Now lets make something awesome.

#### * Check it out some examples for more understanding -

* [Crud implementation](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/Simple%20Example)
* [Using jsstore in typescript](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/TypeScript%20Example)
* [Building an indexeddb app with webpack](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack)
* [Using react and webpack to store data in indexeddb](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/react)
* [Using jsstore in angular](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/angular)

<style>
    iframe {
        height: 300px;
    }
</style>
