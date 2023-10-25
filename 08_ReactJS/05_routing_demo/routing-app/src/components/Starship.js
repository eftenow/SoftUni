import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";



export const Starship = () => {
    const [starship, setStarship] = useState('');
    const { id } = useParams();

    useEffect(
        () => {
            fetch(`https://swapi.dev/api/starships/${id}`)
                .then(res => res.json())
                .then(result => setStarship(result));
        },
        [id]
    )
    console.log(starship.films);

    return (
        <ul>
            <li>Starship name: {starship.name}</li>
            <li>Starship model: {starship.model}</li>
            <li>Starship manufacturer: {starship.manufacturer}</li>
            <li>Starship cost: {starship.cost_in_credits}</li>
            <li>Starship length: {starship.length}</li>
            <li>Starship speed: {starship.max_atmosphering_speed}</li>
            <li>Starship crew: {starship.crew}</li>
            <li>
                Stared in these movies:
                {starship.films &&
                    starship.films.map((m, i) => (
                        <div key={i}>
                            <Link 
                            to={{
                                pathname: `movies/${i + 1}`,
                                state:  'aaaa' ,
                            }}
                        >
                            Movie {i + 1}
                        </Link>
                        </div>
                    ))}
            </li>

        </ul>

    )

}