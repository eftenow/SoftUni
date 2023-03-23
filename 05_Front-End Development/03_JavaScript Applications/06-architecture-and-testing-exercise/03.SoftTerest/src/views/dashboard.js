import { getAllIdeas, getIdeaById } from "../requests/data.js";
import { showDetails } from "./details.js";

const section = document.getElementById('dashboard-holder');
section.addEventListener('click', showDescription);
let getContext = '';

export async function showDashboard(context) {
    getContext = context;
    context.showSection(section);
    const ideas = await getAllIdeas();
    
    if (ideas.length == 0){
        section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>'
    }
    section.replaceChildren(...ideas.map(renderIdea))

}

function renderIdea(idea) {
    const newIdea = document.createElement('div');
    newIdea.className = 'card overflow-hidden current-card details';
    newIdea.style.width = '20rem';
    newIdea.style.height = '18rem';

    newIdea.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="">Details</a>
    
    `
    return newIdea;

};

async function showDescription(ev) {
    if (ev.target.tagName == 'A'){
        ev.preventDefault();
        const id = ev.target.dataset.id;
        if (id){
            getContext.goTo('/details', id);
            let selectedIdea = await getIdeaById(id);
        }
       


    }
}

