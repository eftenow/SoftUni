const url = "http://localhost:3030/data/offers";

export const getAllServices = () => fetch(url);

export const getOneOffer = (offerId) => fetch(`${url}/${offerId}`)

export const createOffer = async (offerData, accessToken) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify(offerData)
    })
        .then(response => response.json())
        .then(data => data)
}

export const deleteOffer = (offerId, accessToken) => {
    fetch(`${url}/${offerId}`, {
        "method": "DELETE",
        "headers": {"X-Authorization": accessToken}
    }).then(res => res.json())
}

export const editOffer = (offerData, offerId, accessToken) => {
    return fetch(`${url}/${offerId}`, {
        "method": "PUT",
        "headers": {
            "X-Authorization": accessToken,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(offerData)
    })
    .then(res => res.json())
    .then(data => data)
}