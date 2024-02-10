"use client"

import { useEffect, useState } from "react";
import { json } from "stream/consumers";

export function useLocalStorage<T>(key: string){

    
    const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(key) ?? ''))

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));   
    }

    return {
        value,
        updateLocalStorage
    }
}