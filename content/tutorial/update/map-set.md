---
Title: "mapSet"
Keywords: "update , mapSet, query, indexeddb, jsstore"
Description: "mapSet provides you a way to create or update your set value in update query"
---

mapSet provides you a way to create or update your set value in update query. It is a function which is called with `setValue` & `storedValue`.

There are two parts of implementing mapSet - 

### 1. Create your mapSet method

```
var JsStoreUpdateMapper = {
    mapSet(setValue, storedValue){
        setValue.totalPrice = storedValue.price * storedValue.quantity
    }
}
```

👉 If you are using web worker, then write the above code in a file & then use [importScipt](/tutorial/import-scripts).

### 2. Use method in update query

```
connection.update({
    in:"Products",
    set:{
        totalPrice:0
    },
    mapSet: 'JsStoreUpdateMapper.mapSet'
})
```