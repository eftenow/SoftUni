import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Starships = () => {
    const [selectedStarship, setSelectedStarship] = useState('');
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            fetch("https://swapi.dev/api/starships")
                .then(res => res.json())
                .then(result => {
                    setStarships(result.results)
                    setLoading(false);
                })
        }, [selectedStarship]
    )

    return (
        <>
            <h1>Starships</h1>
            {loading ?
                <h3>Loading Starships...</h3>
                : (
                    <ul className="list-group">
                        {starships.map((starship, index) => (
                            <li key={starship.name} className="list-group-item">
                                <p>
                                    <Link to={`${index+2}`}>

                                        Starship name: {starship.name} </Link>
                                    Starship cost: {starship.cost_in_credits}
                                </p>
                            </li>
                        ))}
                    </ul>
                )
            }</>

    )
}