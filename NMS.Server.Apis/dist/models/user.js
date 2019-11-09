"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../dtos/index");
const base_model_1 = require("./base-model");
const config_1 = require("../config");
let sql = require("mssql");
let HttpRequest = require("request");
let XMLconvert = require('xml-js');
//let xmlParser = require('xml2json');
class User extends base_model_1.BaseModel {
    constructor(IsActive, IsDeleted, CreatedAt, CreatedBy, ModifiedAt, ModifiedBy) {
        super(IsActive, IsDeleted, CreatedAt, CreatedBy, ModifiedAt, ModifiedBy);
        this.Id = 0;
        this.UserName = "rxzx";
        this.Password = "Bol123";
        this.FullName = "Raza";
        this.FirstName = "Raza";
        this.Designation = "Dev";
        this.FullNameUrdu = "";
        this.FirstNameUrdu = "";
        this.DesignationUrdu = "";
        this.ProfilePicture = "";
        this.Lat = "";
        this.Long = "";
        this.JobRoleId = 1;
        this.LocationId = 1;
        this.ShiftName = "Morning";
        this.ShiftStartTime = "";
        this.ShiftEndTime = "";
        this.UserAgent = "";
    }
    Insert(res, dto) {
        base_model_1.BaseModel.Insert(res, config_1.Config.Tables.User, dto);
    }
    Update(res, dto) {
        base_model_1.BaseModel.Update(res, config_1.Config.Tables.User, dto);
    }
    Get(res, Id) {
        base_model_1.BaseModel.Get(res, config_1.Config.Tables.User, Id);
    }
    GetAll(res) {
        base_model_1.BaseModel.GetAll(res, config_1.Config.Tables.User);
    }
    getAssignmentByUserId(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.AssignmentByUserResponseDTO();
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
    getGuestAssignmentByUserId(res, params) {
        let response = new index_1.ApiResponse();
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, result) {
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
    addNews(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.AddNewsResponseDTO();
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
    updateAssignment(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.UpdateAssignmentResponseDTO();
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
    getChat(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.GetChatResponseDTO();
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
    addChat(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.AddChatResponseDTO();
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
    updateGuestAssignment(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.UpdateGuestAssignmentResponseDTO();
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
    addEvent(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.AddEventResponseDTO();
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
    getUserNotification(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.GetUserNotificationResponseDTO();
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
    getUserPointsDetail(res, params) {
        sql.connect(config_1.Config.DBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        let responseObject = new index_1.GetUserPointsDetailResponseDTO();
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
    getSuggestedKeywords(res, params) {
        console.log('1');
        try {
            HttpRequest.get("http://clients1.google.com/complete/search?hl=en&output=toolbar&q=" + params.SeachKeyword, (error, response, body) => {
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
                        _result.push(temp[i].suggestion._attributes.data);
                    }
                }
                res.send(_result);
            });
        }
        catch (err) {
            res.send(err);
        }
    }
    getArchivalMedia(res, params) {
        sql.connect(config_1.Config.ArchivalDBConfig, function (err) {
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
                request.query(reqQuery, function (err, resp) {
                    if (err) {
                        sql.close();
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        console.log(resp);
                        let responseObject = new index_1.ArchivalMediaResponseDTO();
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
    static mapGetUserMetaInfoResponse(metaData) {
        let response = new index_1.UserMetaDataResponseDTO();
        if (metaData.recordsets && metaData.recordsets.length > 1) {
            metaData = metaData.recordsets;
        }
        response.User = metaData[0];
        response.Menues = metaData[2];
        response.Roles = metaData[1].map((Entity) => {
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
exports.User = User;
