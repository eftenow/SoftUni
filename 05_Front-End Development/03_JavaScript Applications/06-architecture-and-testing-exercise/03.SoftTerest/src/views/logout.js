import { logoutUser } from "../requests/users.js";

export function logout(context) {
    logoutUser();
    context.goTo('/home');
    context.updateNav();

}