import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import status from "http-status";
import z from "zod";

interface TErrorSources {
    path: string;
    message: string;
}

export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) =>{
   if(envVars.NODE_ENV === 'development'){
        console.log("Error from global error handler: ", err);
   }
      
   const errorSource: TErrorSources[] = [];

   let statusCode: number = status.INTERNAL_SERVER_ERROR;
   let message : string = 'Internal Server Error';

   if(err instanceof z.ZodError){
    statusCode = status.BAD_REQUEST;
    message = "Zod validation error";
   }

    res.status(statusCode).json({
        success: false,
        message: message,
        error: err.message,
    })
}