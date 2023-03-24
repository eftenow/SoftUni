import { register } from "../requests/users.js";

const section = document.getElementById('registerSection');
const registerForm = section.querySelector('form');
registerForm.addEventListener('submit', onRegister);

let getContext = '';

export function showRegister(context) {
    getContext = context;
    context.showSection(section);

}

function onRegister(ev) {
    ev.preventDefault();

    const form = new FormData(registerForm);
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('repeatPassword');

    if (password != rePass || email.length < 3 || password.length < 3){
        alert('Invalid input data!');
        return;
    }

    registerForm.reset();
    register(email, password);
    getContext.goTo('/home');
    getContext.updateNav();
}
