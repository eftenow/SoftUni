import { html, render, page } from './libs.js';
import { delFurniture, editFurniture } from './modifyFurniture.js';
import * as api from './requests/userData.js';
import { catalogPage } from './views/catalogPage.js';
import { createPage } from './views/createPage.js';
import { detailsPage } from './views/detailsPage.js';
import { loginPage } from './views/loginPage.js';
import { displayNavigation } from './views/nav.js';
import { regPage } from './views/registerPage.js';
const container = document.querySelector('div.container')



page(modifyContext);

page('/', catalogPage, displayNavigation);
page('/index.html', displayNavigation, catalogPage);
page('/create', displayNavigation, createPage);
page('/my-furniture', displayNavigation, catalogPage);
page('/login', loginPage, displayNavigation);
page('/register', regPage, displayNavigation);
page('/details/:id', displayNavigation, detailsPage);
page('/delete/:id', displayNavigation, delFurniture);
page('/edit/:id', displayNavigation, editFurniture);



function modifyContext(ctx, next) {
    ctx.render = (content) => render(content, container);
    ctx.redirect = (location) => page.redirect(location);
    next();
}


page.start();