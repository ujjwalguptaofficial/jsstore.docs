---
Title: "mapSet"
Keywords: "update , mapSet, query, indexeddb, jsstore"
Description: "mapSet provides you a way to create or update your set value in update query"
---

mapSet provides you a way to convert your set value in update query with stored value. 

It is a function which is called with `setValue` & `storedValue`.

```
function myUpdateMapper(setValue, storedValue){
   setValue.totalPrice = storedValue.price * storedValue.quantity;
}
```

now we need to use this method in update query -

## With web worker

In case of web worker, you first need to make your method accessible to jsstore worker, so that it can call it.

#### 1. Save the above code in a file and import it inside web worker 

you can use <a href="/tutorial/import-scripts">importScripts</a> to import your scripts which contains your methods.

```
await connection.importSripts("update_logic.js");

```

#### 2. Use the method in query

```
connection.update({
    in:"Products",
    set:{
        totalPrice:0
    },
    mapSet: 'myUpdateMapper' // pass the method name
})
```

## Without web worker

You can simply use the method as mapSet.

```
connection.update({
    in:"Products",
    set:{
        totalPrice:0
    },
    mapSet: myUpdateMapper // pass the method
})
```
