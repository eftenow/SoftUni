const baseUrl = 'http://localhost:3030/users';

export async function logout() {
    const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: { 'X-Authorization': sessionStorage.getItem('accessToken') }
    });
    if (response.ok) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('email');
    } else {
        alert(response.status);
        throw new Error();
    }
}

export async function register(email, password) {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password })
    });

    const data = await response.json();

    if (response.ok) {
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('email', data.email);
    } else {
        alert(data.message);
        throw new Error();
    }
}

export async function login(email, password) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('email', data.email);
    } else {
        alert(data.message);
        throw new Error();
    }
}

export function userIsLoggedIn() {
    return sessionStorage.getItem('accessToken') !== null;
}

export function getUserId() {
    return sessionStorage.getItem('id');
};

export function getUserToken() {
    return sessionStorage.getItem('accessToken');
};

export function getUserEmail() {
    return sessionStorage.getItem('email');
}