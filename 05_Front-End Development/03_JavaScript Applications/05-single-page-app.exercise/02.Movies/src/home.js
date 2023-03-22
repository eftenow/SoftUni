import { displaySection } from "./displaySection.js";
import { showDescription } from "./movieDescription.js";

const homeSection = document.getElementById('home-page');

export function showHome() {
    displaySection(homeSection);
    loadExistingMovies()
}

let catalogue = document.getElementById('catalogue');

async function loadExistingMovies() {
    let response = await fetch('http://localhost:3030/data/movies');
    let data = await response.json();
    catalogue.replaceChildren(...data.map(renderMovie));


}

function renderMovie(movieData) {
    const card = document.createElement('div');
    card.className = `card mb-4`;
    card.id = movieData._id;
    card.innerHTML = `
    <img class="card-img-top" src="${movieData.img}" alt="Card image cap"
        width="400">
        <div class="card-body">
            <h4 class="card-title">${movieData.title}</h4>
        </div>
        <div class="card-footer">
            <a href="#">
                <button id="${movieData._id}" type="button" class="btn btn-info">Details</button>
            </a>
        </div>
    `
    return card;
}

catalogue.addEventListener('click', showDetails);

function showDetails(ev) {
    let target = ev.target;
    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        let movieId = ev.target.id;
        showDescription(movieId);
    }

}

