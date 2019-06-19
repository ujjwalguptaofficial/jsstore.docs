---
Title: "Terminate"
Keywords: "terminate, api, query, indexeddb, jsstore"
Description: "learn how to use release the connection"
---

Terminate close the connection and releases everything.

#### JsStore

```
await connection.terminate();
console.log("connection terminated");
```

But what to do - when you want to initiate the terminated connection ?

You will have to create the instance again.

```
connection = new JsStore.Instance(new Worker('worker_url'));
```