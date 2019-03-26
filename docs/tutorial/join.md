---
Title: "Join"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

JsStore supports three joins - Inner, Left, Right.

#### Sql (inner join between two tables)

```
Select * From Table1;
Inner Join Table2
On Table1.common_field = Table2.common_field
Where
Table1.Column1=some_value
And
Table2.Column1=some_another_value
```

#### JsStore

```
var joinLogic = {
    table1: {
        table: table1_name,
        column: table1.common_field,
        where: {
            Column1: some_value
        }
    },
    join: 'inner',
    table2: {
        table: table2_name,
        column: table2.common_field,
        where: {
            Column1: some_another_value
        }
    }
}

connection.select({
    From: joinLogic
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

**Note :-** you can also use - WhereIn, Skip, Order By and limit just like where has been used in the above example.

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/simple-join">Example</a>
    <button class="btn info btnNext">Next</button>
</p>

#### Sql (inner join between three tables)

```
Select * From Table1;
Inner Join Table2
On Table1.common_field = Table2.common_field
Inner Join Table3
On Table1.some_column = Table3.some_common_column
```

#### JsStore

```
var joinLogic1 = {
    table1: {
        table: table1_name,
        column: common_field of table1
    },
    join: 'inner',
    table2: {
        table: table2_name,
        column: common_field of table2
    },
    nextJoin: {
        table: table1_name,
        column: some_column of table1
    };
};
var joinLogic2 = {
    table1: joinLogic1
    join: 'inner',
    table2: {
        table: table3_name,
        column: some_common_column of table3
    }
};
Connection.select({
    From: joinLogic2
}).then(function(results) {
    //results will contains objects of all tables at a index.
    console.log(results);

}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/multiple-table-join">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
