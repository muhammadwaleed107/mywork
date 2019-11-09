"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
let sql = require("mssql");
// import * as sql from 'mssql';
class BaseModel {
    constructor(IsActive, IsDeleted, CreatedAt, CreatedBy, ModifiedAt, ModifiedBy) {
        this.IsDeleted = false;
        this.IsActive = true;
        this.CreatedAt = new Date().toISOString();
        this.CreatedBy = "";
        this.ModifiedAt = new Date().toISOString();
        this.ModifiedBy = "";
    }
    static GetAll(res, TableName) {
        let query = "select * from [" + TableName + "]";
        BaseModel.executeQuery(res, query);
    }
    static Get(res, TableName, Id) {
        let query = "select * from [" + TableName + "] WHERE Id=" + Id;
        BaseModel.executeQuery(res, query);
    }
    static Insert(res, TableName, dto) {
        let fields = Object.getOwnPropertyNames(dto);
        let values = "";
        fields.forEach((key, index) => {
            if (key !== 'Id') {
                values += "'" + dto[key] + "'";
                if (index < (fields.length - 1))
                    values += ",";
            }
        });
        fields.splice(fields.findIndex(x => x == 'Id'), 1);
        let query = "INSERT INTO [user] (" + fields.join(',') + ") VALUES (" + values + ")";
        BaseModel.executeQuery(res, query);
    }
    static Update(res, TableName, dto) {
        // let fields = Object.getOwnPropertyNames(dto);
        // let values = "";
        // fields.forEach((key, index) => {
        //     if (key !== 'Id') {
        //         values += "'" + dto[key] + "'";
        //         if (index < (fields.length - 1))
        //             values += ",";
        //     }
        // });
        // fields.splice(fields.findIndex(x => x == 'Id'), 1);
        // let query = "UPDATE [user] (" + fields.join(',') + ") VALUES (" + values + ")";
        // BaseModel.executeQuery(res, query);
    }
    static executeSp(res, SpName, params) {
        let query = "EXEC [" + SpName + "] ";
        if (params) {
            let props = Object.getOwnPropertyNames(params);
            props.forEach((key, index) => {
                query += "@" + key.toUpperCase() + " = " + params[key];
            });
        }
        BaseModel.executeQuery(res, query);
    }
    static executeQuery(res, query) {
        sql.connect(config_1.Config.DBConfig, function (err) {
            if (err) {
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                request.multiple = true;
                // query to the database
                request.query(query, function (err, result) {
                    console.log("Results =>", JSON.stringify(result));
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        res.send(result);
                    }
                    sql.close();
                });
            }
        });
    }
}
exports.BaseModel = BaseModel;
