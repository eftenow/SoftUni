import express from "express";
import { commonRouter } from "./controllers/commonController.js";
import { cubeRouter } from "./controllers/cubeController.js";


export const router = express.Router();


router.use('/', commonRouter);

router.use('/cube', cubeRouter);