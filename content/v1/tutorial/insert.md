---
Title: "Insert"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Lets compare sql query with JsStore. It will help you to think in Sql and do in Js.

#### Sql

```
INSERT INTO TABLE_NAME
(column1, column2, column3,...columnN)
VALUES
(value1, value2, value3,...valueN);
```

#### JsStore

```
var Value = {
    column1: value1
    column2: value2
    column3: value3
        ...
    columnN: valueN
};

Connection.insert({
    Into: "TABLE_NAME",
    Values: [Value], //you can insert multiple values at a time
    OnSuccess: function(rowsAffected) {
        if (rowsAffected > 0) {
            alert('Successfully Added');
        }
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

Insert api has following options -

```
{
    Values: Array // values to insert
    Return: Boolean // Return the inserted record. Default value is false.This is useful in case - you want the autoincrement column value.
    SkipDataCheck: Boolean // Whether to check or not supplied data. Default value is false. If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time.
}
```

**Note :-** You can also insert column, which you have not defined while creating Db. JsStore preserves the NoSql functionality of IndexedDb.

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/insert">Example</a>
    <button class="btn info btnNext">Next</button>
</p>