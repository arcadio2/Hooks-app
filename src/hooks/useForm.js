import { useState } from "react";


export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)



    const onInputChange = ({target})=>{//target de event
        const {name, value } = target;  //nombre y valor de target
        setformState({
            ...formState,
            [ name ]: value // [] agarra el nombre n string '' y lo usa como propiedad
        })

    }

    const onResetForm = ()=>{
        setformState(initialForm)
    }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
}
