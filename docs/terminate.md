---
sidebar_position: 19
Keywords: [terminate, api, query, indexeddb, jsstore]
---

# Terminate
Terminate close the connection and releases everything.

```javascript
await connection.terminate();
console.log("connection terminated");
```

But what to do - when you want to reinitiate the connection ?

You will have to the create Connection again.

```javascript
connection = new JsStore.Connection(new Worker('worker_url'));
```