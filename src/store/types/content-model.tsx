export interface ContentEntity{
    contentID: string,
    contentURI: string,
    contentType: ContentType
}

export enum ContentType{
    Video,
    Image
}