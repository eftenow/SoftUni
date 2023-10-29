import { get, post } from "./requestor.js";

export const UserLogin = (loginData) => post("http://localhost:3030/users/login", loginData);

export const UserRegister = (registerData) => post("http://localhost:3030/users/register", registerData);

export const UserLogout = () => post("http://localhost:3030/users/logout");

export const ProfileData = () => get("http://localhost:3030/users/me");