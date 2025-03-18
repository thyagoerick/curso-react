import './Product.css'

import { useParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch';


const Product = () => {
    // 4 - rota dinâmica 
    const { id } = useParams();

    // 5 - carregamento de dado individual
    const url = 'http://localhost:3000/products/' + id
    const {data: product, loading, error} = useFetch(url)

    return (
    <>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(product.price)}</p>
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product