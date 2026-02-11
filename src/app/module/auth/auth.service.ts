import { Role, User, UserStatus } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

//Register patient

interface IRegisterPatientPayload{
    name: string;
    email:string;
    password: string;
}

const registerPatient = async(payload: IRegisterPatientPayload)=>{
    const { name, email, password} = payload;

    const data = await auth.api.signUpEmail({
        body:{
            name,
            email,
            password,

            // default values will be set in auth.ts
            // needPasswordChange: false,
            // role: Role.PATIENT

        }
    })
    if(!data.user){
        throw new Error("Failed to register patient")
    }

    //TODO: create patient profile in transaction after sign up of patient in user model


    return data;

}

//login patient

interface ILoginUserPayload{
    email: string;
    password: string;
}

const loginUser = async(payload: ILoginUserPayload)=>{
    const {email, password} = payload;

    const data = await auth.api.signInEmail({
        body:{
            email,
            password,
        }
        
    })

    

    if(data.user.status === UserStatus.BLOCKED){
        throw new Error ("User is blocked");
    }

    if(data.user.isDeleted || data.user.status === UserStatus.DELETED){
        throw new Error("User is deleted");
    }
    return data;
}

export const AuthService ={
    registerPatient,
    loginUser,
}