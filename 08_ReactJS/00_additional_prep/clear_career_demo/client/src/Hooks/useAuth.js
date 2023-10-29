import { useEffect, useState } from "react"

export const useAuth = (key, defaultValue) => {
    const [user, setUser] = useState(
        () => {
            const storedData = localStorage.getItem(key);
            const userValue = storedData ? JSON.parse(storedData) : defaultValue;

            return userValue;
        }
    );

    const setUserAuth = (userData) =>{
        setUser(userData);
        localStorage.setItem(key, JSON.stringify(userData));
    };



    return [user, setUserAuth]
}