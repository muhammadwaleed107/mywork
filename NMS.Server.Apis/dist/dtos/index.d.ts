export declare class SignOutDTO {
    UserId?: number;
    UserDeviceId?: number;
    FcmTokenCode?: string;
    UserAgent?: string;
}
export declare class SignOutResponseDTO {
    IsSuccess?: boolean;
}
export declare class LoginDTO {
    userName?: string;
    password?: string;
    platFormId?: string;
    deviceCategoryId?: string;
    timeZoneId?: string;
    ionicAppVersion?: string;
    deviceCode?: string;
    fcmTokenCode?: string;
    userAgent?: string;
}
export declare class LoginResponseDTO {
    UserId?: number;
    IsSuccess?: boolean;
}
export declare class UserMetaDataResponseDTO {
    User: any;
    Roles: RoleDTO[];
    Menues: any[];
    Beats: any[];
    Templates: any[];
    CameraMan: any[];
    Source: any[];
    Reason: any;
}
export declare class RoleDTO {
    RoleId?: number;
    RoleName?: string;
    Sequence?: number;
    Menues?: any[];
}
export declare class UserSlugRequestDTO {
    BeatId?: number;
    UserId?: number;
}
export declare class UserSlugResponseDTO {
    Slugs?: any[];
    IsSuccess?: boolean;
}
export declare class NewsBySlugRequestDTO {
    SlugId?: number;
    NewsOffset?: number;
}
export declare class NewsBySlugResponseDTO {
    News?: any[];
    IsSuccess?: boolean;
}
export declare class MediaResponseDTO {
    Media?: any[];
    IsSuccess?: boolean;
}
export declare class SlugNewsRequestDTO {
    UserId?: number;
    SlugOffset?: string;
    BeatIds?: string;
    LocationIds?: string;
    TemplateIds?: string;
    SearchKeyWord?: string;
}
export declare class SlugNewsResponseDTO {
    SlugNews?: any[];
    IsSuccess?: boolean;
}
export declare class AddNewsRequestDTO {
    SlugId?: number;
    BeatId?: number;
    SlugTitle?: string;
    IsImportant?: boolean;
    UserId?: number;
    CameramanId?: number;
    TemplateId?: number;
    ScreenId?: number;
    Body?: string;
    UserAgent?: string;
}
export declare class AddNewsResponseDTO {
    News?: any[];
    IsSuccess?: boolean;
}
export declare class ApiResponse {
    IsSuccess?: boolean;
    Data?: any;
    Message?: string;
    StatusCode?: number;
}
export declare class ArchivalMediaRequestDTO {
    SeachKeyword?: string;
    ResourceType?: number;
    FromDate?: string;
    ToDate?: string;
    ResourceOffset?: number;
}
export declare class ArchivalMediaResponseDTO {
    Resources?: any[];
    IsSuccess?: boolean;
}
export declare class AssignmentByUserRequestDTO {
    UserId?: number;
    AssignmentStatusId?: number;
}
export declare class AssignmentByUserResponseDTO {
    Assignments?: any[];
    IsSuccess?: boolean;
}
export declare class GuestAssignmentByUserRequestDTO {
    UserId?: number;
}
export declare class GuestAssignmentByUserResponseDTO {
    GuestAssignments?: any[];
    IsSuccess?: boolean;
}
export declare class UpdateAssignmentRequestDTO {
    AssignmentId?: number;
    AssignmentStatusId?: number;
}
export declare class UpdateAssignmentResponseDTO {
    Assignment?: any[];
    IsSuccess?: boolean;
}
export declare class GetChatRequestDTO {
    TableId?: number;
    ReferenceId?: number;
    OffSet?: number;
}
export declare class GetChatResponseDTO {
    ChatList?: any[];
    IsSuccess?: boolean;
}
export declare class AddChatRequestDTO {
    UserId?: number;
    TableId?: number;
    ReferenceId?: number;
    ScreenId?: number;
    Message?: number;
}
export declare class AddChatResponseDTO {
    Chat?: any[];
    IsSuccess?: boolean;
}
export declare class UpdateGuestAssignmentRequestDTO {
    GuestAssignmentId?: number;
    GuestAssignmentStatusId?: number;
    UserId?: number;
    SourceId?: number;
    ReasonId?: number;
    Message?: string;
}
export declare class UpdateGuestAssignmentResponseDTO {
    GuestAssignment?: any[];
    IsSuccess?: boolean;
}
export declare class AddEventRequestDTO {
    UserId?: number;
    SlugTitle?: string;
    ScreenId?: number;
    EventTitle?: string;
    EventDate?: string;
}
export declare class AddEventResponseDTO {
    Event?: any[];
    IsSuccess?: boolean;
}
export declare class GetUserNotificationRequestDTO {
    UserId?: number;
}
export declare class GetUserNotificationResponseDTO {
    UserNotifications?: any[];
    IsSuccess?: boolean;
}
export declare class GetUserPointsDetailRequestDTO {
    UserId?: number;
}
export declare class GetUserPointsDetailResponseDTO {
    UserPointDetail?: any[];
    IsSuccess?: boolean;
}
