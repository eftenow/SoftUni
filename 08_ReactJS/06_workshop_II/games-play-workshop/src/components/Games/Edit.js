import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = ({ games, onEdit }) => {
    const { gameId } = useParams();
    const currentGame = games?.find(g => g._id == gameId);
    const navigate = useNavigate();

    const [gameData, setGameData] = useState({
        "title": currentGame?.title,
        "category": currentGame?.category,
        "maxLevel": currentGame?.maxLevel,
        "imageUrl": currentGame?.imageUrl,
        "summary": currentGame?.summary,
        "comments": currentGame?.comments || []
    });

    const onChange = (e) => {
        setGameData(
            (state) => ({
                ...state,
                [e.target.name]: e.target.value
            })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit(gameData, gameId);

        navigate(`/details/${gameId}`)
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text"
                        id="title"
                        name="title"
                        onChange={onChange}
                        value={gameData.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={onChange}
                        value={gameData.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        onChange={onChange}
                        value={gameData.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChange}
                        value={gameData.imageUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={onChange}
                        value={gameData.summary}
                    />

                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}