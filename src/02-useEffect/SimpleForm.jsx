import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setformState] = useState({
        username:'strider',
        email:"arcadio@gmail.com"
    })

    const {username,email} = formState; 


    const onInputChange = ({target})=>{
        const {name, value } = target; 
        setformState({
            ...formState,
            [ name ]: value // [] agarra el nombre n string '' y lo usa como propiedad
        })

    }


    useEffect( () => {
        //console.log("Inicio");
    },[])

    useEffect(()=>{
        //console.log("Cambio en formulario");
    },[formState]);

    useEffect(()=>{
        //console.log("Cambio en email");
    },[formState.email]);
    



  return (
    <>
        <h1>Formulario</h1>
        <hr />

        <input
            type='text'
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onInput={onInputChange}
        />
        <input
            type='email'
            className="form-control mt-2"
            placeholder="algo@algo.com"
            name="email"
            value={email}
            onInput={onInputChange}
        />
        {
            (username==="strider2") && <Message/>
        }
    </>
  )
}
