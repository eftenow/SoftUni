import { useParams } from "react-router-dom";
import { getOneOffer } from "../../Services/offerServices.js";
import {  useEffect, useState } from "react";


export const Edit = ({ onEdit }) => {
    const [offer, setOffer] = useState({});
    const { offerId } = useParams();

    useEffect(
        () => {
            getOneOffer(offerId)
                .then((res => res.json()))
                .then(fetchedOffer => setOffer(fetchedOffer))
        }, [offerId])


    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form);

        onEdit(formData, offerId);
    }

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Offer</h2>
                <form className="edit-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="title"
                        id="job-title"
                        placeholder="Title"
                        defaultValue={offer?.title}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="job-logo"
                        placeholder="Company logo url"
                        defaultValue={offer?.imageUrl}
                    />
                    <input
                        type="text"
                        name="category"
                        id="job-category"
                        placeholder="Category"
                        defaultValue={offer?.category}
                    />
                    <textarea
                        id="job-description"
                        name="description"
                        placeholder="Description"
                        defaultValue={offer?.description}
                        rows={4}
                        cols={50}
                    />
                    <textarea
                        id="job-requirements"
                        name="requirements"
                        placeholder="Requirements"
                        rows={4}
                        cols={50}
                        defaultValue={offer?.requirements}
                    />
                    <input
                        type="text"
                        name="salary"
                        id="job-salary"
                        placeholder="Salary"
                        defaultValue={offer?.salary}
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    )
}