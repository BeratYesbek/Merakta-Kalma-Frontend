import { User } from "./user";

export interface AccessToken {
    accessToken: string;
    expire: Date;
    user : User;
}