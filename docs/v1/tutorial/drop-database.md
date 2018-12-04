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

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="/example/drop_db">Example</a>
    <button class="btn info btnNext">Next</button>
</p>