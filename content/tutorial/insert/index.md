---
Title: "Insert"
Keywords: "insert, api, upsert, indexeddb, jsstore"
Description: "insert data in indexedb"
---

`insert` api is used to insert new records in a table.

#### Sql

```
INSERT INTO TABLE_NAME
(column1, column2, column3,...columnN)
VALUES
(value1, value2, value3,...valueN);
```

#### JsStore

```
var value = {
    column1: value1,
    column2: value2,
    column3: value3,
    ...
    columnN: valueN
};

var noOfRowsInserted = await connection.insert({
    into: "TABLE_NAME",
    values: [Value], //you can insert multiple values at a time
});
if (noOfRowsInserted > 0) {
    alert('Successfully Added');
}
```

<br>**Note :-** You can also insert data for a column, which you have not defined in db schema. JsStore preserves the NoSql functionality of IndexedDb.

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=insert(%7B%0A%20%20%20%20into%3A%20%22Customers%22%2C%0A%20%20%20%20values%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20customerName%3A%20'ujjwal%20gupta'%2C%0A%20%20%20%20%20%20%20%20contactName%3A%20'ujjwal'%2C%0A%20%20%20%20%20%20%20%20address%3A%20'bhubaneswar%20odisha'%2C%0A%20%20%20%20%20%20%20%20city%3A%20'bhubaneswar'%2C%0A%20%20%20%20%20%20%20%20postalCode%3A%20'12345'%2C%0A%20%20%20%20%20%20%20%20country%3A%20'India'%0A%20%20%20%20%7D%5D%0A%7D)%3B%0A">Example</a>
</p>

<div class="margin-top-30px top-border mb-20px"></div>
**insert** api has following options -

* into : string // table name

* values: Array // values to insert

* return?: Boolean // Return the inserted record. Default value is false.This is useful in case - you want the autoincrement column value.

* skipDataCheck?: Boolean // Whether to check or not supplied data. Default value is false. If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time.

* <a href="/tutorial/insert/upsert">upsert?</a>: boolean; // Update data if exist otherwise insert . Default value is false