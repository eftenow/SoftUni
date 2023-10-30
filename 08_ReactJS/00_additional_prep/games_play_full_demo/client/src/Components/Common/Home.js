import { useGames } from "../../Hooks/useGames.js"
import { GameItemHome } from "./GameItemHome.js";

export const Home = () => {
    const { games } = useGames();


    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {
                    games
                        ? games.map(game => <GameItemHome key={game._id} game={game} />)
                        : <p className="no-articles">No games yet</p>
                }
                {/* Display paragraph: If there is no games  */}
            </div>
        </section>
    )
}