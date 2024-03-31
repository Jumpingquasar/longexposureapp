export async function userPostLogin(request: string): Promise<Response> {
    try {
        let response = await fetch("/api/v1/login", {method: "POST", body: request});
        return response;
    } catch (error: any) {
        console.error("Error user logging in:", error);
        throw new Error(error)
    }
}