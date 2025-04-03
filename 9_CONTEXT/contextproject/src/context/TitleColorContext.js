import React, {createContext, useReducer} from 'react'



export const TitleColorContext = createContext()


export const titleColorReducer = (state, action) =>{
  switch (action.type) {
    case 'RED':
      return {...state, color: 'red'}
    case 'BLUE':
      return {...state, color: 'blue'}  
    default:
      return state;
  }

}

export const TitleColorContextProvider = ({children}) => {    
  /** useReducer
   * É como se fosse um useState, mas que controla mais coisas.
   * 
   * Quando estamos trabalhando em hook, temos duas coisas:
   *  -  o estado do hook atual, isto é, o que ele está gerenciando (state [que é um objeto, 
   * que pode ter várias propriedades ou uma só, é o que o hook está entregando; que no nosso
   * caso é a cor do texto])
   *  - E temos o dispatch, que é uma função que vai alterar o contexto depois;
   */
  /** Assim como no useState, que nós temos como colocar uma variável para inicializar.
   * também podemos fazer isso no useReducer, mas ele funciona de uma forma diferente:
   * 
   * useReducer(<variavel state; o switch>, <valor que vai ser alterado ao iniciar>)
   */

  /**
   *  O useReducer é um hook do React que recebe dois argumentos principais:
   *  - Uma função redutora (reducer)  -----------------> titleColorReducer
   *  - Um estado inicial -----------------> {color:"purple"}
   * 
   *  Ele retorna um array com dois elementos:
   *  - O estado atual -----------------> state
   *  - Uma função dispatch para atualizar o estado -----------------> dispatch
   */
  const [state, dispatch] = useReducer(titleColorReducer, {color:"purple"});
  /** O que está acontecendo:
   * O segundo argumento {color: "purple"} é o estado inicial, não uma atribuição ao dispatch
   * O useReducer retorna:
   *  - state: o estado atual (que começa como {color: "purple"})
   *  - dispatch: uma função que você pode usar para disparar ações que serão processadas pelo seu titleColorReducer
   */

  console.log("Title color context", state);
  

  return (
    <TitleColorContext.Provider value={{...state, dispatch}}>
      {children}
    </TitleColorContext.Provider>
  )
}

