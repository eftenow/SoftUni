import { useEffect, useState } from "react";

const url = "http://localhost:3030/data/games";

export const useGames = () => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState({});

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(fetchedGames => setGames(fetchedGames))
        }, []
    )

    const getGame = async(gameId) => {
        const game = await fetch(`${url}/${gameId}`);
       
        return game;
    }

    return { games, getGame }
}