---
Title: "Create Db"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance(),
dbName="TutorDb";
JsStore.isDbExist(dbName,function(isExist){
    if(isExist)
    {
        Connection.openDb(dbName);
        log('Db already created');
    }
    else
    {
        log('Db does not exist - creating..');
       var students = {
            Name: 'Students',
            Columns: [{
                    Name: "studentId",
                    PrimaryKey: true,
                    AutoIncrement: true
                },
                {
                    Name: "studentName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                },
                {
                    Name: "mobileNo",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                },
                {
                    Name: "address",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                },
                {
                    Name: "teacherId",
                    DataType: JsStore.Data_Type.Number
                }
            ]
        };

        var teachers = {
            Name: 'Teachers',
            Columns: [{
                    Name: "teacherId",
                    PrimaryKey: true,
                    AutoIncrement: true
                },
                {
                    Name: "teacherName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                },
                {
                    Name: "description",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }
            ]
        }

        var DataBase = {
            Name: dbName,
            Tables: [students, teachers]
        };
        Connection.createDb(DataBase,function(){
            log('Db created successfully');
        });
    }
});

```