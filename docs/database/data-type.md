---
keywords: [data type, column, query, indexeddb, jsstore]
---

# DataType

JsStore provides following data type - 

* String - 'string'

* Number - 'number'

* DateTime - 'date_time' . The value should be date object i.e `value = new Date()`

* Object - 'object'  

* Array - 'array'

* Boolean - 'boolean'

data types are exposed as - `DATA_TYPE` , so you can also use it.

Let's see how to use datatype - 

```javascript
import {DATA_TYPE} from 'jsstore'

var columns = {
    Id:{ primaryKey: true, autoIncrement: true },
    ItemName:  { notNull: true, dataType: "string" },
    Price:  { notNull: true, dataType: "number" },
    Quantity : { notNull: true, dataType: DATA_TYPE.Number }
}
```

**Note:-** do not use data type boolean, if you want to filter on that column. For more info,check out - [https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792](https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792)
 
