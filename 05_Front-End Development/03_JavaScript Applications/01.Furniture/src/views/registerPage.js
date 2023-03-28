import { register } from "../requests/userData.js"
import { html } from '../libs.js';



const registerTemp = (onRegister) => html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit="${onRegister}">
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
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

export async function regPage(ctx) {
    ctx.render(registerTemp(onLogin));

    function onLogin(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);
        const email = form.get('email');
        const password = form.get('password');
        register(email, password);
        ctx.redirect('/');

    }
}
