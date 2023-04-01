import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../services/authServices.js';

const navTemplate = (isAuthorized) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
    <div>
        <a href="/dashboard">Dashboard</a>
    </div>

    ${isAuthorized
    ? html`
    <div class="user">
        <a href="/create">Add Album</a>
        <a href="/logout">Logout</a>
    </div>`
    : html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}
</nav>
`;

export function showNavigation(ctx) {
    const isAuthorized = getUser() !== null;
    const nav = navTemplate(isAuthorized);

    render(nav, document.querySelector('header'));
}