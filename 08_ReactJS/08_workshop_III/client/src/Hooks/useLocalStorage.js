import { useState } from "react"

export const useLocalStorage = (defaultValue) => {
    const [value, setValue] = useState(()=>{
        const storedData = localStorage.getItem("auth");
        return storedData ? JSON.parse(storedData) : defaultValue
    });

    const setLocalStorageValue = (newValue) =>{
        localStorage.setItem("auth", JSON.stringify(newValue));
        setValue(newValue);
    }

    return[
        value, 
        setLocalStorageValue
    ]
}