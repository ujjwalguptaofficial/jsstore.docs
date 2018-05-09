---
Title: "Order By"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Order By is used to sort the data in ascending or descending order, based on any column.

#### Sql

```
Select * from Table\_Name Order by column\_name sort_type;
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Order: {
        By: column_name,
        Type: sort_type //supprted sort type is - asc,desc
    },
    OnSuccess: function(results) {
        //results will be array of objects.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```
