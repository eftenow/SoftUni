import { Link, useParams } from "react-router-dom"
import { getOneGame } from "../../Services/gameService.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext.js";

export const Details = ({ onDeleteGame }) => {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const { user } = useContext(UserContext);
    const isOwner = user._id === game._ownerId;

    useEffect(() => {
        getOneGame(gameId)
            .then((game) => setGame(game))
    }, [gameId])

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/edit/${game._id}`} className="button">
                            Edit
                        </Link>
                        <a href="#" className="button" onClick={() => onDeleteGame(game._id)}>
                            Delete
                        </a>
                    </div>}
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        defaultValue={""}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}