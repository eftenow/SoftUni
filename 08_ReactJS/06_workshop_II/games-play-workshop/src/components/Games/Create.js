import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const Create = (
    {
        onCreate
    }
) => {
    const [gameData, setGameData] = useState({
        "title": "",
        "category": "",
        "maxLevel": "",
        "imageUrl": "",
        "summary": "",
        "comments": []
    });
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(gameData);
        onCreate(gameData);
        navigate('/catalogue');

    };

    const onChange = (e) => {
        setGameData(
            (state) => ({
                ...state,
                [e.target.name]: e.target.value
            })
        )
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={onChange}
                        value={gameData.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={onChange}
                        value={gameData.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={onChange}
                        value={gameData.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={onChange}
                        value={gameData.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary"
                        id="summary"
                        onChange={onChange}
                        value={gameData.summary} />

                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    )
}