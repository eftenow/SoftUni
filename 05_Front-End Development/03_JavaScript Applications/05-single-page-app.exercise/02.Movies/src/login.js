import { displaySection } from "./displaySection.js";
import { showHome } from "./home.js";
import { checkLoggedUser } from './app.js'


const loginSection = document.getElementById('form-login');

export function showLogin() {
    displaySection(loginSection);

}

const formEl = document.getElementById('login-form');
formEl.addEventListener('submit', userLogin)

async function userLogin(ev) {
    ev.preventDefault();
    const formData = new FormData(formEl);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        let response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        let data = await response.json();

        localStorage.setItem('userData', JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }));
        formEl.reset();
        showHome();
    } catch (error) {
        alert(error.message)
    }
    checkLoggedUser();
}