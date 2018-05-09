---
Title: "Multiple Table Join"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
//first join between two tables
var Join1={
    Table1:{
        Table:'Orders',
        Column:'customerId'
    },
    Join:'inner',
    Table2:{
        Table:'Customers',
        Column:'customerId'
    },
    NextJoin:{ // Provide details for next join 
        Table: 'Orders',  // which table will be used from above two tables.,  
        Column: 'shipperId' // which column will be used from Table
    }
    // we have defined that table Orders will be used for next join on column ShippersID
}

//join with third tables
var Join2={
    Table1:Join1,
    Join:'inner',
    Table2:
    {
        Table:'Shippers',
        Column:'shipperId'
    }
}

var Connection = new JsStore.Instance();
Connection.openDb("Demo").select({
    From: Join2, // provide last join query
    OnSuccess:function (results){
        log(results);
    },
    OnError:function (error) {
        log(error);
    }
});

```