import { Config } from "../config";
import { Response } from "express";
let sql = require("mssql");
// import * as sql from 'mssql';

export class BaseModel {
    constructor(
        IsActive?: boolean,
        IsDeleted?: boolean,
        CreatedAt?: string,
        CreatedBy?: string,
        ModifiedAt?: string,
        ModifiedBy?: string
    ) {
        this.IsDeleted = false;
        this.IsActive = true;
        this.CreatedAt = new Date().toISOString();
        this.CreatedBy = "";
        this.ModifiedAt = new Date().toISOString();
        this.ModifiedBy = "";
    }

    IsActive?: boolean;
    IsDeleted?: boolean;
    CreatedAt?: string;
    CreatedBy?: string;
    ModifiedAt?: string;
    ModifiedBy?: string;

    public static GetAll(res: Response, TableName: string) {
        let query = "select * from [" + TableName + "]";
        BaseModel.executeQuery(res, query);
    }

    public static Get(res: Response, TableName: string, Id: number) {
        let query = "select * from [" + TableName + "] WHERE Id=" + Id;
        BaseModel.executeQuery(res, query);
    }

    public static Insert(res: Response, TableName: string, dto: any) {
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

    public static Update(res: Response, TableName: string, dto: any) {
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


    public static executeSp(res: Response, SpName: string, params: any) {
        let query = "EXEC [" + SpName + "] ";
        if (params) {
            let props = Object.getOwnPropertyNames(params);
            props.forEach((key, index) => {
                query += "@" + key.toUpperCase() + " = " + params[key];
            });
        }
        BaseModel.executeQuery(res, query);
    }


    private static executeQuery(res: any, query: any) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                request.multiple = true;
                // query to the database
                request.query(query, function (err: any, result: any) {
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