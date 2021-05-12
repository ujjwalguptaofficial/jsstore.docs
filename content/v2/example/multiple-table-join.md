---
Title: "Multiple Table Join"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
//first join between two tables
var join1={
    table1:{
        table:'Orders',
        column:'customerId'
    },
    join:'inner',
    table2:{
        table:'Customers',
        column:'customerId'
    },
    nextJoin:{ // Provide details for next join 
        table: 'Orders',  // which table will be used from above two tables.,  
        column: 'shipperId' // which column will be used from Table
    }
    // we have defined that table Orders will be used for next join on column ShippersID
}

//join with third tables
var join2={
    table1:join1,
    join:'inner',
    table2:
    {
        table:'Shippers',
        column:'shipperId'
    }
}

select({
    from: join2 // provide last join query
});

```