import { Response } from "express";
export declare class BaseModel {
    constructor(IsActive?: boolean, IsDeleted?: boolean, CreatedAt?: string, CreatedBy?: string, ModifiedAt?: string, ModifiedBy?: string);
    IsActive?: boolean;
    IsDeleted?: boolean;
    CreatedAt?: string;
    CreatedBy?: string;
    ModifiedAt?: string;
    ModifiedBy?: string;
    static GetAll(res: Response, TableName: string): void;
    static Get(res: Response, TableName: string, Id: number): void;
    static Insert(res: Response, TableName: string, dto: any): void;
    static Update(res: Response, TableName: string, dto: any): void;
    static executeSp(res: Response, SpName: string, params: any): void;
    private static executeQuery;
}
