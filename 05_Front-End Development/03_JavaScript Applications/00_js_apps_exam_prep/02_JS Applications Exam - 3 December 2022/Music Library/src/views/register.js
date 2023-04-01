import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../services/authServices.js';


const registerTemplate = (ctx) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit="${(ev) => onRegisterHandler(ev, ctx)}" class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`

export function renderRegister(ctx) {
    const register = registerTemplate(ctx);
    ctx.render(register);
};

async function onRegisterHandler(ev, ctx) {
    ev.preventDefault();
    let form = new FormData(ev.target);

    let email = form.get('email');
    let password = form.get('password');
    let rePassword = form.get('re-password');

    if (password !== rePassword) {
        alert('Passwords do not match!');
        throw new Error();
    } else if (!email || !password || !rePassword) {
        alert('All fields must be filled!')
        throw new Error();
    }
    await registerUser(email, password);

    ctx.redirect('/dashboard');
}