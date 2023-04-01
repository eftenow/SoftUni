import {post, put, del, get} from './api.js';

const endpoints = {
    all: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    details : '/data/albums/',
    like: '/data/likes',

};

export async function getAll() {
    return get(endpoints.all);
};

export async function createNew(newItem) {
    return post(endpoints.create, newItem);
};

export async function editExisting(id, editedItem) {
    return put(endpoints.details + id, editedItem);
    
}

export async function getDetails(id) {
    return get(endpoints.details + id);
};

export async function deleteItem(id) {
  return del(endpoints.details + id);  
};

export async function likeAlbum(albumId) {
    return post(endpoints.like, {albumId});
};

export async function getLikesCount(id) {
    return get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
};

export async function userAlreadyLiked(albumId, userId) {
    if (!userId){
        return;
    }
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}