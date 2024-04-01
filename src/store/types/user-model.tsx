export interface UserProfileEntity {
    Email: string;
    isGuest: boolean;
    encryptedFormData: string;
}

export interface LoginRequestEntity {
    Email: string;
    Password: string;
}

export interface LoginResponseEntity {
    response: Response;
    encryptedFormData: string;
}