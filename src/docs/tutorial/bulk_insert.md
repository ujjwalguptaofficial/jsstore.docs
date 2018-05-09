---
Title: "Bulk Insert"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Bulk insert is a special type of api for inserting large amount of data. It is much faster compared to insert api as it does not check and return any thing.

**Few Points :-**

*   Columns options like - AutoIncrement, default etc. wont work.
*   It does not guarantee that whole data has been inserted successfully or not.
*   You should use this api - when you have very large amount of data (thousands of data) and want to insert into indexedDB.
*   If you want to guarantee for successful of data insertion - then you should use insert with SkipDataCheck 'true'.

```
var Value = {
    column1: value1
    column2: value2
    column3: value3
        ...
    columnN: valueN
};

Connection.bulkInsert({
    Into: "TABLE_NAME",
    Values: [Value], //you can insert multiple values at a time
    OnSuccess: function() {
        alert('Successfully Added');
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/bulk_insert">Example</a>
    <button class="btn info btnNext">Next</button>
</p>