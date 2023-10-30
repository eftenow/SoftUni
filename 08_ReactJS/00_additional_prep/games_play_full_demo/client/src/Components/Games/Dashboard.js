import { useGames } from "../../Hooks/useGames.js"
import { GameItem } from "./GameItem.js";

export const Dashboard = () => {
    const { games } = useGames();

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {
                games
                    ? games.map(game => <GameItem key={game._id} game={game} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }

        </section>
    )
}