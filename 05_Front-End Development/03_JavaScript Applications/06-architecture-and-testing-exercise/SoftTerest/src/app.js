import { initialize } from './router.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { logout } from './views/logout.js';
import { showRegister } from './views/register.js';


document.getElementById('initial-state').remove();


const views = {
    '/create': showCreate,
    '/dashboard': showDashboard,
    '/details': showDetails,
    '/home': showHome,
    '/login': showLogin,
    '/register': showRegister,
    '/logout': logout,

}

const router = initialize(views);
router.updateNav();
