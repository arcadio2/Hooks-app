import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormCustomHook = () => {
    
    const {formState, onInputChange,onResetForm,username,email,password} = useForm({
        username:'',
        email:'',
        password:''
    }); 

    //const {username,email,password} = formState;

    /**
     *  {
            username:'',
            email:"",
            password:''
        }
    */


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
        <h1>Formulario con Custom hook</h1>
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
        <input
            type='password'
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onInput={onInputChange}
        />
        <button className="btn btn-secondary" onClick={onResetForm}>Borrar</button>

        {
            (username==="strider2") && <Message/>
        }
    </>
  )
}
