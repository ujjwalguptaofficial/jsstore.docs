---
sidebar_position: 22
keywords: [import scripts, transaction, query, indexeddb, jsstore]
---

# Import Scripts

importScripts can be used to add scripts inside jsstore web worker. It internally uses [importScripts](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts) .


```javascript
await connection.importScripts("file1.js","file2.js");
```

importScripts is useful for executing [transaction](/docs/transaction.md)
