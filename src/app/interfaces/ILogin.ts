export interface ILoginForm {
    email: string;
    password: string;
}

export interface IToken {
    accessToken: string;
    refreshToken: string;
    expire: number;
}