import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String
})

export const Movie = mongoose.model('Movie', movieSchema);