import { NextFunction, Request, Response, Router } from "express";
import z from "zod";

export const validateRequest = (zodSchema: z.ZodObject) => {
    return ( req: Request, res: Response, next: NextFunction) =>{
        const parseResult = zodSchema.safeParse(req.body)

        if(!parseResult.success){
            next(parseResult.error)
        }
        
        //sanitizing the data

        req.body = parseResult.data;

        next();
    }
}