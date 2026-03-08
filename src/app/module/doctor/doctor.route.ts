import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/", DoctorController.getAllDoctors);

//ToDo: add more routes for doctor module

export const DoctorRoutes = router;