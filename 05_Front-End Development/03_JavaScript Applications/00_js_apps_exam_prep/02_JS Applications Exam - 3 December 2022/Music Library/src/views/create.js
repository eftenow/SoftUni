import { html } from '../../node_modules/lit-html/lit-html.js';
import { createNew } from '../services/albumService.js';


const createTemplate = (ctx) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit="${(ev) => onCreateHandler(ev, ctx)}" class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

export function renderCreate(ctx) {
    const create = createTemplate(ctx);
    ctx.render(create);
};

async function onCreateHandler(ev, ctx) {
    ev.preventDefault();
    let form = new FormData(ev.target);
    let singer = form.get('singer');
    let album = form.get('album');
    let imageUrl = form.get('imageUrl');
    let release = form.get('release');
    let label = form.get('label');
    let sales = form.get('sales');

    let newAlbum = {singer, album, imageUrl, release, label, sales};

    if (Object.values(newAlbum).some((x) => !x)){
        return alert('All fields must be filled!')
    };
    
    await createNew(newAlbum);

    ctx.redirect('/dashboard');

};
