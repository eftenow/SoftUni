import { html } from '../../node_modules/lit-html/lit-html.js';
import {deleteItem, getDetails, getLikesCount, likeAlbum, userAlreadyLiked } from '../services/albumService.js';
import { getUser, getUserId } from '../services/authServices.js';


const detailsTemplate = (album, isOwner, isAuthorized, ctx, likesCount, alreadyLiked) => html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p><strong>Album name:</strong><span id="details-album">${album.album}</span></p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likesCount}</span></div>

          ${isAuthorized
          ? html`
          <div id="action-buttons">
            ${isOwner
            ?html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click="${(ev) => onDeleteHandler(ev, ctx)}" href="#" id="delete-btn">Delete</a>`
            : html`
            ${!alreadyLiked ? html`<a @click="${(ev) => onLikeHandler(ev, ctx)}" href="#" id="btn-like">Like</a>` : ''}
            `
            }
          </div>`
          : ''}
        </div>
      </section>

`

async function onLikeHandler(ev, ctx) {
  ev.preventDefault();
  const albumId = ctx.params.id;
  await likeAlbum(albumId);
  ctx.redirect(`/dashboard/${albumId}`);

};



export async function renderDetails(ctx) {
    const currentUser = getUser();
    let curretnUserId = getUserId();
    const albumId = ctx.params.id;
    
    let promises = Promise.all([
      getDetails(albumId),
      getLikesCount(albumId),
      userAlreadyLiked(albumId, curretnUserId)
    ]);
    let [currentProduct, likesCount, alreadyLiked] = await promises;
    
    const isAuthorized = currentUser !== null;
    let isOwner = currentProduct._ownerId == curretnUserId;   

    const details = detailsTemplate(currentProduct, isOwner, isAuthorized, ctx, likesCount, alreadyLiked);
    console.log(currentProduct);
    console.log(currentProduct.singer);
    ctx.render(details);
};




async function onDeleteHandler(ev, ctx) {
    ev.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this album?");

    if (confirmation == true) {
        await deleteItem(ctx.params.id);
        ctx.redirect('/dashboard');
    } else {
        return;
    }
};

