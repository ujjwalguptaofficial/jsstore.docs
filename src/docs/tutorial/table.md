---
Title: "Table"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Before creating Table, lets see how to create a column. A column in JsStore is an json object. It has following properties -

```
{
    Name: string, // name of column (required)
    PrimaryKey: boolean, // declare this column as primary key (optional)
    // We strongly recommend to create the primary keys (optional)
    NotNull: boolean, // ensure this column value should not be null (optional)
    DataType: JsStore.Data_Type, // datatype of this column (optional)
    AutoIncrement: boolean, // automatically increment value (optional)
    Unique: boolean // This column will have unique value (optional)
    Default: any, // Provides a default value for a column when none is specified (optional)
    MultiEntry: boolean, // Provides support to search inside array values (optional)
    EnableSearch: boolean - default value is true // Turn on/off search for this column (optional)
}
```

So Table in JsStore is an Array of columns.

```
var Table1 = {
    Name: "table_name",
    Columns: [{
            Name: "column1",
            DataType: 'datatype'
            PrimaryKey: true
        },
        {
            Name: "column2",
            DataType: 'datatype'
        },
        ..... {
            Name: "columnN",
            DataType: 'datatype'
        }
    ]
}
```

Note :- We strongly recommend to create a primary key for every table.

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/create_db">Example</a>
    <button class="btn info btnNext">Next</button>
</p>