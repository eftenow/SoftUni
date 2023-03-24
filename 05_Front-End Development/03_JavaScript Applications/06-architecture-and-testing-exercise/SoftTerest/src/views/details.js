import { deleteIdeaById, getIdeaById } from "../requests/data.js";

const section = document.getElementById('detailsSection');

let getContext = '';

export async function showDetails(context, id) {
    getContext = context;

    const idea = await getIdeaById(id);
    context.showSection(section);
    section.innerHTML = createDetailsDiv(idea);
    let delBtn = section.querySelector('a');
    if (delBtn) {
        delBtn.addEventListener('click', onDelete);
    }

}

function createDetailsDiv(idea) {
    let html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
    <h2 class="display-5">${idea.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${idea.description}</p>
    </div> `

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id == idea._ownerId) {
        html += `<div class="text-center">
        <a id="${idea._id}" class="btn detb" href="">Delete</a>
    </div>`
    };

    return html;

}


function onDelete(ev) {
    ev.preventDefault();
    const id = ev.target.id;
    deleteIdeaById(id);

    getContext.goTo('/dashboard');
}