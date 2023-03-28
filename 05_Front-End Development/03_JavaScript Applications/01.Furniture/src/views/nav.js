import {render, html, page} from '../libs.js';
import { logoutUser, getUser } from '../requests/userData.js';


const navTemplate = (user, pathName)=> html`
<h1><a href="/">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/" class="${pathName == '/' ? "active" : ""}">Dashboard</a>
   '${user != undefined 
        ? html `<div id="user">
        <a class="${pathName == '/create' ? "active" : ""}" id="createLink" href="/create">Create Furniture</a>
        <a class="${pathName == '/my-furniture' ? "active" : ""}" id="profileLink" href="/my-furniture">My Publications</a>
        <a @click="${onLogout}" id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>`
        : html`<div id="guest">
        <a class="${pathName == '/login' ? "active" : ""}" id="loginLink" href="/login">Login</a>
        <a class="${pathName == '/register' ? "active" : ""}"id="registerLink" href="/register">Register</a>
    </div>`}
    
    
</nav>`

export function displayNavigation(ctx, next) {
    const user = getUser();
    const nav = navTemplate(user, ctx.pathname);
    render(nav, document.querySelector('header'));

    next();
}


async function onLogout(ev) {
    ev.preventDefault();
    console.log(ev);
    logoutUser();
    page.redirect('/');
}


