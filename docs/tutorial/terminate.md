---
Title: "Terminate"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Terminate close the connection and releases everything. This is useful in case - where you dont want to keep the connection alive since you are not using it often.

#### JsStore

```
connection.terminate().then(function() {
    console.log("connection terminated");
}).catch(function(error) {
    alert(error.message);
});
```

But what to do - when you want to initiate the terminated connection ?

You will have to create the instance again.

```
connection = new JsStore.Instance(new Worker('worker_url'));
```