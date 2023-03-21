import {authorize} from './authorize.js';
const logForm = document.getElementById('log-form');

export async function loginUser(ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const logEmail = form.get('email');
    const logPass = form.get('password');
    const logObj = {email: logEmail, password: logPass};
  
    try {
      const logResponse = await fetch('http://localhost:3030/users/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(logObj)
    })
    
    if (logResponse.status !== 200) {
        throw new Error('Invalid login data! Try again.')
    }
    alert('You logged in successfully!');
    let login = logResponse.json();
    localStorage.setItem('user' , login);
    authorize();
  
    } catch (error) {
      alert(error)
    }
  }