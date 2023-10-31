---
sidebar_position: 19
keywords: [Map, get, set, has, delete, indexeddb]
---

# Map

Map allows you to stores data in the key value format. The data is stored in a special table called - `KeyStore`.

You can think of it similar to **localStorage** which allows you to store only string data, but using `Map` you can store any type of data.

Some of use cases are - 

1. Storing user basic information as json
2. Storing user profile picture

Map follows javascript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) api. So it also has same api -

## set

Store the value for the passed key in the map store.

```javascript
var userInfo = {
    name: 'ujjwal gupta',
    accountType: 'super_admin',
    profilePic: Blob Object // i am not creating it.

}
connection.Map.set("user_info", userInfo).then(function() {
    console.log('value setted');
});
```

## get

Returns the value associated to the passed key, or undefined if there is none.

```javascript
connection.Map.get("user_info").then(function(userInfo) {
    console.log(userInfo); 
});
```

## has

Returns a boolean value indicating whether a value has been stored with the passed key in the Map store or not. 

```javascript
connection.Map.has("user_info").then(function(isExist) {
    console.log(isExist); 
});
```

## delete

delete the value by key in the map store

```javascript
await connection.Map.delete("user_info");
```





