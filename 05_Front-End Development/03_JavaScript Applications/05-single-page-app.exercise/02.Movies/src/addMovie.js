import { displaySection } from "./displaySection.js";
import { showHome } from "./home.js";


const addSection = document.getElementById('add-movie');

export function showAddMovie() {
    displaySection(addSection);
}


const addMovieForm = addSection.querySelector('#add-movie-form');
addMovieForm.addEventListener('submit', onAdd);

async function onAdd(ev){
    ev.preventDefault();
    const addForm = new FormData(addMovieForm);
    const title = addForm.get('title');
    const description = addForm.get('description');
    const img = addForm.get('img');


    let {token} = JSON.parse(localStorage.getItem('userData'));

    let result = await fetch(`http://localhost:3030/data/movies`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token    
        },
        body: JSON.stringify({title, description, img})
    });
    let createdMovie = await result.json();
    console.log(createdMovie);
    showHome();
}
