---
Title: "Promise"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

JsStore provides two options for returning results - OnSuccess and OnError either as query or as callback. Some developers dont like to use callback and prefers promise. Thats why JsStore also provides Promise support.

JsStore returns promise when you dont specify the OnSuccess function. Lets take a look at below query -

```
Connection.select({
    From: "Table_Name",
}).then(function(results) {
    console.log(results);
}).catch(function(error) {
    alert(error._message);
});
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="/example/promise">Example</a>
    <button class="btn info btnNext">Next</button>
</p>