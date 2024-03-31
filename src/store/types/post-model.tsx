import { ContentEntity } from "./content-model";

export interface PostEntity {
    userName: string;
    contents: ContentEntity[];
    profilePhoto: string;
    location?: string;
}

export interface PostRequestModel {    
    itemStart: number;
}

export interface FeedRequestModel extends PostRequestModel {
    feedIterationSize: number;
}

export interface SearchRequestModel extends PostRequestModel  {
    searchIterationSize: number;
}