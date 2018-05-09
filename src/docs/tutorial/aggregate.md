---
Title: "Aggregate Functions"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore supports following aggregate functions : -

*   **count :** Returns the number of rows of specified column.
*   **sum :** Returns the total sum of numeric column.
*   **avg :** Returns the average value of numeric column.
*   **max :** Returns the maximum value of specified column.
*   **min :** Returns the minimum value of specified column.

#### Sql

```
Select min(Column\_Name) From Table\_Name;
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    aggregate: {
        Min: Column_Name,
        // You can specify multiple columns at a time by giving the columns name in an array.
        // Count:['column1','column2']
    }
}).then(function(results) {
    //aggregate result will be in the first index only.
    console.log(results[0]);
}).catch(function(error) {
     console.log(error);
})
```
<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/aggregate">Example</a>
    <button class="btn info btnNext">Next</button>
</p>