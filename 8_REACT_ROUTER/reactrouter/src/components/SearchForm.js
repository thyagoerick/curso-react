import './SearchForm.css'

import { useNavigate } from 'react-router-dom' //redirecionar o usuario dentro do codigo do componente
import { useState } from 'react'

const SearchForm = () => {

    // disponibiliza a criação de uma string de busca para padronização de consulta
    const navigate = useNavigate() 
    const [query, setQuery] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('search?q=' + query) 
        /**
         * Quando isso é feito no navigate: search?q=
         * significa que ele irá navegar para uma rota que é manipulada pelo react-router-dom
         * rota essa que tem o /search como endpoint e quando ele encontar ele vai passar o ?q= 
         * como parametro de busca (search param
         * 
         * Obs.: Esse ?q=  é uma implementação disponível apenas no json-sever, onde ele faz a busca
         * valores independentemente da chave, como se fosse um like para todas as chaves de modo geral,
         * para fazer algo do tipo em um projeto fullstack, é necessário criar essa implementação, ou 
         * algo similar, ou algo que supra a necessidade nesse sentido. No json-serve també é possível
         * pesquisar pelas chaves do seu objeto disponivel pra pesquisa como por exemplo: ?id=
        */
    }

    return (
       <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
            <input type="submit" value="Buscar" />
       </form>
    )
}

export default SearchForm