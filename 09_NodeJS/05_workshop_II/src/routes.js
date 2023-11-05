import { Router } from "express";
import { commonController } from "./controllers/commonController.js";
import { cubeController } from "./controllers/cubeController.js";
import { accessoryController } from "./controllers/accessoryController.js";

export const router = Router();

router.use('/', commonController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
