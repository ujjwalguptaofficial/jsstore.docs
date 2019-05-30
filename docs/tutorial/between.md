---
Title: "Between"
Keywords: "between, values, indexeddb, jsstore"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

**" \- "** symbol is used to select result between two values. The values should be numbers only.

#### Sql (Where)

```
Select * From Table_Name;
Where
Column_Name Between value1 and value2
```

#### JsStore

```
connection.select({
    from: "Table_Name",
    where: {
        Column_Name: {
            '-': {
                Low: value1
                High: value2
            }
        },
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
     console.log(error);
});
```

<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Products%22%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20price%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22-%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20low%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20high%3A%2020%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)">Example</a>
    <button class="btn info btnNext">Next</button>
</p>