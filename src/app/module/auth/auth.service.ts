import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

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

export const AuthService ={
    registerPatient,
}