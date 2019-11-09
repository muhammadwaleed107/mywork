import { UserMetaDataResponseDTO, UserSlugRequestDTO, UserSlugResponseDTO, SignOutDTO, SignOutResponseDTO, NewsBySlugRequestDTO, NewsBySlugResponseDTO, MediaResponseDTO, SlugNewsRequestDTO, SlugNewsResponseDTO, AddNewsRequestDTO, AddNewsResponseDTO, ArchivalMediaRequestDTO, ArchivalMediaResponseDTO, AssignmentByUserRequestDTO, AssignmentByUserResponseDTO, GuestAssignmentByUserRequestDTO, GuestAssignmentByUserResponseDTO, UpdateAssignmentRequestDTO, UpdateAssignmentResponseDTO, GetChatRequestDTO, GetChatResponseDTO, AddChatResponseDTO, AddChatRequestDTO, UpdateGuestAssignmentRequestDTO, UpdateGuestAssignmentResponseDTO, AddEventRequestDTO, AddEventResponseDTO, GetUserNotificationRequestDTO, GetUserNotificationResponseDTO, GetUserPointsDetailRequestDTO, GetUserPointsDetailResponseDTO, ApiResponse } from './../dtos/index';

import { BaseModel } from "./base-model";
import { Config } from "../config";
import { Response, Request } from "express";
import { LoginDTO, LoginResponseDTO } from "../dtos";
let sql = require("mssql");
let HttpRequest = require("request");
let XMLconvert = require('xml-js');
//let xmlParser = require('xml2json');

export class User extends BaseModel {
    constructor(
        IsActive?: boolean,
        IsDeleted?: boolean,
        CreatedAt?: string,
        CreatedBy?: string,
        ModifiedAt?: string,
        ModifiedBy?: string
    ) {

        super(
            IsActive,
            IsDeleted,
            CreatedAt,
            CreatedBy,
            ModifiedAt,
            ModifiedBy
        );
    }

    Id?: number = 0;
    UserName?: string = "rxzx";
    Password?: string = "Bol123";
    FullName?: string = "Raza";
    FirstName?: string = "Raza";
    Designation?: string = "Dev";
    FullNameUrdu?: string = "";
    FirstNameUrdu?: string = "";
    DesignationUrdu?: string = "";
    ProfilePicture?: string = "";
    LocationTitle?: string;
    Lat?: string = "";
    Long?: string = "";
    JobRoleId?: number = 1;
    LocationId?: number = 1;
    ShiftName?: string = "Morning";
    ShiftStartTime?: string = "";
    ShiftEndTime?: string = "";
    UserAgent?: string = "";


    public Insert(res: Response, dto: any) {
        BaseModel.Insert(res, Config.Tables.User, dto);
    }

    public Update(res: Response, dto: any) {
        BaseModel.Update(res, Config.Tables.User, dto);
    }

    public Get(res: any, Id: number) {
        BaseModel.Get(res, Config.Tables.User, Id);
    }

