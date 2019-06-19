---
Title: "Connection"
Keywords: "database, connection, query, indexeddb, jsstore"
Description: "How to create connection in jsstore"
---

Connection in jsstore is object of `Instance` class of jsstore.

```
var connection = new JsStore.Instance(new Worker('jsstore worker location'));

```

**Important points :-**  

*   The connection variable will be used to execute the further query.
*   A connection will handle one db at a time.

<br>If you are finding difficult to understand, please take a look at [examples](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples) or our [medium page](https://medium.com/jsstore) 

<p class="margin-top-40px center-align">
      <button class="btn info btnNext">Next</button>
</p>