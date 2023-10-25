import { Link } from "react-router-dom";

export const LatestGameItem = ({ gameData }) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={gameData.imageUrl} />
            </div>
            <h3>{gameData.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`details/${gameData._id}`} className="btn details-btn">
                    Details
                </Link>

            </div>
        </div>
    )
}