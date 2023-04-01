import {get, post} from './api.js';

const endpoints = {
    'login': '/users/login',
    'logout': '/users/logout',
    'register': '/users/register',
}

export async function loginUser(email, password) {
    const user = await post(endpoints.login, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
};

export async function registerUser(email, password) {
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

export function getUserId() {
    let user = getUser();
    try {
        return user._id;
    } catch (error) {
        return;
    }
};