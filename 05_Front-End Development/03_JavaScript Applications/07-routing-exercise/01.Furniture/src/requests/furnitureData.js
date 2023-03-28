import { post, get, put, del } from './api.js';


const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/'
}

export async function createFurniture(furnitureData) {
    await post(endpoints.all, furnitureData);
};

export async function getAllFurnitures() {
    return get(endpoints.all);
};

export async function furnitureDetails(id) {
    return get(endpoints.byId + id);
};


export async function updateFurniture(id, furnitureData) {
    await put(endpoints.byId + id, furnitureData);
    
}

export async function deleteFurniture(id) {
    await del(endpoints.byId + id);
    
}

export async function getMyFurnitures(userId) {
    return get(`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}
