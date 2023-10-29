import { Meme } from "./Meme.js"

export const Dashboard = ({ memes }) => {
    return (
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                {
                    memes
                        ? memes.map(meme => <Meme key={meme._id} meme={meme} />)
                        : <p className="no-memes">No memes in database.</p>
                }
            </div>
        </section>
    )
}