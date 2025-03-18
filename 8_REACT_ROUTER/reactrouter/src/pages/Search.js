import './Search.css'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
  const [searchParams] = useSearchParams()
  /**O useSearchParams do react-router-dom é um hook que permite acessar e manipular 
   * os parâmetros de consulta (query parameters) da URL. Esses parâmetros são tudo 
   * que vem após o ? na URL.
   * 
   * Isso significa que se a URL for http://localhost:3000/search?q=Calça , a 
   * URL da API será http://localhost:3000/products?q=Calça .
   * 
   * Logo, o searchParams retorna o q=Calça e o restante se houver.
   **/

  //Testar pesquisando: Ca
  console.log('searchParams', searchParams);
  console.log("searchParams.get('q')", searchParams.get('q'));
  console.log("searchParams.getAll('q')", searchParams.getAll('q'));
  console.log("searchParams.has('Ca')", searchParams.has('q', 'Ca'));



  const url = 'http://localhost:3000/products?' + searchParams

const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className='products'>
            {items && items.map(item => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(item.price)}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Search