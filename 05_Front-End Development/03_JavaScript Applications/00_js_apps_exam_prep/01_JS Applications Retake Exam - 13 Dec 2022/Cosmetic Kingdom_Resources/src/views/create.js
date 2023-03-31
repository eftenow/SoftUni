import { html } from '../../node_modules/lit-html/lit-html.js';
import { createNewProduct } from '../services/productServices.js';


const createTemplate = (ctx) => html`
<section id="create">
  <div class="form">
    <h2>Add Product</h2>
    <form @submit="${(ev) => onCreateHandler(ev, ctx)}" class="create-form">
      <input type="text" name="name" id="name" placeholder="Product Name" />
      <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
      <input type="text" name="category" id="product-category" placeholder="Category" />
      <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

      <input type="text" name="price" id="product-price" placeholder="Price" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`

export function showCreate(ctx) {
  const create = createTemplate(ctx);
  ctx.render(create);
};

async function onCreateHandler(ev, ctx) {
  ev.preventDefault();

  ev.preventDefault();
  let form = new FormData(ev.target);
  let name = form.get('name');
  let imageUrl = form.get('imageUrl');
  let category = form.get('category');
  let description = form.get('description');
  let price = form.get('price');

  [name, imageUrl, category, description, price].map(i => {
    if (!i) {
      alert('All fields must be filled!')
      throw new Error();
    }
  });

  await createNewProduct({ name, imageUrl, category, description, price });

  ctx.redirect('/products');

}