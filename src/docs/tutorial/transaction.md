---
Title: "Transaction"
Created Date: "07/01/2018"
Last Updated : NA
---

IndexedDB is a pure transactional database which means all the query is executed inside the transaction.

JsStore provides - 'transaction' api for executing transaction. The apis which are available inside the transaction are - 

* select
* count
* update
* remove
* insert


There are some extra api available inside the transaction to make the transaction more useful. These are -

* setResult - setResult accepts key and value. setResult is used to save the value which will be returned when transaction completes. The transaction returns an object, the object is in form of key and value which is set using setResult.
* abort - abort is used to abort the transaction. 

**Note :-** All extra apis are sychronous , so you should call these api inside the promise resolve callback i.e inside then callback.

Let's see a example - so consider a situation where a customer buy some products and customer is not into the db.

So the steps will be - 

1. Add new customer - so insert in the table - "Customer"
2. add new order - insert new order for the above customer
3. Update products - reduce the number of product for the particular or list of products.

```
connection.transaction({
    tables: ['customers', 'orders'], // list of tables which will be used in transaction
    // the logic callback is not a closure i.e it wont have access to outer scope or global scope.
    // basically function should be independent
    logic: function(data) {
        insert({
            into: 'customers',
            values: [data.customer],
            return: true
        }).then(function(customer) {
            //add customerid in order
            data.order.customerId = customer.Id;
            // add the result to get in transaction result
            setResult('customer', customer)
        });

        insert({
            into: 'orders',
            values: [data.order],
            return: true
        }).then(function(order) {
            setResult('order', order)
        });

        update({ in: 'product',
            where: {
                productId: data.productId
            },
            set: {
                count: {
                    '-': data.itemSelled
                }
            }
        })
    },
    data: { // the transaction logic will be called with supplying data
        customer: {
            name: 'ujjwal gupta',
            address: 'india',
            gender: 'male'
        },
        order: {
            total: 1000,
            date: "12/04/2018"
        },
        productId: 5,
        itemSelled: 4
    }
}).then(function(result) {
    console.log(result)
}).catch(function(err) {
    console.log(err);
});
```

Few important things to make sure you are using transaction in right way - 

* Transaction should be light weight. Dont write too many or heavy logics inside it. The reason is  - the indexeddb transaction is asyc and automatically commited and so jsstore.
* There may be situation where you have a heavy logic then - calculate the result and put it in data option.

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>
