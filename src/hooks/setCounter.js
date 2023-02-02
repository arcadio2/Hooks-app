import { useState } from "react"


export const UseCounter = ( initialValue = 12) => {
  const [counter,setCounter] = useState( initialValue ); 
  

  const increment  = (value = 1)=>{  
    setCounter(counter+value)
  }
  const decrement = (value = 1)=>{
    if(counter>=value){
        setCounter(counter-value)
    }
    return
    
  }

  const reset = ()=>{
    setCounter(initialValue); 
  }


    
    return {
        counter,
        increment,
        decrement,
        reset
    }
} 
  