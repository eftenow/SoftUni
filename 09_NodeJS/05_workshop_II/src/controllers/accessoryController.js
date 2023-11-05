import { Router } from "express";
import { Accessory } from "../models/Acessory.js";

export const accessoryController = Router();

accessoryController.get('/create', (req, res) =>{
    res.render('accessory/create')
})

accessoryController.post('/create', (req, res) =>{
    const newAccessory = Accessory.create(req.body);
    res.redirect('/');
})