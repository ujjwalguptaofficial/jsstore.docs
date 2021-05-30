---
Title: "Middleware"
Keywords: "middleware, plugin, indexeddb, jsstore"
Description: "Middleware can be used to modify queries"
---

Middleware is a function which has access to request query, result.They are called for each request in the same order as defined.

Middleware can be used to listen to each query and modify if necessary.

e.g - Let's say i want to encode my data when being inserted to make sure its not readable or for security purpose and decode when being fetched.

## Create Middleware

```
var connection = new JsStore.Connection();
connection.addMiddleware(function (request) {

    const query = request.query

    if(request.name == 'insert' && query.encrypt){
      
        encryptData(query)

    }
    else if(request.name == 'select' && query.decrypt){
        // result will be encrypted, so let's wait for result and then decrypt data

        request.onResult((result)=>{
            decryptData(result);
        })

    }
});
```

now middleware is registered and can be used. Let's call insert api

```
connection.insert({
    into:"my_secure_table"
    values:[{
        password:'12345'
    }],
    // some extra information can be provided
    encrypt: true
})
```

similary data can be decoded by the middleware -


```
connection.select({
    from:"my_secure_table"
    decrypt: true
})
```


Middleware can be also created and provided as package using [plugin](/tutorial/plugin).
