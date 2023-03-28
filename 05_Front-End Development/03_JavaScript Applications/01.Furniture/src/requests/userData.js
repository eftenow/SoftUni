import { post, get } from './api.js';


//UNIVERSAL
const endpoints = {
    'login': '/users/login',
    'logout': '/users/logout',
    'register': '/users/register',
}

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
};

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
};

export async function logoutUser() {
    get(endpoints.logout)
    localStorage.removeItem('user');

};

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
};

// EXCLUSIVE ONLY FOR THE CURRENT APP



