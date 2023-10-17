const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);
    
    if (response.status === 204){
        return []
    }
    const result = await response.json();
    
    return result;
}

export const getSpeicifcUser = async (id) => {
    if (!id) {
        return;
    }

    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result;
}

export const createUser = async (userData) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    
    const result = await response.json();
    console.log(result);
    return result;
}


export const deleteUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
    const result = await response.json();
    
    return result;
}


export const editUser = async (id, updatedData) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error("Failed to edit user");
    }
}
