import request from "./request"

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAllGames = () =>{
    return request.get(baseUrl);
}

export const getSpecificGame = (gameId) => {
    const game =  request.get(`${baseUrl}/${gameId}`)

    return game;
}


export const createNewGame = (gameData) => {
    const game = request.post(baseUrl, gameData);
    return game;
}


export const deleteGame = (gameId) => {
    const delGame =  request.del(`${baseUrl}/${gameId}`);

    return delGame;
}


export const editGame = (gameId, editedGame) => {
    return request.put(`${baseUrl}/${gameId}`, editedGame)
}