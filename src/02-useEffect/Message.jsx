import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setcoords] = useState({x:0,y:0})

    useEffect(() => {
        const onMouseMove = ({x,y})=>{
            const coords = {x,y};
            setcoords(coords);
        }
        window.addEventListener('mousemove',onMouseMove)
      //console.log("Componente momntado")
    
      return () => {
        window.removeEventListener('mousemove',onMouseMove);
        //console.log("Mensaje desmontado");
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        {
            JSON.stringify(coords)
        }
    </>
  )
}
