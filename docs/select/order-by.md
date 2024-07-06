---
sidebar_position: 3
keywords: [order by, sort by, select, indexeddb, jsstore, sql]
---

# Order By

Order By is used to sort the data in ascending or descending order, based on any column.

## Sql

```sql
Select * from Table_Name Order by column_name sort_type;
```

## JsStore

```javascript
var results = await connection.select({
    from: "Table_Name",
    order: {
        by: column_name,
        type: sort_type //supprted sort type is - asc,desc
    }
});
//results will be array of objects.
console.log(results);
```

## Option

Order has following options -

* by: string; // sorting column name

* type: string; // sorting type - asc/desc, default is asc

* idbSorting: boolean // whether to do sorting by indexeddb or by jsstore, default - true


<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%20%20%20%20type%3A%20%22desc%22%0A%20%20%20%20%7D%0A%7D)%3B%0A">Example</a>
</p>

## By multiple column

For ordering by multiple column - you need to provide all order object value in an array

```javascript
var results = await connection.select({
    from: "Table_Name",
    order: [{
        by: column_name1,
        type: sort_type //supprted sort type is - asc,desc
    },
    {
        by: column_name2,
        type: sort_type //supprted sort type is - asc,desc
    }]
});
//results will be array of objects.
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20order%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'city'%0A%20%20%20%20%7D%5D%0A%7D)%3B">Example</a>
</p>

## In join

Unlike query without join, order here is little different. You need to provide query along with table name in the form of `[tablename].[columnName]` 

```javascript
select({
    from: "Student",
    join: {
        with: "StudentDetail",
        on: "Student.Name=StudentDetail.Name"
    },
    order: { by: 'Student.Order', type: 'asc' }
})
```
<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Orders'%2C%0A%20%20%20%20join%3A%20%7B%0A%20%20%20%20%20%20%20%20with%3A%20'OrderDetails'%2C%0A%20%20%20%20%20%20%20%20on%3A%20'Orders.orderId%3DOrderDetails.orderId'%0A%20%20%20%20%7D%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'OrderDetails.orderId'%0A%20%20%20%20%7D%0A%7D)">Example</a>
</p>
