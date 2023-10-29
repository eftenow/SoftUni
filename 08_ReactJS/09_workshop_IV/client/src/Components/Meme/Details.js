import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getOneMeme } from "../../Services/memeServices.js";

export const Details = () => {
    const [meme, setMeme] = useState({});
    const { memeId } = useParams();

    useEffect(
        () => {
            getOneMeme(memeId)
                .then((curretnMeme) => setMeme(curretnMeme.data))
        }, []
    )

    return (
        <section id="meme-details">
            <h1>Meme Title: {meme.title}</h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src={meme.imageUrl} />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        {meme.description}
                    </p>

                    <Link className="button warning" to={`/edit/${memeId}`}>
                        Edit
                    </Link>
                    <button className="button danger">Delete</button>
                </div>
            </div>
        </section>
    )
}