import { BaseModel } from ".";

export class User {
    id?: number;
    email?: string;
    name?: string;
    beatId?: string;
}
export class MenuDTO {
    FullName = "";
    CityLoc = "";
    CurrLoc = "";
    Beat: any = [{ BeatId: "", BeatName: "", IconClassName: "" }];
    UserImage = "";
    MarkLoc = "";
}
export class NotificationDTO {
    CreatedAt: String;
    IconClassName: String;
    IsRead: boolean;
    ReferenceId: number;
    ScreenId: number;
    Title: string;
    UserNotificationId: number;
}

export class MyPointsDTO {
    CreatedAt: string;
    NewsPoints: number;
    PointsType: string;
    Title: string;
}

export class AssignmentDTO{
    AssignedByName : string;
    AssignedByProfileImage : string;
    AssignedByRole : string;
    AssignmentLat: number;
    AssignmentLong: number;
    AssignmentStatusId: number;
    AssignmentStatusName: string;
    AssignmentTitle: string;
    AssiignmentLocationTitle: string;
    BeatName: string;
    CommentCount: number;
    DeadLineAt: string;
    EventName: string;
    IsImportant: boolean;
    IsLive: boolean;
    IsRelevant: boolean;
    IsVerified: boolean;
    MediaCount: number;
    NewsCount: number;
    SlugId: number;
    SlugTitle: string;
    SourceName: string;
    UserCommentCount: number;
    UserNewsCount: number;
    NewsList :any =[];
    CommentList : any =[];

}
