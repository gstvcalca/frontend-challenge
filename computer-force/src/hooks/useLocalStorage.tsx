import { useState } from "react";
import { json } from "stream/consumers";

export function useLocalStorage<T>(key: string){
    localStorage.setItem('cart-items', JSON.stringify([2, 1]))

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key) ?? ''))


    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
        
    }

    return {
        value,
        updateLocalStorage
    }
}