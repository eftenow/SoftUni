import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/albumService.js';

const productTemplate = (product) => html`
<li class="card">
            <img src="${product.imageUrl}" alt="travis" />
            <p><strong>Singer/Band: </strong><span class="singer">${product.singer}</span></p>
            <p><strong>Album name: </strong><span class="album">${product.album}</span></p>
            <p><strong>Sales:</strong><span class="sales">${product.sales}</span></p>
            <a class="details-btn" href="/dashboard/${product._id}">Details</a>
        </li>`

const productsTemplate = (products) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        
${products.length == 0
        ? html`<h2>There are no albums added yet.</h2>`
            : html`${products.map(p => productTemplate(p))}`}
    </ul>
    
</section>

`

export async function renderDashboard(ctx) {
    const productsList = await getAll();
    const products = productsTemplate(productsList);
    console.log(productsList);
    ctx.render(products);

}