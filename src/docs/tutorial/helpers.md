---
Title: "Helpers"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

#### getDbVersion

It returns the current Database version.

```
JsStore.getDbVersion(db_name, function(version) {
    console.log(version)
});
```

[Example](/example/get_db_version)

#### getDbSchema

It returns the current Database Schema.

```
JsStore.getDbSchema(db_name, function(schema) {
    console.log(schema)
});
```

#### isNull

Check whether supplied value is null or not.

```
JsStore.isNull(value)
```

#### enableLog

It enables the log

```
JsStore.enableLog()
```

#### disableLog

It disable the log

```
JsStore.disableLog()
```

#### getDbList

It returns list of database created using jsstore.

```
JsStore.getDbList(function(result) {
    console.log(result)
});
```
#### getType

It returns type of data.

```
JsStore.getType("hi"); // It should return string
JsStore.getType(true); // It should return boolean
```