import { displaySection } from "./displaySection.js";
import { showHome } from "./home.js";
import { showEditMovie } from "./editMovie.js";

const descriptionSection = document.getElementById('movie-description');
const catalogue = document.getElementById('catalogue');

let {token, id: localId} = JSON.parse(localStorage.getItem('userData'));
const userData = JSON.parse(localStorage.getItem('userData'));


export async function showDescription(id) {
  const requests = [
    fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    fetch(`http://localhost:3030/data/movies/${id}`)
  ]
  if (token != null){
    requests.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${localId}%22`));
  }
  
  const [likesRes, movieRes, hasLikedRes] = await  Promise.all(requests);
  const [likes, movie, hasLiked] = await Promise.all([
    likesRes.json(),
    movieRes.json(),
    hasLikedRes && hasLikedRes.json()
  ])

  displaySelectedMovie(movie, likes);
  showValidBtns(movie._id, movie._ownerId, hasLiked);
}

function displaySelectedMovie(movie, likes) {
  let showMovie = document.createElement('div');
  showMovie.className = 'container';
  showMovie.id = `${movie._id}`;
  showMovie.ownerId = `${movie._ownerId}`;

  showMovie.innerHTML = `
    <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img class="img-thumbnail" src="${movie.img}"
                alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${movie.description}
              </p>
              <a id = "delete-btn" class="btn btn-danger" href="#">Delete</a>
              <a id = "edit-btn" class="btn btn-warning" href="#">Edit</a>
              <a id = "like-btn" class="btn btn-primary" href="#">Like</a>
              <a id = "dislike-btn" class="btn btn-danger" href="#">Dislike</a>
              <span class="enrolled-span">Liked ${likes}</span>
            </div>
          </div>
    `
  descriptionSection.replaceChildren(showMovie);
  displaySection(descriptionSection);
}

function showValidBtns(movieId, ownerId, hasLiked) {
  const delBtn = document.getElementById('delete-btn');
  const editBtn = document.getElementById('edit-btn');
  const likeBtn = document.getElementById('like-btn');
  const dislikeBtn = document.getElementById('dislike-btn');
  const numberOfLikes = document.querySelector('.enrolled-span');

  delBtn.addEventListener('click', onDelete);
  editBtn.addEventListener('click', onEdit);
  likeBtn.addEventListener('click', onLike);
  dislikeBtn.addEventListener('click', onDislike);
  [delBtn, editBtn, likeBtn].map(button => button.setAttribute('movieId', movieId));

  const hasLikedMovie = hasLiked.find(x => x.movieId == movieId);
  if (hasLikedMovie) {
    dislikeBtn.setAttribute('movieId', hasLikedMovie.movieId);
    dislikeBtn.setAttribute('_id', hasLikedMovie._id);
  };


  console.log(localId);
  console.log(ownerId);
  if (token == null) {
    delBtn.style.display = 'none';
    editBtn.style.display = 'none';
    likeBtn.style.display = 'none';
    dislikeBtn.style.display = 'none';
  } else {

    delBtn.style.display = localId == ownerId ? 'inline' : 'none';
    editBtn.style.display = localId == ownerId ? 'inline' : 'none';

    numberOfLikes.style.display = localId == ownerId || hasLiked ? 'inline' : 'none';
    likeBtn.style.display = localId == ownerId || hasLikedMovie ? 'none' : 'inline';
    dislikeBtn.style.display = hasLikedMovie ? 'inline' : 'none';
  }
}

const url = 'http://localhost:3030/data/movies'

async function onDelete(ev) {
  const id = ev.target.getAttribute('movieId');
  let response = await fetch(`${url}/${id}`, {
    method: 'delete',
    headers: { 'X-Authorization': token }
  });
  showHome();
}

async function onEdit(ev) {
  const id = ev.target.getAttribute('movieId');
  showEditMovie(id);

}

async function onLike(ev) {
  const likeBtn = ev.target;
  const likes = document.querySelector('.enrolled-span');
  const movieId = likeBtn.getAttribute('movieId');

  await fetch(`http://localhost:3030/data/likes`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': token
    },
    body: JSON.stringify({ movieId })
  });


  likeBtn.style.display = 'none';
  likes.style.display = 'inline';
  showDescription(movieId)
}


async function onDislike(ev) {
  ev.preventDefault();
  const dislikeBtn = ev.target;
  const movieId = dislikeBtn.getAttribute('movieId');
  const id = dislikeBtn.getAttribute('_id');

  await fetch(`http://localhost:3030/data/likes/${id}`, {
    method: 'delete',
    headers: {'X-Authorization': token}
  });
  console.log('asdasd');
  showDescription(movieId)
}