export const Create = ({ onCreate }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const offerData = Object.fromEntries(form);
        onCreate(offerData);
    }

    return (
        <section id="create">
            <div className="form" onSubmit={onSubmit}>
                <h2>Create Offer</h2>
                <form className="create-form">
                    <input
                        type="text"
                        name="title"
                        id="job-title"
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="job-logo"
                        placeholder="Company logo url"
                    />
                    <input
                        type="text"
                        name="category"
                        id="job-category"
                        placeholder="Category"
                    />
                    <textarea
                        id="job-description"
                        name="description"
                        placeholder="Description"
                        rows={4}
                        cols={50}
                        defaultValue={""}
                    />
                    <textarea
                        id="job-requirements"
                        name="requirements"
                        placeholder="Requirements"
                        rows={4}
                        cols={50}
                        defaultValue={""}
                    />
                    <input
                        type="text"
                        name="salary"
                        id="job-salary"
                        placeholder="Salary"
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    )
}