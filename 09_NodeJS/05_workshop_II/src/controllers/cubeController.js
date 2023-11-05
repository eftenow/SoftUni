import { Router } from "express";
import { Cube } from "../models/Cube.js";
import { Accessory } from "../models/Acessory.js";

export const cubeController = Router();

cubeController.get('/create', (req, res) => {
    return res.render('create');
})


cubeController.post('/create', (req, res) => {
    Cube.create(req.body)
        .then((newCube) => {
            res.redirect(`/cube/details/${newCube._id}`);

        })
})

cubeController.get('/details/:cubeId', async(req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId).populate('accessories').lean();

    return res.render('details', {cube});
})

cubeController.get('/:cubeId/attach-accessories', async(req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId).lean();
    const cubeAccessories = cube.accessories.map(x => x._id);
    const accessories = await Accessory.find({_id: { $nin: cubeAccessories }}).lean();

    return res.render('cubeAttach', {cube, accessories});
})

cubeController.post('/:cubeId/attach-accessories', async(req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await Cube.findById(cubeId);
    const selectedAccessory = req.body.accessory;

    cube.accessories.push(selectedAccessory);
    await cube.save();

    return res.redirect(`/cube/details/${cube._id}`);
})