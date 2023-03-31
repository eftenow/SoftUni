import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { userIsLoggedIn } from '../services/userServices.js';

const navTemplate = (isAuthorized) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
<nav>
    <div>
        <a href="/products">Products</a>
    </div>

    ${isAuthorized
        ? html`
    <div class="user">
        <a href="/create">Add Product</a>
        <a href="/logout">Logout</a>
    </div>`
        : html`
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}

</nav>
`;

export function showNavigation(ctx) {
    const isAuthorized = userIsLoggedIn();
    const nav = navTemplate(isAuthorized);

    render(nav, document.querySelector('header'));
}