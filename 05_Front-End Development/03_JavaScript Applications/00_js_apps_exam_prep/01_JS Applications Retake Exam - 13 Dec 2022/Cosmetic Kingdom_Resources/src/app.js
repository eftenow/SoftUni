import page from '../node_modules/page/page.mjs';
import { setUpMiddleware } from './middlewares/renderMiddleware.js';
import { logout } from './services/userServices.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showProducts } from './views/products.js';
import { showRegister } from './views/register.js';

page(setUpMiddleware);
page('/', showHome);
page('/index.html', showHome);
page('/products', showProducts);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page('/logout', async (ctx)=> {
    await logout();
    ctx.redirect('/products');
});



page.start();