import { checkLoggedUser } from "./app.js";
import { displaySection } from "./displaySection.js";
import { showHome } from "./home.js";


const registerSection = document.getElementById('form-sign-up');
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', onRegister);

export function showRegister() {
    displaySection(registerSection);
}


async function onRegister(ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const email = form.get('email');
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');

    try {
        if (!email || !password || !repeatPassword ||
            password != repeatPassword || password.length < 6) {
            throw new Error('Invalid registration data!')
        }

        let resposne = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email, password})
        });
        
        let newAccount = await resposne.json();

        localStorage.setItem('userData', JSON.stringify({
            email: newAccount.email,
            token: newAccount.accessToken,
            id: newAccount._id
        }));

        registerForm.reset();
        showHome();
    } catch (error) {
        alert(error.message);
    }
    checkLoggedUser();
}
