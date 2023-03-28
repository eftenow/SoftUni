import { html } from '../libs.js';
import { getAllFurnitures, getMyFurnitures } from '../requests/furnitureData.js';
import { getUser } from '../requests/userData.js';

const catalogTemplate = (catalog) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${catalog.map(item => catalogItemTemplate(item))}

</div>`

const catalogItemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>${item.make}</p>
            <footer>
                <p>Price: <span>${item.price}</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>`

export async function catalogPage(ctx, next) {
    let furnituresList;

    if (ctx.path == '/') {
        furnituresList = await getAllFurnitures();
    } else {
        let user = getUser();

        furnituresList = await getMyFurnitures(user._id);
    }
    let content = catalogTemplate(furnituresList);
    ctx.render(content);
    next();
    
}

