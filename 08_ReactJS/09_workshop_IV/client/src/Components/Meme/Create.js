import { useState } from "react"

export const Create = ({ onCreate }) => {
    const [data, setData] = useState({
        "title": "",
        "description": "",
        "imageUrl": ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        onCreate(data);
        
    }

    const onChange = (e) => {
        e.preventDefault();
        setData(
            (state) => ({
                ...state,
                [e.target.name]: e.target.value
            })
        )
    }

    return (
        <section id="create-meme">
            <form id="create-form" onSubmit={onSubmit} >
                <div className="container">
                    <h1>Create Meme</h1>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        value={data.title}
                        onChange={onChange}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Description"
                        name="description"
                        value={data.description}
                        onChange={onChange}

                    />
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter meme ImageUrl"
                        name="imageUrl"
                        value={data.imageUrl}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Create Meme"
                    />
                </div>
            </form>
        </section>
    )
}