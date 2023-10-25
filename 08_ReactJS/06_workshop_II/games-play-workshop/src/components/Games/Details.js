import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

export const Details = ({ games, onSubmit }) => {
    const [comment, setComment] = useState({
        "username": "",
        "text": ""
    });

    const { gameId } = useParams();
    const game = games?.find(g => g._id === gameId);

    const commentHandler = (e) => {
        e.preventDefault();

        onSubmit(comment, gameId);
        setComment(
            {"username": "", "text": ""}
        )
    }

    const onChange = (e) => {
        setComment(commentState => ({
            ...commentState,
            [e.target.name]: e.target.value
        })

        )
    }



    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game?.imageUrl} />
                    <h1>{game?.title}</h1>
                    <span className="levels">MaxLevel: {game?.maxLevel}</span>
                    <p className="type">{game?.category}</p>
                </div>
                <p className="text">
                    {game?.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>

                    {game?.comments
                        ?
                        <ul>
                            {game.comments.map(comment =>
                                <li key={comment.id} className="comment">
                                    {console.log(comment)}
                                    <p>Author: {comment.username}</p>
                                    <p>Content: {comment.text}</p>
                                </li>
                            )}
                        </ul>
                        :
                        <p className="no-comment">No comments.</p>
                    }


                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/edit/${gameId}`} className="button">
                        Edit
                    </Link>
                    <Link to="" className="button">
                        Delete
                    </Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentHandler}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={comment.username}
                        onChange={onChange}
                    />

                    <textarea
                        name="text"
                        placeholder="Comment......"
                        value={comment.text}
                        onChange={onChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                    />
                </form>
            </article>
        </section>
    )
}