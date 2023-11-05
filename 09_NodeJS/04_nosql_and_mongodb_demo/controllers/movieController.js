import { Router } from "express";
import { Movie } from '../Models/Movie.js';

export const movieRouter = Router();

movieRouter.get('/', (req, res) => {
    return res.render('home');
})

movieRouter.get('/movies', async (req, res) => {
    const movies = await Movie.find().lean();
    return res.render('movies', { movies: movies });
});


movieRouter.get('/create', (req, res) => {
    return res.render('create');
})

movieRouter.post('/create', (req, res) => {
    const movieData = req.body;

    const newMovie = new Movie(movieData);
    newMovie.save();

    res.redirect('/movies');
})