    public GetAll(res: any) {
        BaseModel.GetAll(res, Config.Tables.User);
    }
    public getAssignmentByUserId(res: Response, params: AssignmentByUserRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_GetAssignmentByUserId] 
                     @UserId ='${params.UserId}'`;
                request.multiple = true;
                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new AssignmentByUserResponseDTO();

                        if (resp) {
                            responseObject.Assignments = resp[0];
                            responseObject.IsSuccess = true;

                            if (responseObject.Assignments != null && responseObject.Assignments.length > 0) {
                                for (var i = 0; i < responseObject.Assignments.length; i++) {
                                    responseObject.Assignments[i].NewsList = [];
                                    responseObject.Assignments[i].NewsList = resp[1];
                                    responseObject.Assignments[i].CommentList = [];
                                    responseObject.Assignments[i].CommentList = resp[2];
                                }
                            }
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }

    public getGuestAssignmentByUserId(res: Response, params: GuestAssignmentByUserRequestDTO) {
        let response = new ApiResponse();
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_GetGuestAssignmentByUserId] 
                     @UserId ='${params.UserId}'`;
                request.multiple = true;
                request.query(reqQuery, function (err: any, result: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        if (result) {
                            response.Data = result[0];
                            response.IsSuccess = true;

                            if (response.Data != null && response.Data.length > 0) {
                                for (var i = 0; i < response.Data.length; i++) {
                                    response.Data[i].NewsList = [];
                                    response.Data[i].NewsList = result[1];
                                }
                            }
                        }
                        else {
                            response.IsSuccess = false;
                        }
                        sql.close();
                        res.send(response);
                    }
                });
            }
        });
    }
    public addNews(res: Response, params: AddNewsRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_Insert_News] 
                     @SlugId ='${params.SlugId}'
                   , @SlugTitle='${params.SlugTitle ? params.SlugTitle : ""}'
                   , @BeatId='${params.BeatId ? params.BeatId : 0}'
                   , @IsImportant='${params.IsImportant}'
                   , @UserId='${params.UserId ? params.UserId : 0}'
                   , @CameramanId='${params.CameramanId ? params.CameramanId : 0}'
                   , @TemplateId='${params.TemplateId ? params.TemplateId : 0}'
                   , @ScreenId='${params.ScreenId ? params.ScreenId : 0}'
                   , @Body='${params.Body ? params.Body : ""}'
                   , @UserAgent='${params.UserAgent ? params.UserAgent : ""}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new AddNewsResponseDTO();

                        if (resp) {
                            responseObject.News = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });


    }
    public updateAssignment(res: Response, params: UpdateAssignmentRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_UpdateAssignment] 
                     @AssignmentId ='${params.AssignmentId}'
                   , @AssignmentStatusId='${params.AssignmentStatusId}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new UpdateAssignmentResponseDTO();

                        if (resp) {
                            responseObject.Assignment = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }
    public getChat(res: Response, params: GetChatRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_GetChat] 
                     @TableId ='${params.TableId}'
                   , @ReferenceId='${params.ReferenceId}'
                   , @OffSet='${params.OffSet}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new GetChatResponseDTO();

                        if (resp) {
                            responseObject.ChatList = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }
    public addChat(res: Response, params: AddChatRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_InsertChat] 
                     @UserId ='${params.UserId}'
                   , @TableId ='${params.TableId}'
                   , @RefereneId='${params.ReferenceId}'
                   , @ScreenId='${params.ScreenId}'
                   , @Message='${params.Message}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new AddChatResponseDTO();

                        if (resp) {
                            responseObject.Chat = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }
    public updateGuestAssignment(res: Response, params: UpdateGuestAssignmentRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_UpdateGuestAssignment] 
                     @GuestAssignmentId ='${params.GuestAssignmentId}'
                   , @GuestAssignmentStatusId ='${params.GuestAssignmentStatusId}'
                   , @UserId='${params.UserId}'
                   , @SourceId='${params.SourceId}'
                   , @ReasonId='${params.ReasonId}'
                   , @Message='${params.Message}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new UpdateGuestAssignmentResponseDTO();

                        if (resp) {
                            responseObject.GuestAssignment = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }
    public addEvent(res: Response, params: AddEventRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_InsertEvent] 
                     @UserId ='${params.UserId}'
                   , @SlugTitle ='${params.SlugTitle}'
                   , @ScreenId='${params.ScreenId}'
                   , @EventTitle='${params.EventTitle}'
                   , @EventDate='${params.EventDate}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new AddEventResponseDTO();

                        if (resp) {
                            responseObject.Event = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }

    public getUserNotification(res: Response, params: GetUserNotificationRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_GetNotificationByUserId] 
                     @UserId ='${params.UserId}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new GetUserNotificationResponseDTO();

                        if (resp) {
                            responseObject.UserNotifications = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }

    public getUserPointsDetail(res: Response, params: GetUserPointsDetailRequestDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [NMS_GetUserPointsDetail] 
                     @UserId ='${params.UserId}'`;

                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new GetUserPointsDetailResponseDTO();

                        if (resp) {
                            responseObject.UserPointDetail = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });
    }

    public getSuggestedKeywords(res: Response, params: ArchivalMediaRequestDTO) {
        console.log('1');
        try {
            HttpRequest.get("http://clients1.google.com/complete/search?hl=en&output=toolbar&q=" + params.SeachKeyword, (error: any, response: any, body: any) => {
                if (error) {
                    console.log(error);
                    return console.dir(error);
                }
                // var result: any [] = [];
                var result = XMLconvert.xml2json(body, { compact: true, spaces: 0, ignoreComment: true });
                var temp = JSON.parse(result);
                var _result = [];

                if (temp && temp.toplevel && temp.toplevel.CompleteSuggestion) {
                    temp = temp.toplevel.CompleteSuggestion;
                    
                    for (var i = 0; i < temp.length; i++) {
                        _result.push(temp[i].suggestion._attributes.data)
                    }
                }
                
                res.send(_result);

            });

        }
        catch (err) {
            res.send(err);
        }
        
    }
    public getArchivalMedia(res: Response, params: ArchivalMediaRequestDTO) {
        sql.connect(Config.ArchivalDBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                console.log("DB connected");
                // create Request object
                let request = new sql.Request();
                // query to the database

                let reqQuery = `EXEC [MMS_GetResourceBySearch]
                     @SearchKeyword ='${params.SeachKeyword}',
                     @ResourceTypeId='${params.ResourceType}',
                     @ResourceOffSet='${params.ResourceOffset}'
                    , @FromDate='${(params.FromDate && params.FromDate != null) ? params.FromDate : null}'
                    , @ToDate='${(params.ToDate && params.ToDate != null) ? params.ToDate : null}'`;

            
                request.query(reqQuery, function (err: any, resp: any) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        console.log(resp);
                        let responseObject = new ArchivalMediaResponseDTO();
                        responseObject.Resources = resp;
                        if (resp) {
                            responseObject.Resources = resp;
                            responseObject.IsSuccess = true;
                        }
                        else {
                            responseObject.IsSuccess = false;
                        }
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }
        });


    }



    public static mapGetUserMetaInfoResponse(metaData: any): UserMetaDataResponseDTO {
        let response = new UserMetaDataResponseDTO();
        if (metaData.recordsets && metaData.recordsets.length > 1) {
            metaData = metaData.recordsets;
        }
        response.User = metaData[0];
        response.Menues = metaData[2];
        response.Roles = metaData[1].map((Entity: any) => {
            if (!Entity.Menues) {
                Entity.Menues = [];
            }
            Entity.Menues.push(response.Menues.filter(x => x.RoleId === Entity.RoleId));
            return Entity;
        });
        response.Beats = metaData[3];
        response.Templates = metaData[4];
        response.CameraMan = metaData[5];
        response.Source = metaData[6];
        response.Reason = metaData[7];

        return response;

    }



}