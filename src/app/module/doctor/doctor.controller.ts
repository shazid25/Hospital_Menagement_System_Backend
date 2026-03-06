import status from "http-status";
import { DoctorService } from "./doctor.service"
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { Request, Response } from "express";

const getAllDoctors =  catchAsync (
        async (req: Request , res: Response ) => {
        const result = await DoctorService.getAllDoctors();

        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctors fetched successfully",
            data: result,
        })
    }
)

export const DoctorController = {
    getAllDoctors
}