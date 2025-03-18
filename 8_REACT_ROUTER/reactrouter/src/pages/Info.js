import { useParams } from 'react-router-dom'
import './Info.css'



const Info = () => {

    const {id} = useParams();

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  )
}

export default Info