export const Edit = () => {

    return (
        <section id="edit-meme">
            <form id="edit-form">
                <h1>Edit Meme</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Description"
                        name="description"
                        defaultValue={
                            "                            Programming is often touted as a smart and lucrative career path.\n                            It's a job that (sometimes) offers flexibility and great benefits.\n                            But it's far from sunshine and Nyan Cat rainbows. The hours are long.\n                            The mistakes are frustrating. And your eyesight is almost guaranteed to suffer.\n                            These memes cover most of the frustration (and funny moments) of programming.\n                            At least we can laugh through the pain. \n                        "
                        }
                    />
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter Meme ImageUrl"
                        name="imageUrl"
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Edit Meme"
                    />
                </div>
            </form>
        </section>
    )
}