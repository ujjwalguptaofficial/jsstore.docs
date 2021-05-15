---
Title: "Update With Operators"
Keywords: "update , operators, query, indexeddb, jsstore"
Description: "update with operators is a shorthand for updating data with arithmetic operators"
---

Some Arithmetic operators can be used to update data.

e.g - Let's say, you want to add 5 to price column in Products table

```
var rowsUpdated = await connection.update({
    in: "Products",
    set: {
        price: {
            '+': 5
        },
    },
    where: {
        id:1
    }
});
alert(rowsUpdated + ' rows updated');
```

<p class="margin-top-40px text-center">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=update(%7B%0A%20%20%20%20in%3A%20%22Products%22%2C%0A%20%20%20%20set%3A%20%7B%0A%20%20%20%20%20%20%20%20price%3A%20%7B'%2B'%3A5%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20productId%3A%201%0A%20%20%20%20%7D%0A%7D)%3B%0A">Example</a>
</p>

## Supported operators are - 
<br>
* ' + ' : Add value to stored value
* ' - ' : Substract value from stored value
* ' * ' : Multiply with stored value
* ' / ' : Divide with stored value by supplied value
* ' {push} ' : Push an item to stored value. Works only if stored value is an array otherwise throws exception.