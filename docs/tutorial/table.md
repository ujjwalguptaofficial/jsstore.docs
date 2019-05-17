---
Title: "Table"
Keywords: "table, api, query, indexeddb, jsstore"
Created Date: "09/05/2018"
Last Updated : "13/05/2018"
---

Before creating Table, lets see how to create a column. A column in JsStore is a JSON object. It has following properties -

* name: string, // name of column (required)

* primaryKey: boolean, // declare this column as primary key (optional)
    // We strongly recommend to create the primary keys (optional)

* notNull: boolean, // ensure this column value should not be null (optional)

* dataType: JsStore.DATA_TYPE, // datatype of this column (optional)

* autoIncrement: boolean, // automatically increment value (optional)

* unique: boolean // This column will have unique value (optional)

* default: any, // Provides a default value for a column when none is specified (optional)

* multiEntry: boolean, // Provides support to search inside array values (optional)

* enableSearch: boolean - default value is true // Turn on/off search for this column (optional)

Table in JsStore contains array of columns.

```
var table1 = {
    name: "table_name",
    columns: [{
            name: "column1",
            dataType: 'datatype',
            primaryKey: true
        },
        {
            name: "column2",
            dataType: 'datatype'
        },
        ..... {
            name: "columnN",
            dataType: 'datatype'
        }
    ]
}
```

Note :- We strongly recommend to create a primary key for every table.

Above Syntax is good and clear but when there are lots of tables - codes becomes large and messy. So JsStore provides another approach to create column.

```
var table1 = {
    name: "table_name",
    columns: [
        new JsStore.Column("column1").options([COL_OPTION.PrimaryKey]).setDataType('datatype'),
        new JsStore.Column("column2").setDataType('datatype'),
        .....,
        new JsStore.Column("columnN").setDataType('datatype')
    ]
}
```
In the above code - we are creating instance of class - "Column" and calling its methods with some parameters.

For more information about column - please check [column](/tutorial/column) doc.

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>