
import React, { useState } from 'react'


export const FormWithCustomeHook = () => {    

    const [stateForm, setsForm] = useState(
        {
            name: '',
            email: '',
            password: ''
        })

    const {name, email, password} = stateForm;

    

    const handledInputChange = ({target}) => {
        console.log(target.value)
        setsForm(
            {
                ...stateForm, [target.name]: target.value
            }
        )
        
    }

    return (
        <>
        <h1>FORM WITH CUSTOME HOOK</h1>            
        <hr/>
        
        <div className="form-group">
            <p>{name}</p>
            <input type="text" name="name" className="form-control" placeholder="Tu nombre"
                autoComplete="off" value={name} onChange={handledInputChange}/>
        </div>
        <div className="form-group">
            <p>{email}</p>
            <input type="text" name="email" className="form-control" placeholder="email@email.com"
                autoComplete="off" value={email} onChange={handledInputChange}/>
        </div>

        <div className="form-group">
            <p>{password}</p>
            <input type="password" name="password" className="form-control" placeholder="************"
                value={password} onChange={handledInputChange}/>
        </div>
        
        </>
    )
}
