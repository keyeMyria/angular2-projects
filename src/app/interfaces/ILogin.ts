export interface ILoginForm {
    username: string;
    password: string;
}

export interface IToken {
    accessToken: string;
    refreshToken: string;
    expire: number;
}