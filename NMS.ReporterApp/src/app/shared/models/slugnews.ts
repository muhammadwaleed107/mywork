
export class SlugDetail {
    constructor() {
        this.ViewAll = false;
    }

    BeatName?: string;
    IsImportant?: boolean;
    IsLive?: boolean;
    IsRelevant?: boolean;
    IsVerified?: boolean;
    MediaCount?: number;
    NewsCount?: number;
    NewsList?: SlugNews[];
    SlugId?: number;
    SlugTitle?: string;
    ViewAll?: boolean;

}


export class SlugNews {
    CreatedAt?: string;
    CreatedByFirstName?: string;
    ModifiedAt?: string;
    ModifiedByFirstName?: string;
    NewsId?: number;
    SlugId?: number;
    TemplateId?: number;
    TemplateShortCode?: string;
    body?: string;
}