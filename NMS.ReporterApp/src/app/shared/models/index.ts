
export * from './user';
export * from './slugnews';
export * from './guest-info';

export class BaseModel {
    constructor() {
        this.id = 0;
        this.createdAt = "";
        this.createdBy = "";

    }
    id?: number;
    createdAt?: string;
    createdBy?: string;
}


export class ApiResponse {
    IsSuccess?: boolean = false;
    Data?: any = null;
    Message?: string = "";
    StatusCode?: number;
}

export class SlugNewsPayload {
    constructor() {
        this.UserId = 1;
        this.SlugOffset = "";
        this.BeatIds = "";
        this.LocationIds = "";
        this.TemplateIds = "";
        this.SearchKeyWord = "";
    }
    UserId?: number;
    SlugOffset?: string;
    BeatIds?: string;
    LocationIds?: string;
    TemplateIds?: string;
    SearchKeyWord?: string;


}