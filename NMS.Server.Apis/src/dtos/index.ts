export class SignOutDTO {
    UserId?: number;
    UserDeviceId?: number;
    FcmTokenCode?: string;
    UserAgent?: string;
}
export class SignOutResponseDTO {
    IsSuccess?: boolean;
}


export class LoginDTO {
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

export class LoginResponseDTO {

    UserId?: number;
    IsSuccess?: boolean;
}

export class UserMetaDataResponseDTO {

    User: any = {};
    Roles: RoleDTO[] = [];
    Menues: any[] = [];
    Beats: any[] = [];
    public Templates: any[] = [];
    public CameraMan: any[] = [];
    public Source: any[] = [];
    public Reason: any = [];

}

export class RoleDTO {
    public RoleId?: number;
    public RoleName?: string;
    public Sequence?: number;
    public Menues?: any[] = [];
}

export class UserSlugRequestDTO {

    BeatId?: number;
    UserId?: number;
}


export class UserSlugResponseDTO {

    Slugs?: any[] = [];
    IsSuccess?: boolean;
}

export class NewsBySlugRequestDTO {

    SlugId?: number;
    NewsOffset?: number;
}


export class NewsBySlugResponseDTO {

    News?: any[] = [];
    IsSuccess?: boolean;
}


export class MediaResponseDTO {

    Media?: any[] = [];
    IsSuccess?: boolean;
}

export class SlugNewsRequestDTO {

    UserId?: number;
    SlugOffset?: string;
    BeatIds?: string;
    LocationIds?: string;
    TemplateIds?: string;
    SearchKeyWord?: string;
}


export class SlugNewsResponseDTO {

    SlugNews?: any[] = [];
    IsSuccess?: boolean;
}



export class AddNewsRequestDTO {

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


export class AddNewsResponseDTO {

    News?: any[] = [];
    IsSuccess?: boolean;
}

export class ApiResponse {
    IsSuccess?: boolean = false;
    Data?: any = null;
    Message?: string = "";
    StatusCode?: number = 200;
}


export class ArchivalMediaRequestDTO {

    SeachKeyword?: string;
    ResourceType?: number;
    FromDate?: string;
    ToDate?: string;
    ResourceOffset?: number;
}


export class ArchivalMediaResponseDTO {

    Resources?: any[] = [];
    IsSuccess?: boolean;
}


export class AssignmentByUserRequestDTO {

    UserId?: number;
    AssignmentStatusId?: number;
}


export class AssignmentByUserResponseDTO {

    Assignments?: any[] = [];
    IsSuccess?: boolean;
}

export class GuestAssignmentByUserRequestDTO {

    UserId?: number;
}


export class GuestAssignmentByUserResponseDTO {

    GuestAssignments?: any[] = [];
    IsSuccess?: boolean;
}

export class UpdateAssignmentRequestDTO {

    AssignmentId?: number;
    AssignmentStatusId?: number;
}


export class UpdateAssignmentResponseDTO {

    Assignment?: any[] = [];
    IsSuccess?: boolean;
}


export class GetChatRequestDTO {

    TableId?: number;
    ReferenceId?: number;
    OffSet?: number;
}


export class GetChatResponseDTO {

    ChatList?: any[] = [];
    IsSuccess?: boolean;
}
export class AddChatRequestDTO {

    UserId?: number;
    TableId?: number;
    ReferenceId?: number;
    ScreenId?: number;
    Message?: number;


}


export class AddChatResponseDTO {

    Chat?: any[] = [];
    IsSuccess?: boolean;
}

export class UpdateGuestAssignmentRequestDTO {

    GuestAssignmentId?: number;
    GuestAssignmentStatusId?: number;
    UserId?: number;
    SourceId?: number;
    ReasonId?: number;
    Message?: string;


}


export class UpdateGuestAssignmentResponseDTO {

    GuestAssignment?: any[] = [];
    IsSuccess?: boolean;
}

export class AddEventRequestDTO {

    UserId?: number;
    SlugTitle?: string;
    ScreenId?: number;
    EventTitle?: string;
    EventDate?: string;

}


export class AddEventResponseDTO {

    Event?: any[] = [];
    IsSuccess?: boolean;
}

export class GetUserNotificationRequestDTO {

    UserId?: number;
}


export class GetUserNotificationResponseDTO {

    UserNotifications?: any[] = [];
    IsSuccess?: boolean;
}


export class GetUserPointsDetailRequestDTO {

    UserId?: number;
}


export class GetUserPointsDetailResponseDTO {

    UserPointDetail?: any[] = [];
    IsSuccess?: boolean;
}