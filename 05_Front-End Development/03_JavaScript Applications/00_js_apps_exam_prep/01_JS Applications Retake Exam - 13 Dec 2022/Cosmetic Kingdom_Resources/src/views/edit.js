import { html } from '../../node_modules/lit-html/lit-html.js';
import { editExistingProduct, getProductDetails } from '../services/productServices.js';


const editTemplate = (ctx, product) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form class="edit-form" @submit='${(ev) => editProductHandler(ev, ctx)}'>
            <input type="text" name="name" id="name" placeholder="Product Name" value="${product.name}" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image"
                value="${product.imageUrl}" />
            <input type="text" name="category" id="product-category" placeholder="Category"
                value="${product.category}" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50">${product.description}</textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" value="${product.price}" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const editProduct = await getProductDetails(id);

    const edit = editTemplate(ctx, editProduct);
    ctx.render(edit);
};

async function editProductHandler(ev, ctx) {
    ev.preventDefault();

    let form = new FormData(ev.target);
    let name = form.get('name').trim();
    let imageUrl = form.get('imageUrl').trim();
    let category = form.get('category').trim();
    let description = form.get('description').trim();
    let price = form.get('price').trim();
    const editedProduct = { name, imageUrl, category, description, price };

    if (Object.values(editedProduct).some((i) => !i)) {
        return alert('All fields must be filled!')
    };

    await editExistingProduct(ctx.params.id, editedProduct);

    ctx.redirect(`/details/${ctx.params.id}`);
}

