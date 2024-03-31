import { ContentEntity } from "./content-model";

export interface PostEntity {
    userName: string;
    contents: ContentEntity[];
    profilePhoto: string;
    location?: string;
}