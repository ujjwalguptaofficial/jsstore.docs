---
Title: "Event"
Keywords: "event, on, off, indexeddb, jsstore"
Description: "clear api removes all records from a table."
---

jsstore provides some events which can be subscribed using "on" & unsubscribed using "off"

e.g -

```
connection.on(<event name>,()=>{
    console.log("request queue is empty);
});
```

## List of events - 

### open

Called when database connection is opened.event is called with database as parameter.

```
connection.on("open",(db)=>{
    console.log("connection opened", db);
});
```

### create

This is called only one time when database is created for first time.event is called with database as parameter. 

```
connection.on("create",(db)=>{
    console.log("database created", db);
});
```

### upgrade

Called when database is upgraded. event is called with three parameter -

* oldVersion
* newVersion
* database

```
connection.on("upgrade",(oldVersion, newVersion, database)=>{
    console.log(`database is upgraded from ${oldVersion} to ${newVersion} and database looks like`, database);
});
```

### requestQueueEmpty

Fired when request queue is empty

```
connection.on("requestQueueEmpty",()=>{
    console.log("request queue is empty);
});
```

### requestQueueFilled

Fired when request queue is filled. Basically when fired when length of request queue is one i.e for first request

```
connection.on("requestQueueFilled",()=>{
    console.log("request queue is filled");
});
```

 