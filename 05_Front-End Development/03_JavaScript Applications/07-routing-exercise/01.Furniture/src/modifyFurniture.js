import { html } from "./libs.js";
import { deleteFurniture, furnitureDetails, updateFurniture } from "./requests/furnitureData.js";

const editFormTemplate = (data, submitForm) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit="${submitForm}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="${data.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${data.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${data.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`

export async function delFurniture(ctx) {
    deleteFurniture(ctx.params.id);
    ctx.redirect('/');

}

export async function editFurniture(ctx) {
    const furniturePromise = await furnitureDetails(ctx.params.id);
    const editFurniture = editFormTemplate(furniturePromise, onSubmit);
    
    ctx.render(editFurniture);
    async function onSubmit(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);
        
        const make = form.get('make');
        const model = form.get('model');
        const year = form.get('year');
        const description = form.get('description');
        const price = form.get('price');
        const img = form.get('img');
        const material = form.get('material');
    
        const editedFurniture = {
            make, model, year, description, price, img, material
        };
        updateFurniture(ctx.params.id, editedFurniture);
        ctx.redirect('/');
    }

}