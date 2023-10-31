---
sidebar_position: 20
keywords: [helpers, api, query, indexeddb, jsstore]
---

# Helpers

## logStatus

It sets the status of log. When supplied true - JsStore logs query flow in console. This is helpful in debugging.

```javascript
connection.logStatus = true;
```

## getDbList

It returns list of database created using jsstore.

```javascript
connection.getDbList().then(function(result) {
    console.log(result)
});
```



