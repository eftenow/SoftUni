import { login } from "../requests/users.js";

const section = document.getElementById('loginSection');
const loginForm = section.querySelector('form');
loginForm.addEventListener('submit', onLogin);

let getContext = '';

export function showLogin(context) {
    getContext = context;
    context.showSection(section);
};

async function onLogin(ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const email = form.get('email');
    const password = form.get('password');
    await login(email, password);

    loginForm.reset();
    getContext.goTo ('/home');
    getContext.updateNav();
}

