import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

export const Movie = () => {
    const [movie, setMovie] = useState({});

    const { movieId } = useParams();

    useEffect(() => {
        setMovie(
            fetch(`https://swapi.dev/api/films/${movieId}/`)
                .then(res => res.json())
                .then(result => setMovie(result))
        )
    }, [movieId])

    return (
        <>
            <h1>Movie name: {movie.title}</h1>

            <p>Director: {movie.director}</p>
            <p>producer: {movie.producer}</p>
            <p>Release date: {movie.release_date}</p>
            
            </>
    )
}