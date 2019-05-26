---
Title: "Order By"
Keywords: "order by, sort by, select, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Order By is used to sort the data in ascending or descending order, based on any column.

#### Sql

```
Select * from Table_Name Order by column_name sort_type;

```

#### JsStore

```
connection.select({
    from: "Table_Name",
    order: {
        by: column_name,
        type: sort_type //supprted sort type is - asc,desc
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
```

Option order is of type - OrderQuery 

```
type OrderQuery = {
    /**
     * sorting column name
     *
     * @type {string}
     */
    by: string;

    /**
     * sorting type - asc/desc
     *
     * @type {string}
     */
    type: string;

    /**
     * whether to do sorting by indexeddb or by jsstore
     * default - true
     * @type {boolean}
     */
    idbSorting: boolean
};
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/order-by">Example</a>
    <button class="btn info btnNext">Next</button>
</p>