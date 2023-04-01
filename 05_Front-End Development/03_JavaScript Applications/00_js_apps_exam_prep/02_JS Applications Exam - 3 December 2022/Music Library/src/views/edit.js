import { html } from '../../node_modules/lit-html/lit-html.js';
import { editExisting, getDetails } from '../services/albumService.js';


const editTemplate = (ctx, album) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit='${(ev) => editProductHandler(ev, ctx)}'>
            <input value="${album.singer}" type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input value="${album.album}" type="text" name="album" id="album-album" placeholder="Album" />
            <input value="${album.imageUrl}" type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input value="${album.release}" type="text" name="release" id="album-release" placeholder="Release date" />
            <input value="${album.label}" type="text" name="label" id="album-label" placeholder="Label" />
            <input value="${album.sales}" type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`

export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const editProduct = await getDetails(id);

    const edit = editTemplate(ctx, editProduct);
    ctx.render(edit);
};

async function editProductHandler(ev, ctx) {
    ev.preventDefault();
    let form = new FormData(ev.target);
    let singer = form.get('singer');
    let album = form.get('album');
    let imageUrl = form.get('imageUrl');
    let release = form.get('release');
    let label = form.get('label');
    let sales = form.get('sales');

    let editedAlbum = {singer, album, imageUrl, release, label, sales};

    if (Object.values(editedAlbum).some((x) => !x)){
        return alert('All fields must be filled!')
    };
    
    await editExisting(ctx.params.id, editedAlbum);

    ctx.redirect(`/dashboard/${ctx.params.id}`);
}

