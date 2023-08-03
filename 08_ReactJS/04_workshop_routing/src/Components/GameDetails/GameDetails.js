import { Link, useNavigate, useParams } from "react-router-dom";
import { getSpecificGame } from "../../Services/gameServices";
import { useEffect, useState } from "react";

const GameDetails = ({onDeleteGame}) => {
    const navigate = useNavigate();
    const [game, setGame] = useState('');
    const { gameId } = useParams();
    
    useEffect(() => {
        const fetchGame = async () => {
            const fetchedGame = await getSpecificGame(gameId);
            setGame(fetchedGame);
        }
        fetchGame();
    }, [gameId]);

    const submitDelete = (id) =>{
        console.log('aaaa');
        onDeleteGame(id);
        navigate('/catalogue');
    }


    return (

        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.image} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.description}
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
                <div className="buttons">
                    <Link to={`/catalogue/${game._id}/edit`} className="button">Edit</Link>
                    <a onClick={()=> submitDelete(game._id)} to="/catalogue" className="button">Delete</a>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section>
    );
}

export default GameDetails;