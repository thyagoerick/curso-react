import { useState } from "react";

const ListRender = () =>{

    /** No lugar de variáveis vamos sempre usar hooks,
     * pois eles re-renderizam (atualizam) os componentes e as variáveis
     * não fazem isso
    */
    
    const [list] = useState(["Thyago", "Erick", "Silva", "Gois"]);
    /*  temos a variavel list
        temos o useState atribuindo uma lista de nomes a list
        É equivalente a: const list =["Thyago", "Erick", "Silva"]
        com a exceção de que o hook useState atualiza o estado do
        componente e se fosse apenas variável não atualizaria.
    */

    const [users, setUsers] = useState([
        {id: 1 , name: "Felipe", age: 24},
        {id: 2 , name: "Thyago", age: 21},
        {id: 3 , name: "Maristela", age: 21},
    ]); 

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(Math.random() * 4)
        console.log(Math.floor(Math.random() * 4))

        /** O uso do "previous state" 
         
        (estado anterior) ao atualizar o estado em React tem como objetivo garantir que você está trabalhando com o valor mais recente do estado, especialmente em casos em que o novo estado depende do estado anterior.

            No exemplo que você apresentou, a função deleteUser remove um usuário aleatório da lista de usuários. Ao utilizar o "previous state" na atualização do estado, você está garantindo que está trabalhando com a versão mais recente da lista de usuários, mesmo que outros eventos de atualização de estado ocorram de forma assíncrona.

            Se você utilizasse o "state" normal diretamente dentro da função setUsers, poderia haver casos em que o valor do estado não estivesse atualizado, resultando em uma operação incorreta de remoção do usuário.

            Ao utilizar o "previous state", você está explicitamente indicando que a função de atualização do estado depende do valor anterior do estado. Isso torna o código mais legível e ajuda na manutenção futura, pois fica claro que você está manipulando o valor anterior.

            Em resumo, o uso do "previous state" é recomendado em situações em que você precisa garantir que está trabalhando com o valor mais recente do estado, especialmente quando a atualização do estado depende do estado anterior. Isso ajuda a evitar erros de inconsistência e torna o código mais claro e compreensível.
        */
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
            /**
             * No filter, ele vai buscar pelo user que for diferente do randomNumber,
             * ou seja, se no arrendondamento der 2, então ele irá buscar os elementos com id
             * diferente de 2 no objeto e irá atualizar o estado da lista com esses elementos
             * encontrados que tem o id diferente de 2. Então esse previous state meio que guarda o estado
             * da lista antes dele sofrer alguma alteração, e usa desse estado inicial (antigo) para depois
             * atualizar o mesmo componente para um estado novo, como se fosse uma reatribução
             */
        });
    };

    return (
        <div>
            <ul>
                
                {/** Normalmente quando lidamos com .map(), 
                
                dentro dele nós usamo as chaves { }. Exemplo: list.map((item) => { ... })
                 
                Mas no caso de onde ele está sendo usado não se faz desse jeito.
                Pois o JSX é considerado um Objeto, então quando retornamos objetos no map temos que colocar
                parênteses ().
                
                Exemplo: list.map((item) => ( ... ))

                */}
                {list.map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;