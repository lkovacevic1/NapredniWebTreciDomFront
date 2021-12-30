export interface Role{
    id: number;
    name: string;
}

export interface User{
    id: number;
    name: string;
    lastName: string;
    mail: string;
    password: string;
    roles: Role[];
}

export interface UserInfo{
    id: number;
    name: string;
    lastName: string;
    mail: string;
    roles: Role[];
}

export interface UserLoginInfo{
    mail: string;
    password: string;
}

export interface UserResponse{
    jwt: string;
}

export interface AllUsersResponse{
    content: UserInfo[];
}

export interface UpdateUser{
    id: number,
    name: string;
    lastName: string;
    mail: string;
    roles: Role[];
}

export interface InsertUser{
    name: string;
    lastName: string;
    mail: string;
    password: string;
    roles: Role[];
}

export interface UserMailToken{
    sub: string;
    exp: number;
    iat: number;
}