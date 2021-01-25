import { useState } from "react"

 
 export const useCounter = (initialState = 10) => {
 
    const [stateCounter, setstate] = useState(initialState);

    const accion = (a) =>{
        if(a === 'sumar'){
            setstate(stateCounter + 1)}
        else if(a === 'rest'){
            setstate(stateCounter - 1);
        }
    }

    const reset = () => {
        setstate(initialState);
    }

    return{
        stateCounter,
        accion,
        reset
    }

 }
 