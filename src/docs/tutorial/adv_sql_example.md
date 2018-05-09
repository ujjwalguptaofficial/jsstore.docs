---
Title: "Advanced Sql Example"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

These are some examples of common use cases -

*   **SQL** \- Select * From Table_Name Where Column1=value1 or Column2=value2 or Column3=value3;

```
Connection.select({
    From: "Table_Name",
    Where: {
        Column1: value1,
        Or: {
            Column2: value2,
            Column3: value3
        }
    }
});
```
    
*   **SQL** \- Select * From Table_Name Where Column1=value1 and (Column2=value2 or Column3=value3);

```
Connection.select({
    From: "Table_Name",
    Where: [{
            Column1: value1
        },
        {
            Column2: value2,
            Or: {
                Column3: value3
            }
        }
    ]
});
```
    
*   **SQL** \- Select * From Table_Name Where Column1=value1 or (Column2=value2 and Column3=value3);

```
Connection.select({
    From: "Table_Name",
    Where: [{
            Column1: value1
        },
        {
            Or: {
                Column2: value2,
                Column3: value3
            }
        }
    ]
});
```
    

Hope these examples will help you to write more complex queries. If you are not able to understand or write some complex queries - ask at stackoverflow, or fire an issue.
