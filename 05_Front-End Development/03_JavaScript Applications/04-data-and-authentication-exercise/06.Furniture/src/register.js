import {authorize} from './authorize.js';

const regForm = document.getElementById('reg-form');

export async function registerUser(ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const regEmail = form.get('email');
    const regPass = form.get('password');
    const regRePass = form.get('rePass');
    
    if (!regEmail || !regPass | !regRePass || regPass != regRePass) {
      alert('Register data is invalid!')
    }
    
    const regObj = {email: regEmail, password : regPass}
    let regResponse = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(regObj)
    })
    
    let completedReg = await regResponse.json();
    localStorage.setItem('user', completedReg);
    alert('You registered successfully!')
    authorize();
  }