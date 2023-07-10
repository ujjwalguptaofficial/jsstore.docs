---
keywords: [indexeddb, join, left, inner, jsstore]
sidebar_position: 8
---

# Join

JsStore supports two joins - **inner** (by default) and **left**.

## Join between two tables

### Sql

```sql
Select * From Table1;
Inner Join Table2
On Table1.common_field = Table2.common_field
Where
Table1.Column1=some_value
And
Table2.Column1=some_another_value
```

### JsStore

```javascript
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
```

**Note :-** you can use all other options present in select query like - `where`, `skip`, `order` etc.

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20'Customers'%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%0A%20%20%20%20%7D%0A%7D)%3B">
    Example
    </a>
</p>

## Join options

join has following options -

### with

`with` is used to specify name of table to join

### on

`on` is used to specify join condition 

eg - 

```
table1.property = table2.property
```

### as

`as` is used to rename some column name in order to avoid the column match with other tables. 

e.g - If a column customerId is present in both table, then a column match error will be thrown and in this situation you can use `as` to resolve the error.

```javascript
connection.select({
    from: table1 name,
    join: {
        with: table2_name,
        on: "table1.common_field=table2.common_field",
        as: {
            customerId: 'table2_customerId'
        } 
    }
});
```

<p class="text--center">
    <a class="button button--info" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20%22Orders%22%2C%0A%20%20%20%20%20%20%20%20type%3A%20%22inner%22%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%2C%0A%20%20%20%20%20%20%20%20as%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20customerId%3A%20'cId'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)"   target="_blank">
    Example
    </a>
</p>

### where 

`where` can be used to filter the data

### order 

`order` is used for ordering data 

👉 but unlike query without join - order here is little different. You need to provide query along with table name in the form of [tablename].[columnName].

### groupBy

`groupByfor` can be used for grouping data

### aggregate 

`aggregate` can be used for aggregation of data 

---

## Join between three tables

### Sql

```sql
Select * From Table1;
Inner Join Table2
On Table1.common_field = Table2.common_field
Inner Join Table3
On Table1.some_column = Table3.some_common_column
```

### JsStore

```javascript
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
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20with%3A%20'Customers'%2C%0A%20%20%20%20%20%20%20%20on%3A%20%22Orders.customerId%3DCustomers.customerId%22%0A%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20with%3A%22Shippers%22%2C%0A%20%20%20%20%20%20%20%20on%3A%22Orders.shipperId%3DShippers.shipperId%22%0A%20%20%20%20%7D%5D%0A%7D)%3B">
    Example
    </a>
</p>