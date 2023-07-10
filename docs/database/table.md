---
sidebar_position: 1
keywords: [table, api, query, indexeddb, jsstore]
---

# Table

Table is like a collection where your data is stored inside a **row** and a field is identified by **column**.

Consider you want to store a json data - 

```
var data = {
    name:'ujjwal gupta',
    country:'India'
}
```

Let's store the above data into a table

<table>
    <tr>
        <th>name</th>
        <th>country</th>
    </tr>
    <tr>
        <td>ujjwal gupta</td>
        <td>India</td>
    </tr>
</table>

## Schema

Table Schema is an object which contains name of table & columns schema.

### Syntax 

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

### Example

```
var tblProduct = {
    name: 'Product',
    columns: {
        // Here "Id" is name of column 
        id:{ primaryKey: true, autoIncrement: true },
        itemName:  { notNull: true, dataType: "string" },
        price:  { notNull: true, dataType: "number" },
        quantity : { notNull: true, dataType: "number" }
    }
};
```
**Note :-** It is mandatory to have a column with a primary key for every table. A primary key is used to uniquely identify a record or data row.

For more information about column - please check [column](/docs/column) doc.

## Table Options

### 1. name

name of the table

### 2.columns

collection of column to be used for the table.

### 3.alter 

alter is used to change the table schema. 

* It is an optional field. 
* It is useful when changing the database schema. 

```
var tblProduct = {
    name: 'Product',
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        count:{
            dataType:'number'
        }
    },
    alter:{
        // 2 is database version to target
        2: {
            modify: {
                id:{
                    notNull:true
                }
            },
            add:{
                name:{
                    dataType:'string'
                }
            },
            drop:{
                count:{
                    
                }
            }
        }
    }
}
```

For more info about updating schema, read [here](/docs/update-schema.md).