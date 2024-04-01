import { FeedRequestModel, SearchRequestModel } from "../store/types/post-model";

export async function fetchPostsAsync(query : FeedRequestModel): Promise<Response> { //HomeScreen API request
    try {
        let response = await fetch("/api/v1/feed", {method: "POST", body: JSON.stringify(query)});
        return response;
    } catch (error: any) {
        console.error("Error fetching posts:", error);
        throw new Error(error);
    }
}

export async function fetchSearchAsync(query: SearchRequestModel): Promise<Response> { //SearchScreen API request
    try {
        let response = await fetch("/api/v1/search", {method: "POST", body: JSON.stringify(query)});
        return response;
    } catch (error: any) {
        console.error("Error fetching posts:", error);
        throw new Error(error);
    }
}