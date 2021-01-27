import { LikeDetail } from "./LikeDetail";

export interface UserDetail
{
     id : string;
     fullName : string;
     email : string;
     userName : string;
     mobileNumber : string;
     isAdmin : boolean;
     likes : Array<LikeDetail>;
}