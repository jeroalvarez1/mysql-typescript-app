//Especifica la ruta inicial de mi servidor
import { Router } from "express";
//enrutador que me permite definir rutas
const router = Router();

import { indexWelcome } from "../controllers/index.controller";

router.route('/')
    .get(indexWelcome);

export default router;