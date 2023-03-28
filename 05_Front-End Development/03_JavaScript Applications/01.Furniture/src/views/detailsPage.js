import { html } from "../libs.js";
import { furnitureDetails } from "../requests/furnitureData.js";
import { getUser } from "../requests/userData.js";

const detailsTemplate = (data, user) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${data.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        <div class = ${user._id != data._ownerId ? 'hidden' : ''}>
            <a href= "/edit/${data._id}" class="btn btn-info">Edit</a>
            <a href="/delete/${data._id}" class="btn btn-red">Delete</a>
        </div>
    </div>
</div>`


export async function detailsPage(ctx) {
    const user = getUser();
    const furniture = await furnitureDetails(ctx.params.id);
    let detailsPage = detailsTemplate(furniture, user);
    ctx.render(detailsPage);
}