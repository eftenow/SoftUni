import { get, post, del } from "./api.js";

const endpoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'ideaByID': '/data/ideas/',
    'createIdea': '/data/ideas',
}

export function getAllIdeas() { 
    return get(endpoints.ideas);
};

export function getIdeaById(id) {
    console.log(id);
    return get(endpoints.ideaByID + id);
}

export function deleteIdeaById(id) {
    return del(endpoints.ideaByID + id);
}

export function createIdea(title, description, img) {
    return post(endpoints.createIdea, {title, description, img});
}