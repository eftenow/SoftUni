const url = "http://localhost:3030/users";

export const userLogin = async (loginData) => {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Login unsuccessful")
            }
        })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(error => {
            console.log("Error:", error);
        })
}

export const userRegister = async (registerData) => {
    return fetch(`${url}/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(registerData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Registration unsuccessful")
            }
        })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(error => {
            console.log("Error:", error);
        })
}

export const UserLogout = (token) => {
    fetch(`${url}/logout`, {
        method: "GET",
        headers: { "X-Authorization": token }
    })
}

