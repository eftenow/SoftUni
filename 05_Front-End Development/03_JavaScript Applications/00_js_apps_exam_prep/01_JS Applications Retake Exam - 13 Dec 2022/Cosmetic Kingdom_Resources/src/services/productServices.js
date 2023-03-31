import { getUserToken } from "./userServices.js";

const baseUrl = 'http://localhost:3030/data/products';

const endpoints = {
    'showAll': '?sortBy=_createdOn%20desc'
}

export async function getAllProducts() {
    let response = await fetch(baseUrl + endpoints.showAll);
    return response.json();
};

export async function getProductDetails(id) {
    let response = await fetch(baseUrl + `/${id}`);
    return response.json();
};

export async function createNewProduct(product) {
    let accessToken = getUserToken();
    let resposne = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(product)
    });
};

export async function editExistingProduct(id, product) {
    let accessToken = getUserToken();
    let response = await fetch(baseUrl + `/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(product)
    });
    return await response.json();
};

export async function deleteProduct(id) {
    let accessToken = getUserToken();
    await fetch(baseUrl + `/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    });
};


export async function buyProductReq(productId) {
    const i = 'http://localhost:3030/data/bought';
    let accessToken = getUserToken();

    let res = await fetch(i, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify({productId})
    })
}

export async function getProductBuys(id) {
    let currUrl = `http://localhost:3030/data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`;
    let res = await fetch(currUrl);
    return res.json();
};

export async function buysForSpecificUser(productId, userId) {
    let cUrl = `http://localhost:3030/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
    let res = await fetch(cUrl);
    return res.json();
}