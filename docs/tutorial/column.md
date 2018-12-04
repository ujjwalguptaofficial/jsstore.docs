---
Title: "Table"
Created Date: "09/05/2018"
Last Updated : "10/05/2018"
---

A column in JsStore is a JSON object. It has following properties -

```
{
    name: string, // name of column (required)
    primaryKey: boolean, // declare this column as primary key (optional)
    // We strongly recommend to create the primary keys (optional)
    notNull: boolean, // ensure this column value should not be null (optional)
    dataType: JsStore.DATA_TYPE, // datatype of this column (optional)
    autoIncrement: boolean, // automatically increment value (optional)
    unique: boolean // This column will have unique value (optional)
    default: any, // Provides a default value for a column when none is specified (optional)
    multiEntry: boolean, // Provides support to search inside array values (optional)
    enableSearch: boolean - default value is true // Turn on/off search for this column (optional)
    keyPath : string[] - allows you to use multiple indexing // optional 
}
```
For all data types see this link - [DataType](/tutorial/enums/)

Column in jsstore can be created by two way - 

1. JSON object - 

```
var column={
    name:'column_name',
    autoIncrement:true,
    dataType:'data_type'
}
```
        
2. Class Instance - This is way to create column in less amount of code.

```
var column=new JsStore.Column("column_name").options([COL_OPTION.AutoIncrement]).setDataType('datatype')
```

    * 'options' - It takes array of column options : PrimaryKey, AutoIncrement, Unique, NotNull, MultiEntry and set the specified options as true.

         **Note :-** If supplied invalid value - option is ignored.

    * 'setDataType' - It is used to set the data type of column.
    * 'disableSearch' - It disables the search on the column.
    * 'setDefault' - It is used to set the default value of column.

