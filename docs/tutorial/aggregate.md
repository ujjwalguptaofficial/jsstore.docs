---
Title: "Aggregate Functions"
Keywords: "aggregate, count, avg, min, max, indexeddb"
Created Date: "08/05/2018"
Last Updated : "11/05/2018"
---

JsStore supports following aggregate functions : -

*   **count :** Returns the number of rows of specified column.
*   **sum :** Returns the total sum of numeric column.
*   **avg :** Returns the average value of numeric column.
*   **max :** Returns the maximum value of specified column.
*   **min :** Returns the minimum value of specified column.

#### Sql

```
Select min(Column_Name) From Table_Name;
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    aggregate: {
        min: Column_Name,
        // You can specify multiple columns at a time by providing columns name in an array.
        // count:['column1','column2']
    }
}).then(function(results) {
    //aggregate result will be in the first index only.
    console.log(results[0]);
}).catch(function(error) {
     console.log(error);
})
```
<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Products%22%2C%0A%20%20%20%20aggregate%3A%20%7B%0A%20%20%20%20%20%20%20%20min%3A%20%22price%22%0A%20%20%20%20%7D%0A%7D)%3B">Example</a>
    <button class="btn info btnNext">Next</button>
</p>