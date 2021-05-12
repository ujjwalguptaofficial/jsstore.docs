---
Title: "Aggregate Functions"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore supports following aggregate functions : -

*   **Count :** Returns the number of rows of specified column.
*   **Sum :** Returns the total sum of numeric column.
*   **Avg :** Returns the average value of numeric column.
*   **Max :** Returns the maximum value of specified column.
*   **Min :** Returns the minimum value of specified column.

#### Sql

```
Select min(Column\_Name) From Table\_Name;
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Aggregate: {
        Min: Column_Name,
        // You can specify multiple columns at a time by giving the columns name in an array.
        // Count:['column1','column2']
    },
    OnSuccess: function(results) {
        //aggregate result will be in the first index only.
        console.log(results[0]);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```
<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/aggregate">Example</a>
    <button class="btn info btnNext">Next</button>
</p>