export async function userPostLogin(request: string): Promise<boolean> {
    try {
        let response = await fetch("/api/v1/login", {method: "POST", body: request});
        if (response.ok)
            return response.ok;
        else
            return false;
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
}