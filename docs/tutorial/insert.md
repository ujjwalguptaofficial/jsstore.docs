---
Title: "Insert"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

The Insert api is used to insert new records in a table.

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

connection.insert({
    into: "TABLE_NAME",
    values: [Value], //you can insert multiple values at a time
}).then(function(rowsInserted) {
    if (rowsInserted > 0) {
        alert('Successfully Added');
    }
}).catch(function(error) {
    alert(error.message);
});
```

Insert api has following options -

```
{
    into : string // table name

    values: Array // values to insert

    return?: Boolean // Return the inserted record. Default value is false.This is useful in case - you want the autoincrement column value.

    skipDataCheck?: Boolean // Whether to check or not supplied data. Default value is false. If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time.

    upsert?: boolean; // Update data if exist otherwise insert 
}
```

**Note :-** You can also insert column, which you have not defined while creating Db. JsStore preserves the NoSql functionality of IndexedDb.

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/insert">Example</a>
    <button class="btn info btnNext">Next</button>
</p>