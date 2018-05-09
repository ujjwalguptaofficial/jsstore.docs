---
Title: "Drop Database"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

dropDb is used to remove a database from browser storage.

```
Connection.dropDb(function (){
	console.log('Db deleted successfully');
},
function (error) {
	alert(error.value);
});
```

[Example](/example/drop_db) [Next](#)