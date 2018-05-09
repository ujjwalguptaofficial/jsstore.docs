import Axios from "axios";
import { IdbService } from "./idb_service";
import { IDbInfo } from "../interfaces";

export class DemoDbService extends IdbService {
    dbName = "Demo";
    filesList = ["Customers", "Categories", "Employees", "OrderDetails",
        "Orders", "Products", "Shippers", "Suppliers"];

    createDemoDataBase() {
        return new Promise((resolve, reject) => {
            const getDbInfo = () => {
                this.getDbInfo(resolve);
            }
            this.isDbExist(this.dbName).then(isExist => {
                if (isExist) {
                    this.connection.openDb(this.dbName, getDbInfo);
                }
                else {
                    this.connection.createDb(this.getDbStructure_(), () => {
                        this.insertDemoDbData(getDbInfo);
                    }, err => {
                        reject(err);
                    });
                }

            }).catch((err) => {
                reject(err);
            });
        });
    }

    getDbInfo(callBack) {
        const output: IDbInfo[] = [];
        const fileLength = this.filesList.length;
        var countProcessed = 0;
        this.filesList.forEach((file) => {
            this.count_(file).then(function (result) {
                output.push({
                    count: result,
                    name: file
                })
                ++countProcessed;
                if (fileLength === countProcessed) {
                    callBack(output);
                }
            })
        });
    }

    insertDemoDbData(callBack) {
        var filesProcessed = 0;
        var onFileProcessed = () => {
            filesProcessed++;
            console.log('inserted file:' + this.filesList[filesProcessed - 1]);
            if (filesProcessed === this.filesList.length) {
                callBack();
            }
        };
        this.filesList.forEach((file) => {
            const url = `/demo_db/${file}.json`;
            Axios.get(url).then((response) => {
                switch (file) {
                    case this.filesList[3]:
                        this.bulkInsert_(file, response.data).then(onFileProcessed);
                        break;
                    default:
                        this.insert_(file, response.data).then(onFileProcessed);
                }

            });
        });
    }

    restoreDb(callBack) {
        this.connection.openDb(this.dbName).dropDb(callBack);
    }

    private count_(from: string) {
        return this.connection.count({
            From: from
        });
    }

    private insert_(table: string, datas: any[]) {
        return this.connection.insert({
            Into: table,
            Values: datas
        });
    }

    private bulkInsert_(table: string, datas: any[]) {
        return this.connection.bulkInsert({
            Into: table,
            Values: datas
        });
    }

    private getDbStructure_() {

        var customers = {
            Name: 'Customers',
            Columns: [{
                Name: "customerId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "customerName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "contactName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "address",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "city",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "postalCode",
                DataType: 'string'
            },
            {
                Name: "country",
                NotNull: true,
                DataType: 'string'
            }
            ]
        };

        const categories = {
            Name: 'Categories',
            Columns: [{
                Name: "categoryId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "categoryName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "description",
                NotNull: true,
                DataType: 'string'
            }
            ]
        };

        const employees = {
            Name: 'Employees',
            Columns: [{
                Name: "employeeId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "lastName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "birthDate",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "photo",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "notes",
                DataType: 'string'
            }
            ]
        };

        var order_details = {
            Name: 'OrderDetails',
            Columns: [{
                Name: "orderDetailId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "orderId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "productId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "quantity",
                NotNull: true,
                DataType: 'number'
            }]
        };

        var orders = {
            Name: 'Orders',
            Columns: [{
                Name: "orderId",
                PrimaryKey: true
            },
            {
                Name: "customerId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "employeeId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "orderDate",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "shipperId",
                NotNull: true,
                DataType: 'number'
            }
            ]
        };

        var products = {
            Name: 'Products',
            Columns: [{
                Name: "productId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "productName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "supplierId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "categoryId",
                NotNull: true,
                DataType: 'number'
            },
            {
                Name: "unit",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "price",
                NotNull: true,
                DataType: 'number'
            }]
        };

        var shippers = {
            Name: 'Shippers',
            Columns: [{
                Name: "shipperId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "shipperName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "phone",
                NotNull: true,
                DataType: 'string'
            }
            ]
        };

        var suppliers = {
            Name: 'Suppliers',
            Columns: [{
                Name: "supplierId",
                PrimaryKey: true,
                AutoIncrement: true
            },
            {
                Name: "supplierName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "contactName",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "address",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "city",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "postalCode",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "country",
                NotNull: true,
                DataType: 'string'
            },
            {
                Name: "phone",
                NotNull: true,
                DataType: 'string'
            }]
        };

        var dataBase = {
            Name: this.dbName,
            Tables: [
                customers,
                categories,
                employees,
                order_details,
                orders,
                products,
                shippers,
                suppliers
            ]
        };
        return dataBase;
    }
}