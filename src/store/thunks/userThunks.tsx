import { userPostLogin } from "../../services/authService";
import { LoginRequestEntity } from "../types/user-model";

export async function loginRequest(formData: LoginRequestEntity){
    const loginResponse = await userPostLogin(JSON.stringify({ formData }));
    return loginResponse;
}