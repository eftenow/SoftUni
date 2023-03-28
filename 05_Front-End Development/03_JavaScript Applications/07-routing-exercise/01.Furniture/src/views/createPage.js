import { html } from '../libs.js';
import { createFurniture } from '../requests/furnitureData.js';


const createTemplate = (onCreate) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input @click="${onCreate}" type="submit" class="btn btn-primary" value="Create" />

        </div>
    </div>
</form>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onCreate))

    async function onCreate(ev) {
        ev.preventDefault();
        const form = ev.target.closest('form');
        const createForm = new FormData(form);
    
        const make = createForm.get('make');
        const model = createForm.get('model');
        const year = createForm.get('year');
        const description = createForm.get('description');
        const price = createForm.get('price');
        const img = createForm.get('img');
        const material = createForm.get('material');
    
        const newFurniture = {
            make, model, year, description, price, img, material
        }
        createFurniture(newFurniture);
        ctx.redirect('/'); 
    }
}


