import express from "express";
import { createNewCube, filterCubes, getAllCubes, getOneCube } from "../services/cubeServices.js";

export const cubeRouter = express.Router();


cubeRouter.get("/catalogue", (req, res) => {
    let cubes = getAllCubes();
    const { search, from, to } = req.query;

    console.log(req.query);
    cubes = filterCubes(search, from || 1, to || 6);


    console.log(`Res : ${cubes}`);

    res.render("catalogue", { cubes });
})

cubeRouter.get("/details/:cubeId", (req, res) => {
    const { cubeId } = req.params;
    const cube = getOneCube(cubeId);

    res.render("details", { cube })
})


cubeRouter.get("/create", (req, res) => {
    res.render("create")
})

cubeRouter.post("/create", (req, res) => {
    const cubeData = req.body;
    const newCube = createNewCube(cubeData);

    res.redirect(`/cube/details/${newCube.id}`);
})
