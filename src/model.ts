import { Action } from "rxjs/internal/scheduler/Action";

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

export interface Machines{
    id: number;
    status: string,
    createdBy: User;
    active: boolean;
    name: string;
    dateFrom: Date;
    dateTo: Date;
}

export interface AllMachines{
    content: Machines[];
}

export interface SearchMachine{
    name: string;
    status: string,
    dateFrom: Date | null;
    dateTo: Date | null;
}

export interface MachineName{
    name: string;
}

export interface ScheduleMachine{
    id: number;
    date: string;
    time: string;
    action: string;
}

export interface ErrorMessage{
    id: number;
    action: string;
    date: string;
    errorMessage: string;
    machine: Machines;
}