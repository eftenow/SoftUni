import { get, post } from "./requestor.js";

export const getAllMemes = () => get("http://localhost:3030/data/memes");

export const getOneMeme = (memeId) => get(`http://localhost:3030/data/memes/${memeId}`);

export const createMeme = (memeData) => post(`http://localhost:3030/data/memes`, memeData);