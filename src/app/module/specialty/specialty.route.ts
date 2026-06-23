// import { Router } from "express";
// import { SpecialtyController } from "./specialty.controller";

// const router = Router();

// router.post('/', SpecialtyController.createSpecialty);
// router.get('/', SpecialtyController.getAllSpecialties);
// router.delete('/:id', SpecialtyController.deleteSpecialty);

// export const SpecialtyRoutes = router;


import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
// import { checkAuth } from "../../middleware/checkAuth";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.post('/', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.createSpecialty);
router.get('/', checkAuth(Role.PATIENT), SpecialtyController.getAllSpecialties);
router.delete('/:id', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.deleteSpecialty);

export const SpecialtyRoutes = router;