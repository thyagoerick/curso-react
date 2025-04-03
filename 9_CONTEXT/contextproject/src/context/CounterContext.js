// 1 - criar contexto
import React, { createContext, useState } from "react";

export const CounterContext = createContext(); //Cria o contexto

console.log('CounterContext', CounterContext);
console.log('CounterContext.Provider', CounterContext.Provider);


//2 - criar provider
// cria quem vai prover, ou seja, quem vai disponibilizar este contexto (um provedor desse contexto)
export const CounterContextProvider = ({children}) =>{ 
    const [counter, setCounter] = useState(5)
    
    // Esse .Provider é um objeto que está contido em createContext(), ele tembém contém o .Consumer 
    // que em outro momento era usado para consumoir o valor disponibilizado pelo .Provider
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children} 
            {/* Dessa forma com o CounterContextProvider recebendo o  children, podemos passar o App e disponibilizar 
                com as importações: 
                    - do CounterContextProvider no index.js para reber o App.js
                    - do CounterContext onde eu quero utilizar o valor disponibilizado, com no Home.jsx

                É importante mencionar que quando o CounterContext é importado ele em acesso ao counter por meio do useContext (que é nova 
                forma de consumir um contexto), pois quem tem o conter realmente é o .Provider do CounterContext e não o CounterContextProvider
                
                O único papel do CounterContextProvider é ser um componente que vai receber um children e ser importado onde queremos que o
                contexto específico seja acessado, ou seja, o componente que for o children terá acesso ao contexto e a todas as variáveis de estado daquele contexto que estão disponibilizadas pelo CounterContext.Provider , o CounterContext é o contexto.
            */}
        </CounterContext.Provider>
    )
}

