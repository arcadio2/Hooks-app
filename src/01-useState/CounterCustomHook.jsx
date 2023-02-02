import { UseCounter } from "../hooks/setCounter";


export const CounterCustomHook = () => {

    const { counter,increment,decrement,reset } = UseCounter();
    

  return (
    <>
        <h1>Custom Hook counter: {counter}</h1>
        <hr/> 

        <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>

    </>
  )
}
