import { createIdea } from "../requests/data.js";

const section = document.getElementById('createSection');
const form = section.querySelector('form');
form.addEventListener('submit', onCreate);

let getContext = '';

export function showCreate(context) {
    getContext = context;
    context.showSection(section);
}

async function onCreate(ev) {
    ev.preventDefault();

    const createForm = new FormData(form);
    const title = createForm.get('title');
    const description = createForm.get('description');
    const img = createForm.get('imageURL');
    
    await createIdea(title, description, img);
    getContext.goTo('/dashboard')

}
