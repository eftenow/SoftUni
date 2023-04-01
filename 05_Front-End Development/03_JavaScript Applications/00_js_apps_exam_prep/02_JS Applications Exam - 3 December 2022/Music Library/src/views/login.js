import { html } from '../../node_modules/lit-html/lit-html.js';
import { loginUser } from '../services/authServices.js';


const loginTemplate = (ctx) => html`
<section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit="${(ev) => onLoginHandler(ev, ctx)}" class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>`

export function renderLogin(ctx) {
    const login = loginTemplate(ctx);
    ctx.render(login);
};

async function onLoginHandler(ev, ctx) {
    ev.preventDefault();
    let form = new FormData(ev.target);
    let email = form.get('email');
    let password = form.get('password');
    
    if (!email || !password) {
        alert('All fields must be filled!')
        throw new Error();
    }
    
    await loginUser(email, password);
    ctx.redirect('/dashboard');
}