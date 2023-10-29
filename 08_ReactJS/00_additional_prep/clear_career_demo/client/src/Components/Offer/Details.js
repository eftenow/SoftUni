import { Link, useParams } from "react-router-dom"
import { getOneOffer } from "../../Services/offerServices.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext.js";

export const Details = ({ onDelete }) => {
    const [offer, setOffer] = useState({});
    const { offerId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getOneOffer(offerId)
            .then(res => res.json())
            .then(currentOffer => setOffer(currentOffer))
    }, [offerId])


    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={offer.imageUrl} alt="example1" />
                <p id="details-title">{offer.title}</p>
                <p id="details-category">
                    Category: <span id="categories">{offer.category}</span>
                </p>
                <p id="details-salary">
                    Salary: <span id="salary-number">{offer.salary}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Description</h4>
                        <span>
                            {offer.description}
                        </span>
                    </div>
                    <div id="details-requirements">
                        <h4>Requirements</h4>
                        <span>
                            {offer.requirements}
                        </span>
                    </div>
                </div>
                <p>
                    Applications: <strong id="applications">1</strong>
                </p>
                <div id="action-buttons">
                    {
                        user._id === offer._ownerId
                            ? <>
                                <Link to={`/edit/${offer._id}`} id="edit-btn">
                                    Edit
                                </Link>
                                <a href="#" id="delete-btn" onClick={() => onDelete(offer._id)}>
                                    Delete
                                </a>
                            </>

                            : <Link to="apply" id="apply-btn">
                                Apply
                            </Link>
                    }


                </div>
            </div>
        </section>
    )
}