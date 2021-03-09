---
Title: "Import Scripts"
Keywords: "import scripts, transaction, query, indexeddb, jsstore"
Description: "import scripts in web worker"
---

importScripts can be used to add scripts inside jsstore web worker. It internally uses [importScripts](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts) .


```
await connection.importScripts("file1.js","file2.js");
```

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>