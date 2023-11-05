import { Router } from "express";
import { Cube } from "../models/Cube.js";

export const commonController = Router();

commonController.get('/', async (req, res) => {
    const cubes = await Cube.find().lean();

    return res.render('home', { cubes });
})

commonController.get('/about', (req, res) => {
    return res.render('about');
})