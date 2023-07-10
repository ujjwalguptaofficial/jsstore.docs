---
sidebar_position: 3
keywords: [regex, api, query, indexeddb, jsstore]
---

# Regex

Regex is used with Where to search for a specified pattern in a column value. For more information about regex, visit [mozilla regular expression guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


```javascript
var results = await connection.select({
    from: 'Customers',
    where: {
        Country: {
            regex: /mexico|brazil/i
        }
    }
});
//results will be array of objects.
console.log(results);
```

<p class="text--center">
    <a class="button button--info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20country%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20regex%3A%20%2Fmexico%7Cbrazil%2Fi%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)">Example</a>
</p>
