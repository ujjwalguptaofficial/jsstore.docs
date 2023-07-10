---
sidebar_position: 18
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

## set

It stores data in form of key and value in a special table. You can think of it is similar to localStorage but you can store every type of data using 'set' which is not the case with localStorage (can be stored only string).

Lets say you want to store user profile picture or may be some basic information, so that you can load it on page load.

```javascript
var userInfo = {
    name: 'ujjwal gupta',
    accountType: 'super_admin',
    profilePic: Blob Object // i am not creating it.

}
connection.set("user_info", userInfo).then(function() {
    console.log('value setted');
});
```

## get

Get data from special table.

```javascript
connection.get("user_info").then(function(userInfo) {
    console.log(userInfo); 
});
```



