import {login} from "../requests/userData.js"
import { html } from '../libs.js';



const loginTemplate = (onLogin) =>  html`<div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit="${onLogin}">
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`;

export async function loginPage(ctx, next) {
    ctx.render(loginTemplate(onLogin));

    function onLogin(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password);
        ctx.redirect('/');
        next()
    }
}
