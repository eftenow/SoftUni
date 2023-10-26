import { post } from "./requestor.js";

const baseUrl = "http://localhost:3030/users";

export const userLogin = (userData) => post(`${baseUrl}/login`, userData);

export const userRegster = (userData) => post(`${baseUrl}/register`, userData);