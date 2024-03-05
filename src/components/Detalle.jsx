import { useParams } from "react-router-dom"


export const Detalle = () => {

  const {id} = useParams();

  return (
    <>{id}</>
  )

  
}
