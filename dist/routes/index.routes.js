"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Especifica la ruta inicial de mi servidor
const express_1 = require("express");
//enrutador que me permite definir rutas
const router = (0, express_1.Router)();
const index_controller_1 = require("../controllers/index.controller");
router.route('/')
    .get(index_controller_1.indexWelcome);
exports.default = router;
