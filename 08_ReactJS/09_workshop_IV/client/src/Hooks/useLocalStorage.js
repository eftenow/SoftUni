import { useState } from "react";


export const useLocalStorage = (key, defaultValue) => {
    const [user, setUser] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData  ? JSON.parse(storedData) : defaultValue;
    });

    const setUserAuth = (authData) => {
        setUser(authData);
        localStorage.setItem(key, JSON.stringify(authData));
    }


    return [
        user,
        setUserAuth
    ]
}