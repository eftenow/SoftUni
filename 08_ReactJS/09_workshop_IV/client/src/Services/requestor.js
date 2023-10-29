async function request(method, url, data) {
    try {
        const authData = JSON.parse(localStorage.getItem('auth'));
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        if (authData && authData.accessToken) {
            const token = authData.accessToken;
            options.headers['X-Authorization'] = token;
        }

        const response = await fetch(url, options);
        let responseData;
        if (response.headers.get("content-type") && response.headers.get("content-type").includes("application/json")) {
            responseData = await response.json();
        } else {
            responseData = await response.text();
        }


        if (!response.ok) {
            const error = new Error("An error occurred");
            error.status = response.status;
            error.data = responseData;
            throw error;
        }

        return { status: response.status, data: responseData };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function get(endpoint) {
    return request('GET', endpoint);
}

export function post(endpoint, data) {
    return request('POST', endpoint, data);
}

export function put(endpoint, data) {
    return request('PUT', endpoint, data);
}

export function del(endpoint) {
    return request('DELETE', endpoint);
}