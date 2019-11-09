"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignOutDTO {
}
exports.SignOutDTO = SignOutDTO;
class SignOutResponseDTO {
}
exports.SignOutResponseDTO = SignOutResponseDTO;
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
class LoginResponseDTO {
}
exports.LoginResponseDTO = LoginResponseDTO;
class UserMetaDataResponseDTO {
    constructor() {
        this.User = {};
        this.Roles = [];
        this.Menues = [];
        this.Beats = [];
        this.Templates = [];
        this.CameraMan = [];
        this.Source = [];
        this.Reason = [];
    }
}
exports.UserMetaDataResponseDTO = UserMetaDataResponseDTO;
class RoleDTO {
    constructor() {
        this.Menues = [];
    }
}
exports.RoleDTO = RoleDTO;
class UserSlugRequestDTO {
}
exports.UserSlugRequestDTO = UserSlugRequestDTO;
class UserSlugResponseDTO {
    constructor() {
        this.Slugs = [];
    }
}
exports.UserSlugResponseDTO = UserSlugResponseDTO;
class NewsBySlugRequestDTO {
}
exports.NewsBySlugRequestDTO = NewsBySlugRequestDTO;
class NewsBySlugResponseDTO {
    constructor() {
        this.News = [];
    }
}
exports.NewsBySlugResponseDTO = NewsBySlugResponseDTO;
class MediaResponseDTO {
    constructor() {
        this.Media = [];
    }
}
exports.MediaResponseDTO = MediaResponseDTO;
class SlugNewsRequestDTO {
}
exports.SlugNewsRequestDTO = SlugNewsRequestDTO;
class SlugNewsResponseDTO {
    constructor() {
        this.SlugNews = [];
    }
}
exports.SlugNewsResponseDTO = SlugNewsResponseDTO;
class AddNewsRequestDTO {
}
exports.AddNewsRequestDTO = AddNewsRequestDTO;
class AddNewsResponseDTO {
    constructor() {
        this.News = [];
    }
}
exports.AddNewsResponseDTO = AddNewsResponseDTO;
class ApiResponse {
    constructor() {
        this.IsSuccess = false;
        this.Data = null;
        this.Message = "";
        this.StatusCode = 200;
    }
}
exports.ApiResponse = ApiResponse;
class ArchivalMediaRequestDTO {
}
exports.ArchivalMediaRequestDTO = ArchivalMediaRequestDTO;
class ArchivalMediaResponseDTO {
    constructor() {
        this.Resources = [];
    }
}
exports.ArchivalMediaResponseDTO = ArchivalMediaResponseDTO;
class AssignmentByUserRequestDTO {
}
exports.AssignmentByUserRequestDTO = AssignmentByUserRequestDTO;
class AssignmentByUserResponseDTO {
    constructor() {
        this.Assignments = [];
    }
}
exports.AssignmentByUserResponseDTO = AssignmentByUserResponseDTO;
class GuestAssignmentByUserRequestDTO {
}
exports.GuestAssignmentByUserRequestDTO = GuestAssignmentByUserRequestDTO;
class GuestAssignmentByUserResponseDTO {
    constructor() {
        this.GuestAssignments = [];
    }
}
exports.GuestAssignmentByUserResponseDTO = GuestAssignmentByUserResponseDTO;
class UpdateAssignmentRequestDTO {
}
exports.UpdateAssignmentRequestDTO = UpdateAssignmentRequestDTO;
class UpdateAssignmentResponseDTO {
    constructor() {
        this.Assignment = [];
    }
}
exports.UpdateAssignmentResponseDTO = UpdateAssignmentResponseDTO;
class GetChatRequestDTO {
}
exports.GetChatRequestDTO = GetChatRequestDTO;
class GetChatResponseDTO {
    constructor() {
        this.ChatList = [];
    }
}
exports.GetChatResponseDTO = GetChatResponseDTO;
class AddChatRequestDTO {
}
exports.AddChatRequestDTO = AddChatRequestDTO;
class AddChatResponseDTO {
    constructor() {
        this.Chat = [];
    }
}
exports.AddChatResponseDTO = AddChatResponseDTO;
class UpdateGuestAssignmentRequestDTO {
}
exports.UpdateGuestAssignmentRequestDTO = UpdateGuestAssignmentRequestDTO;
class UpdateGuestAssignmentResponseDTO {
    constructor() {
        this.GuestAssignment = [];
    }
}
exports.UpdateGuestAssignmentResponseDTO = UpdateGuestAssignmentResponseDTO;
class AddEventRequestDTO {
}
exports.AddEventRequestDTO = AddEventRequestDTO;
class AddEventResponseDTO {
    constructor() {
        this.Event = [];
    }
}
exports.AddEventResponseDTO = AddEventResponseDTO;
class GetUserNotificationRequestDTO {
}
exports.GetUserNotificationRequestDTO = GetUserNotificationRequestDTO;
class GetUserNotificationResponseDTO {
    constructor() {
        this.UserNotifications = [];
    }
}
exports.GetUserNotificationResponseDTO = GetUserNotificationResponseDTO;
class GetUserPointsDetailRequestDTO {
}
exports.GetUserPointsDetailRequestDTO = GetUserPointsDetailRequestDTO;
class GetUserPointsDetailResponseDTO {
    constructor() {
        this.UserPointDetail = [];
    }
}
exports.GetUserPointsDetailResponseDTO = GetUserPointsDetailResponseDTO;
