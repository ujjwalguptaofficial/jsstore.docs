---
Title: "Join"
Keywords: "indexeddb, join, left, inner, jsstore"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

JsStore supports two joins - Inner & Left.

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
var results = await connection.select({
    from: table1 name,
    where: {
        [column name]: some value
    },
    join: {
        with: table2_name,
        on: "table1.common_field=table2.common_field",
        type:"inner",
        where: {
            [column name]: some value
        }
    }
});
console.log(results);
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
var results = await connection.select({
    from: table1_name,
    join:[{
        with:table2_name,
        on: "table1.common_field=table2.common_field"
    },{
        with:table3_name,
        on: "table1.common_field=table3.common_field"
    }]
});
console.log(results);
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/multiple-table-join">Example</a>
    <button class="btn info btnNext">Next</button>
</p>
