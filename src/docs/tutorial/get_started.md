---
Title: "Get Started"
Created Date: "26/04/2018"
Last Updated : "26/04/2018"
---

In this tutorial we will learn how to do crud operation in jsstore.

Here is the working demo of below tutorial -

<iframe src="https://jsfiddle.net/ujjwalguptaofficial/w850g25g/14/embedded/" id="JSFEMB_17647" width="100%" height="3952.400146484375" frameborder="0" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups"></iframe>

#### Installation

The simplest way to install jsstore is by using cdn. But since JsStore needs to be executed inside web worker for maximum performance and browsers does not allow cdn script for web worker. So the best way will be to download the script directly and use it.

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
var DbName ='JsStore_Demo';
function getDbSchema() {
  var TblProduct = {
    Name: 'Product',
    Columns: [
      {
          Name: 'Id',
          PrimaryKey: true,
          AutoIncrement: true
      }, 
      {
          Name: 'ItemName',
          NotNull: true,
          DataType: JsStore.Data_Type.String
      }, 
      {
          Name: 'Price',
          NotNull: true,
          DataType: JsStore.Data_Type.Number
      }, 
      {
          Name: 'Quantity',
          NotNull: true,
          DataType: JsStore.Data_Type.Number
      }
    ]
  };
  var Db = {
      Name: DbName,
      Tables: [TblProduct]
  }
  return Db;
}
```
As written in the code, you can define the constraints like autoincrement, datatype, default, notnull as you can do in SQL.

Now we need to create the database in indexeddb. So, lets create the database.

```
var Connection = new JsStore.Instance();
function initJsStore() {
  JsStore.isDbExist(DbName, function(isExist) {
    if (isExist) {
      Connection.openDb(DbName);
    } else {
      var Database = getDbSchema();
      Connection.createDb(Database);
    }
  }, function(err) {
    console.error(err);
  })
}
```

In the above code -

* Line 1 - Storing the JsStore connection instance in a variable 'Connection'.
* Line 2 - Declared a function initJsStore which will initiate the jsstore. Basically this will create database if it does not exist or open if it exist.


**Note :-** The connection object will be used to execute the further query. So we dont need to initiate it multiple times.

#### Inserting data

JsStore provides insert API for inserting data.

```
var Value = {
  ItemName:'Blue Jeans',
  Price: 2000,
  Quantity:1000
}
//since Id is autoincrement column, so the value will be automatically generated.
Connection.insert({
  Into: 'Product',
  Values: [Value]
  OnSuccess: function(rowsInserted) {
    if (rowsInserted > 0) {
      alert('successfully added');
    }
  },
  OnError: function(err) {
    console.log(err);
    alert(err.Message);
  }
});

```
  
#### Read data

JsStore provides select API for reading data. Lets say I want to retrieve the record which contains Id 5.

```
Connection.select({
    From: 'Product',
    Where: {
      Id: 5
    },
    OnSuccess: function(results) {
      alert(results.length + 'record found');
    },
    OnError: function(err) {
      console.log(err);
      alert(err.Message);
    }
});
```

You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc.

#### Updating data

Lets say I want to update the product Quantity to 2000 which contains the item name - 'black'.

```
Connection.update({
  In: 'Product',
  Where: {
    ItemName: {
      Like:'%black%'
    }
  },
  Set: {
    Quantity: 2000
  },
  OnSuccess: function(rowsUpdated) {
    alert(rowsUpdated + ' rows updated')
  },
    OnError: function(err) {
      console.log(err);
      alert(err.Message);
    }
});
```

#### Delete data

Lets say I want to delete the product which contains the id - 10.

```
Connection.delete({
    From: 'Product',
    Where: {
      Id: 10
    },
    OnSuccess: function(rowsDeleted) {
      alert(rowsDeleted + ' record deleted');
    },
    OnError: function(err) {
      console.log(err);
      alert(err.Message);
    }
});
```
    
We hope - you have understood the above article. Now lets make something awesome.

#### * Check it out other articles -

* [Using JsStore in Angular5](http://http://ujjwalguptaofficial.blogspot.in/2017/10/angular4-crud-operation-in-indexeddb.html)

<style>
    iframe {
        height: 300px;
    }
</style>
