import { displaySection } from "./displaySection.js";
import { showHome } from "./home.js";

const url = 'http://localhost:3030/data/movies';
const editSection = document.getElementById('edit-movie');
const editedTitle = editSection.querySelector('input[name="title"]');
const editedDescription = editSection.querySelector('textarea[name="description"]');
const editedImg = editSection.querySelector('input[name="img"]');

const submitBtn = editSection.querySelector('button[type="submit"]');


export async function showEditMovie(movieId) {
    displaySection(editSection);
    submitBtn.id = movieId;

    const res = await fetch(`${url}/${movieId}`);
    const selectedMovie = await res.json();
    console.log(selectedMovie);
    editedTitle.value = selectedMovie.title;
    editedDescription.value = selectedMovie.description;
    editedImg.value = selectedMovie.img;

    submitBtn.addEventListener('click', onClickEdit);
}

async function onClickEdit(ev) {
    ev.preventDefault();
    const id = (ev.target).id;

    let { token } = JSON.parse(localStorage.getItem('userData'));

    let response = await fetch(`${url}/${id}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ title: editedTitle.value, description: editedDescription.value, img: editedImg.value })
    })
    showHome();
}


