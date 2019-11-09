import { UserMetaDataResponseDTO, UserSlugRequestDTO, UserSlugResponseDTO, SignOutDTO, SignOutResponseDTO, NewsBySlugRequestDTO, NewsBySlugResponseDTO, MediaResponseDTO, SlugNewsRequestDTO, SlugNewsResponseDTO, AddNewsRequestDTO, AddNewsResponseDTO, ArchivalMediaRequestDTO, ArchivalMediaResponseDTO, AssignmentByUserRequestDTO, AssignmentByUserResponseDTO, GuestAssignmentByUserRequestDTO, GuestAssignmentByUserResponseDTO, UpdateAssignmentRequestDTO, UpdateAssignmentResponseDTO, GetChatRequestDTO, GetChatResponseDTO, AddChatResponseDTO, AddChatRequestDTO, UpdateGuestAssignmentRequestDTO, UpdateGuestAssignmentResponseDTO, AddEventRequestDTO, AddEventResponseDTO, GetUserNotificationRequestDTO, GetUserNotificationResponseDTO, GetUserPointsDetailRequestDTO, GetUserPointsDetailResponseDTO, ApiResponse } from './../dtos/index';
import { Config } from "../config";
import { Response, Request } from "express";
import { LoginDTO, LoginResponseDTO } from "../dtos";
import { User } from '../models';
let sql = require("mssql");
let HttpRequest = require("request");
let XMLconvert = require('xml-js');


export class MainService {

    
	public SignoutWithoutSql(res: Response, param: SignOutDTO) {
        if(param.UserDeviceId != 0 && param.FcmTokenCode != '')
		{
		 res.send('signout successfully!');
		}
		else
		{
		 res.send('something wents wrong');
		}
    }
	
	public SignoutWithSql(res: Response, param: SignOutDTO) {
        sql.connect(Config.DBConfig, function (err: any) {
            if (err) {
                sql.close();
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                let request = new sql.Request();
                let responseObject = new SignOutResponseDTO();
                let getMetaDataQuery = `EXEC [NMS_SignOutUser] 
                @UserId = ${param.UserId},
                @UserDeviceId = '${param.UserDeviceId ? param.UserDeviceId : ""}',
                @FcmTokenCode = '${param.FcmTokenCode ? param.FcmTokenCode : ""}',
                @UserAgent = '${param.UserAgent ? param.UserAgent : ""}'
                `;
                request.query(getMetaDataQuery, function (err: any, metaData: any) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    } else {
                        responseObject.IsSuccess = true;
                        res.send(responseObject);
                    }
                    sql.close();
                });
            }

        });
    }

   
   public LoginWithoutSql(res: Response, params: LoginDTO) {
      
	  try
	  {
	   if(params.userName == 'testuser' && params.password == 'testuser')
	   {
	     let responseObject = new LoginResponseDTO();
		 responseObject.UserId = 1;
         responseObject.IsSuccess = true;
	     res.send(responseObject);
	   }
	   else
	  {
	     let responseObject = new LoginResponseDTO();
		 responseObject.UserId = 0;
         responseObject.IsSuccess = false;
	     res.send(responseObject)
	  }
	  
	  }
	  catch(err)
	  {
	   res.send(err);
	  }
	  

    }

    public LoginWithSql(res: Response, params: LoginDTO) {
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
                let authenticateUserQuery = `EXEC [NMS_AuthenticateUser] 
                 @UserName ='${params.userName}', @Password='${params.password}' 
                ,@PlatformId='${params.platFormId ? params.platFormId : 1}'
                ,@DeviceCategoryId='${params.deviceCategoryId ? params.deviceCategoryId : 1}'
                ,@TimeZoneId='${params.timeZoneId ? params.timeZoneId : 1}'
                ,@IonicAppVersion='${params.ionicAppVersion ? params.ionicAppVersion : ""}'
                ,@DeviceCode='${params.deviceCode ? params.deviceCode : ""}'
                ,@FcmTokenCode='${params.fcmTokenCode ? params.fcmTokenCode : ""}'
                ,@UserAgent='${params.userAgent ? params.userAgent : ""}'
                `;

                request.query(authenticateUserQuery, function (err: any, userAuth: any) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        sql.close();
                        res.send(err);
                    }
                    else {
                        if (userAuth.recordsets) {
                            userAuth = userAuth.recordsets[0];
                        }
                        let userId = userAuth[0].UserId;

                        let responseObject = new LoginResponseDTO();
                        responseObject.UserId = userId;
                        if (userId > 0)
                            responseObject.IsSuccess = true;
                        else
                            responseObject.IsSuccess = false;

                        sql.close();
                        res.send(responseObject);
                    }
                });
            }
        });


    }

  
}