---
keywords: [update , mapSet, query, indexeddb, jsstore]
---

# mapSet
mapSet allows you to set the update value using a method. This is helpful in case where you want to update the value using some logic.

It is a function which is called with two parameter - `setValue` & `storedValue`.

Let's create a method which sets the total price -

```
function myUpdateMapper(setValue, storedValue){
   setValue.totalPrice = storedValue.price * storedValue.quantity;
}
```

We have created the method, now we need to tell jsstore to use this method in update query -

## With web worker

In case of web worker, you first need to make your method accessible to jsstore worker, so that it can call it.

**1. Save the above code in a file and import it inside web worker**

you can use [importScripts](/docs/import-scripts.md) to import your scripts which contains your methods.

```javascript
await connection.importSripts("update_logic.js");
```

**2. Use the method in query**

```javascript
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

```javascript
connection.update({
    in:"Products",
    set:{
        totalPrice:0
    },
    mapSet: myUpdateMapper // pass the method
})
```
