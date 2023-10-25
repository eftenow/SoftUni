import { GameItem } from "./GameItem.js"


export const Catalogue = ({ games }) => {
    console.log(games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {
                games
                    ? games.map(gameData => <GameItem key={gameData._id} gameData={gameData} />)
                    : < h3 className="no-articles">No articles yet</h3>

            }

        </section >

    )
}