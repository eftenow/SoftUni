import { registerUser } from './src/register.js';
import { loginUser } from './src/login.js';
import { authorize } from './src/authorize.js';

const regForm = document.getElementById('reg-form');
const logForm = document.getElementById('log-form');
authorize();

if (regForm && logForm) {
  regForm.addEventListener('submit', registerUser);
  logForm.addEventListener('submit', loginUser);
} 






