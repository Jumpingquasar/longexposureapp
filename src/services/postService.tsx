export async function fetchPostsAsync(): Promise<Response> {
    try {
        let response = await fetch("/api/v1/feed", {method: "GET"});
        return response;
    } catch (error: any) {
        console.error("Error fetching posts:", error);
        throw new Error(error);
    }
}