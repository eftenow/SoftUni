import express from "express";

export const commonRouter = express.Router();


commonRouter.get("/", (req, res) => {
    res.render("about")
})