---
Title: "Join"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
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
var JoinLogic = {
    Table1: {
        Table: table1_name
        Column: table1.common_field
        Where: {
            Column1: some_value
        }
    },
    Join: 'inner',
    Table2: {
        Table: table2_name
        Column: table2.common_field
        Where: {
            Column1: some_another_value
        }
    }
}

Connection.select({
    From: JoinLogic,
    OnSuccess: function(results) {
        //results will contains objects of all tables at a index.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

**Note :-** you can also use - WhereIn, Skip, Order By and limit just like where has been used in the above example.

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/simple_join">Example</a>
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
var JoinLogic1 = {
    Table1: {
        Table: table1_name
        Column: common_field of table1
    },
    Join: 'inner',
    Table2: {
        Table: table2_name
        Column: common_field of table2
    },
    NextJoin: {
        Table: table1_name
        Column: some_column of table1
    };
};
var JoinLogic2 = {
    Table1: JoinLogic1
    Join: 'inner',
    Table2: {
        Table: table3_name
        Column: some_common_column of table3
    }
};
Connection.select({
    From: JoinLogic,
    OnSuccess: function(results) {
        //results will contains objects of all tables at a index.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/multiple_table_join">Example</a>
    <button class="btn info btnNext">Next</button>
</p>