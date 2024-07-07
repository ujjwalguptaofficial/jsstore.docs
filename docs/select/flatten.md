---
sidebar_position: 9
keywords: [flatten, select, multientry, indexeddb, jsstore, sql]
---

# Flatten

flatten is a option in select query which will flatten **array data** into primitive data.

e.g - Consider your data stored is :-

```javascript
{
    name:"ujjwal gupta",
    hobbies:["travelling", "motorcycling"]
}
```

In the above example - hobbies column is array. 

After flattening data will become

```javascript
[
    {
        name:"ujjwal gupta",
        hobbies:"travelling"
    },
    {
        name:"ujjwal gupta",
        hobbies: "motorcycling"
    }
]
```

## Query

```javascript
select({
    from:"Members",
    flatten:true
})
```

flatten is useful when you are doing join. Check this issue - [https://github.com/ujjwalguptaofficial/JsStore/issues/188](https://github.com/ujjwalguptaofficial/JsStore/issues/188)

 