export const OfferItem = ({ offer }) => {
    return (
        <div className="offer">
            <img src={offer.imageUrl} alt="example1" />
            <p>
                <strong>Title: </strong>
                <span className="title">{offer.title}</span>
            </p>
            <p>
                <strong>Salary:</strong>
                <span className="salary">{offer.salary}</span>
            </p>
            <a className="details-btn" href={`details/${offer._id}`}>
                Details
            </a>
        </div>
    )
}