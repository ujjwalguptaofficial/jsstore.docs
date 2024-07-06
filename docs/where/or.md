---
sidebar_position: 2
Keywords: [or operator, where clause, query filtering, indexedDB, JsStore]
---

# Or

`or` can be used with `where` to filter records to include records where any of the condition is true.

## Sql

```
Select * From Table_Name
Where
Column1=some_value
or
Column2=some_another_value;
```

## JsStore

```js
var results = await connection.select({
    from: "Table_Name",
    where: {
        column1: some_value,
        or: {
            column2: some_another_value
        }
    }
});
//results will be array of objects.
console.log(results);
```


<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20country%3A'Mexico'%2C%0A%20%20%20%20%20%20%20%20or%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20city%3A'London'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%3B%0A">Example</a>
</p>

### More Examples

Let's understand some more examples query, which will help us to write any kinda of or query as per our requirements -

#### Select * from Table_Name where Column1=value1 or Column2=value2 or Column3=value3

```javascript
connection.select({
    from: "Table_Name",
    where: {
        Column1: value1,
        or: {
            Column2: value2,
            Column3: value3
        }
    }
});
```

#### Select * from Table_Name where Column1=value1 and (Column2=value2 or Column3=value3)

```javascript
connection.select({
    from: "Table_Name",
    where: [{
            Column1: value1
        },
        {
            Column2: value2,
            or: {
                Column3: value3
            }
        }
    ]
});
```

