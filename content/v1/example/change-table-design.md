---
Title: "Change Table Design"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
var Connection = new JsStore.Instance(),
dbName="TutorDb";
//we are changing design of Teachers Table.
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
            DataType: 'string'
        }
        //Remove Description column from Teachers Table
        /*{
            Name: "description",
            NotNull: true,
            DataType: 'string'
        }*/
    ],
    Version:2
}

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
            DataType: 'string'
        },
        {
            Name: "mobileNo",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "address",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "teacherId",
            DataType: 'number'
        }
    ]
};

var database={
    Name: dbName,
    Tables: [teachers,students]
}

JsStore.isDbExist({DbName: DbName, Table: {Name: 'Teachers', Version: 2}}, function(isExist){
    if(isExist)
    {
        Connection.openDb(DbName);
        log('Db already created');
    }
    else
    {
        Connection.createDb(Database,function(){
            log('Db created');
        });
    }
});

```