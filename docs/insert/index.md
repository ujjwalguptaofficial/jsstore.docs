---
sidebar_position: 5
keywords: [insert, api, upsert, indexeddb, jsstore, sql, query]
---

# Insert

`insert` api is used to insert new records in a table.

### Sql

```sql
INSERT INTO TABLE_NAME
(column1, column2, column3,...columnN)
VALUES
(value1, value2, value3,...valueN);
```

### JsStore

```javascript
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

**👉 Note :-** You can also insert data for a column, which you have not defined in db schema. JsStore preserves the NoSql functionality of IndexedDb.

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=insert(%7B%0A%20%20%20%20into%3A%20%22Customers%22%2C%0A%20%20%20%20values%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20customerName%3A%20'ujjwal%20gupta'%2C%0A%20%20%20%20%20%20%20%20contactName%3A%20'ujjwal'%2C%0A%20%20%20%20%20%20%20%20address%3A%20'bhubaneswar%20odisha'%2C%0A%20%20%20%20%20%20%20%20city%3A%20'bhubaneswar'%2C%0A%20%20%20%20%20%20%20%20postalCode%3A%20'12345'%2C%0A%20%20%20%20%20%20%20%20country%3A%20'India'%0A%20%20%20%20%7D%5D%0A%7D)%3B%0A">Example</a>
</p>

## Options

**insert** api has following options -

### into

into is used to specify name of table

```javascript
insert({
    into:'Products'
})
```

### values

values is used to specify data to insert. It takes array of data.

```javascript
insert({
    into:'Products',
    values:[data1,data2]
})
```

### return

return is a optional & type of boolean field. It is used to get the inserted data. This is useful in case - you want the autoincrement column value.

```javascript
insert({
    into:'Products',
    values:[data1,data2],
    return: true
})
```

Default value of return is false.

### upsert

Update data if exist otherwise insert . Default value is false.

[Read upsert doc](/docs/insert/upsert.md).

### validation

Whether to validate data or not. By default value is true. This can be used to speed up insert query.

```javascript
insert({
    into:'Products',
    values:[data1,data2],
    validation: false
})
```

👉 when validation is false - it only checks and update : `autoincrement` and `default` value.

### skipDataCheck

Do not check or change anything in data. By default value is false. 

If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time and doesn't have any constraint on schema.

```javascript
insert({
    into:'Products',
    values:[data1,data2],
    skipDataCheck: true
})
```

> Difference between validation & skipDataCheck is - validation generates autoIncrement field for autoIncrement column and default value but skipDataCheck do not change anything in data.


👉 Note:- Do not use `skipDataCheck` in case you have autoincrement field, otherwise your autoincrement data might not get sync with your inserted data and can create problems.

### ignore

ignore records when error occurs. This is helpful in case when you are recieving some random data from users or any source.

e.g - consider you have 5 rows and 3 of them are not valid. It can be anything like - null value, data type does not match, existing value of primary key etc.

then 2 rows will be inserted & three will be ignored. So in result you will get 2.

```javascript
insert({
    into:'Products',
    values:[datas],
    ignore: true
})
```

By default ignore value is false. So when any error occurs you will get error & whole transaction is aborted.
