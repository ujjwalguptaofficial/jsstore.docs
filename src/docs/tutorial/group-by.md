---
Title: "Group By"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

The Group By is used to group the result-set by one or more columns. You can also use Aggregate functions with group by just like you use in SQL.

#### Sql (Where)

```
Select * From Table_Name;
Group By
Column_Name
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    groupBy: Column_Name,
    // You can specify multiple columns at a time by giving the columns name in an array.
    // GroupBy:['column1','column2']

}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/group-by">Example</a>
    <button class="btn info btnNext">Next</button>
</p>