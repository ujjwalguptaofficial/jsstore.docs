---
Title: "Bulk Insert"
Keywords: "bulk insert, api, query, indexeddb, jsstore"
Description: "bulk insert is used to insert data very fastly in indexeddb."
---

Bulk insert is a special type of api for inserting large amount of data. It is much faster compared to insert api as it does not check and return any thing.

**Few Points :-**

*   Columns options like - AutoIncrement, default etc. wont work.
*   It does not guarantee that whole data has been inserted successfully or not.
*   You should use this api - when you have very large amount of data (thousands of data) and want to insert into indexedDB.
*   If you want to guarantee for successful of data insertion - then you should use insert with SkipDataCheck 'true'.

```
var value = {
    column1: value1
    column2: value2
    column3: value3
        ...
    columnN: valueN
};

connection.bulkInsert({
    into: "TABLE_NAME",
    values: [value] //you can insert multiple values at a time
}).then(function() {
    alert('Successfully Added');
}).catch(function(error) {
    console.log(error);
});
```

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>