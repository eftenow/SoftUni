import { del, get, post, put } from "./requestor.js"

const baseUrl = "http://localhost:3030/data/games";

export const getAllGames = async () => {
    const resposne = await get(baseUrl);
    return resposne.data;
}

export const getOneGame = async (gameId) => {
    const response = await get(`${baseUrl}/${gameId}`);
    return response.data;
}

export const createGame = async (gameData) => {
    const response = await post(baseUrl, gameData);
    return response.data;
}

export const editGame = async (gameData) => {
    const response = await put(`${baseUrl}/${gameData._id}`, gameData);
    return response.data;
}

export const deleteGame = async (gameId) => {
    const response = await del(`${baseUrl}/${gameId}`);
    return response.data;
}