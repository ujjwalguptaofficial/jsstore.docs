---
sidebar_position: 25
keywords: [plugin, middleware, indexeddb, jsstore]
---

# Plugin

Plugin can be used to write common set of generic codes which can be provided to anyone using a package. Using plugin you can inject apis or insert middleware.

[SqlWeb](/docs/sqlweb.md) is an example of plugin which add `$sql` api.

## How to create a plugin

```javascript
export const AwesomePlugin = {

    // setup is called by jsstore, so all initialization should happen here
    setup: function(connection, params){

        connection.myApi = {
            insertIntoMyTable: function (data){
                connection.insert({
                    into:"my_table",
                    values:[data]
                })
            }
        }

    }
}
```

In the above code we have created a plugin which add api `myApi` to insert data into specific table.

Now we need to add this plugin to jsstore connection.

```javascript
var connection = new JsStore.Connection();
connection.addPlugin(AwesomePlugin);
```

now plugin is installed and can be used. Let's use the api added by plugin

```javascript
connection.myApi.insertIntoMyTable({
    name:'ujjwal gupta'
})
```

### Available Plugins are - 

* [jsstore-encrypt](https://github.com/ujjwalguptaofficial/jsstore-encrypt)
* [sqlweb](https://github.com/ujjwalguptaofficial/sqlweb/)
