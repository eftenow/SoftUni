import { OfferItem } from "../Offer/OfferItem.js";

export const Dashboard = ({ offers }) => {
    return (
        <section id="dashboard">
            <h2>Job Offers</h2>
            {
                offers 
                ? offers.map(x => <OfferItem key={x._id} offer={x} />)
                : <h2>No offers yet.</h2>
            }
            
        </section>
    )
}