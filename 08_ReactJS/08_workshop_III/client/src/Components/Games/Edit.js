import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneGame } from "../../Services/gameService.js";

export const Edit = ({ onEditGame }) => {
    const [editedData, setEditedData] = useState({
        "title": '',
        "category": '',
        "maxLevel": '',
        "imageUrl": '',
        "summary": '',
    });
    const { gameId } = useParams();

    useEffect(() => {
        getOneGame(gameId)
            .then((game) => setEditedData(game))
    }, [gameId])

    const onChange = (e) => {
        setEditedData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onEditGame(editedData);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={editedData.title}
                        onChange={onChange}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={editedData.category}
                        onChange={onChange}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={editedData.maxLevel}
                        onChange={onChange}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={editedData.imageUrl}
                        onChange={onChange}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                    name="summary"
                    id="summary"
                    value={editedData.summary}
                    onChange={onChange}
                    />

                   <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}