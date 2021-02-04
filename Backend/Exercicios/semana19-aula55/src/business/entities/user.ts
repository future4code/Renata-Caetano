import { type } from "os"
import { task } from "./task"

export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInputDTO={
name:string,
nickname:string,
email:string,
password:string,
role:string

}


export const convertUserRoleToString =(role:USER_ROLES):string=>{
   return role === USER_ROLES.ADMIN? 'admin':'normal';
}

export const convertStringToUserRole=(role:string):USER_ROLES=>{
   if(role==='normal'){
      return USER_ROLES.NORMAL;
   }
   return USER_ROLES.ADMIN;
}

