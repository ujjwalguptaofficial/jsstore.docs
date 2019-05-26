---
Title: "Table"
Keywords: "table, api, query, indexeddb, jsstore"
Created Date: "09/05/2018"
Last Updated : "13/05/2018"
---

Table in JsStore is an object which contains columns.

```
var table1 = {
    name: "table_name",
    columns: {
        column1: { dataType: 'datatype', primaryKey: true },
        column2 : { dataType: 'datatype'},
        ..... ,
        columnN: { dataType: 'datatype' }
    }
}
```

Note :- We strongly recommend to create a primary key for every table.

Above Syntax is good and clear but when there are lots of tables - codes becomes large and messy. So JsStore provides another approach to create column.

For more information about column - please check [column](/tutorial/column) doc.

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>