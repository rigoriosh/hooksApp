import React from 'react'
import { CounterApp } from './components/01-useState7/CounterApp'
import { SimpleForm } from './components/02-useEffect/SimpleForm'

export const HookApp = () => {
    return (
        <>
            <h1><i className="fas fa-h1    "> Hi Rigo</i></h1>
            <CounterApp/>            
            
            <SimpleForm/>
        </>
    )
}
