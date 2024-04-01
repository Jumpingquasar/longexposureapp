import { LoginResponseEntity } from "../store/types/user-model";
import { encryptString } from "../utils/aes";

export async function userPostLogin(request: string): Promise<LoginResponseEntity> { //Login API request
    try {
        let encryptedFormData = encryptString(request);
        let response = await fetch("/api/v1/login", {method: "POST", body: encryptedFormData});
        return {response, encryptedFormData};
    } catch (error: any) {
        console.error("Error user logging in:", error);
        throw new Error(error)
    }
}