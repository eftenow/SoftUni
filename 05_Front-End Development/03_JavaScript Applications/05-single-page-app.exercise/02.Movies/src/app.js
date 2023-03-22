import { showAddMovie } from "./addMovie.js";
import { showEditMovie } from "./editMovie.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";

import { showRegister } from "./register.js";
const guestProperties = document.querySelectorAll('.guest');
const userProperties = document.querySelectorAll('.user');
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', onLogout);


const navigation = document.getElementById('main-nav');
const addMovieBtn = document.getElementById('add-movie-btn');
addMovieBtn.addEventListener('click', showAddSection);
checkLoggedUser();

navigation.addEventListener('click', display);
const views = {
    'Login' : showLogin,
    'Movies' : showHome,
    'Register' : showRegister,
}

function display(ev) {
    if (typeof views[ev.target.textContent] == 'function') {
        ev.preventDefault();
        views[ev.target.textContent]();
        checkLoggedUser();
    }
}


function showAddSection(ev) {
    ev.preventDefault();
    showAddMovie();
}



export function checkLoggedUser() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData){
        console.log(userData.id);
        document.getElementById('welcome-msg').textContent = `Welcome, ${userData.email}!` 
        Array.from(guestProperties).map(prop => prop.style.display = 'none');
        Array.from(userProperties).map(prop => prop.style.display = 'block');
        addMovieBtn.style.display = 'inline';
        
    } else{
        Array.from(guestProperties).map(prop => prop.style.display = 'block');
        Array.from(userProperties).map(prop => prop.style.display = 'none');
        addMovieBtn.style.display = 'inline';

    }
    
}

async function onLogout(ev) {
    ev.preventDefault();
    ev.stopImmediatePropagation();

    const {token} = JSON.parse(localStorage.getItem('userData'));
    console.log(token);
    await fetch('http://localhost:3030/users/logout', {
        headers: {'X-Authorization': token}
    });

    localStorage.removeItem('userData');
    checkLoggedUser();
    showLogin();

}