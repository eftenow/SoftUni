import page from '../node_modules/page/page.mjs';
import { setUpMiddleware } from './middlewares/renderMiddleware.js';
import { logoutUser } from './services/authServices.js';
import { renderCreate } from './views/create.js';
import { renderDashboard } from './views/dashboard.js';
import { renderDetails } from './views/details.js';
import { renderEdit } from './views/edit.js';
import { renderHome } from './views/home.js';
import { renderLogin } from './views/login.js';
import { renderRegister } from './views/register.js';


page(setUpMiddleware);

page('/', renderHome);
page('/index.html', renderHome);
page('/dashboard', renderDashboard);
page('/register', renderRegister);
page('/login', renderLogin);
page('/create', renderCreate);
page('/dashboard/:id', renderDetails);
page('/edit/:id', renderEdit);

page('/logout', async (ctx)=> {
    await logoutUser();
    ctx.redirect('/dashboard');
});



page.start();