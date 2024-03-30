export interface UserProfileEntity {
    Email: string;
    isGuest: boolean;
}

export interface LoginRequestEntity {
    Email: string;
    Password: string;
}