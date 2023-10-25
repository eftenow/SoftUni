import { Link } from "react-router-dom"

export const GameItem = ({ gameData }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={gameData.imageUrl} />
                <h6>{gameData.category}</h6>
                <h2>{gameData.title}</h2>
                <Link to={`/details/${gameData._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    )
}