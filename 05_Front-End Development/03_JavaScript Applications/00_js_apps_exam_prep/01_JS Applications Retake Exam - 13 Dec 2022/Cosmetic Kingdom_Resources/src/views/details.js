import { html } from '../../node_modules/lit-html/lit-html.js';
import { buyProductReq, buysForSpecificUser, deleteProduct, getProductBuys, getProductDetails } from '../services/productServices.js';
import { getUserId, userIsLoggedIn } from '../services/userServices.js';


const detailsTemplate = (product, isOwner, isAuthorized, ctx, buys, alreadyBought) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${buys}</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner
            ? html`<a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a @click="${(ev) => onDeleteHandler(ev, ctx)}" href="#" id="delete-btn">Delete</a>`
        : ''}

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${isAuthorized && !isOwner && !alreadyBought
            ? html`<a href="#" id="buy-btn" @click="${(ev) => onBuyHandler(ev, ctx)}">Buy</a>`
        : ''}
        </div>
    </div>
</section>`

export async function showDetails(ctx) {
    const currentUserId = getUserId();
    const productId = ctx.params.id;
    const currentProduct = await getProductDetails(productId);
    let isOwner = null;
    const isAuthorized = userIsLoggedIn();
    let productBuys = await getProductBuys(productId);

    if (isAuthorized) {
        const productOwnerId = currentProduct._ownerId;
        const curretnUserId = getUserId();
        isOwner = productOwnerId == curretnUserId;
    };

    const alreadyBought = await buysForSpecificUser(productId, currentUserId);
    console.log(currentProduct);
    const details = detailsTemplate(currentProduct, isOwner, isAuthorized, ctx, productBuys, alreadyBought);
    ctx.render(details);
};




async function onDeleteHandler(ev, ctx) {
    ev.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this product?");

    if (confirmation == true) {
        await deleteProduct(ctx.params.id);
        ctx.redirect('/products');
    } else {
        return;
    }
};

async function onBuyHandler(ev, ctx) {
    ev.preventDefault();
    const productId = ctx.params.id;
    await buyProductReq(productId);
    ctx.redirect(`/details/${productId}`);
};