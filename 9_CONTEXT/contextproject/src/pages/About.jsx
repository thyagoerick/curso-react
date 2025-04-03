//import React, { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext';
/* Sempre, para consumir um contexto precisamos do
  useContext e do arquivo do Contexto específico

  Pois passaremos o arquivo do Contexto específico
  para o useContext consumir e disponibilizar as variaveis 
  de estado disponíveis naquele contexto
*/

//css 
import './About.css'

const About = () => {

  //const {counter, setCounter} = useContext(CounterContext)
  
  const {counter, setCounter} = useCounterContext();
  
  // 5 - context mais complexo  
  const { color, dispatch } = useTitleColorContext()
  console.log(color);

  // 6 - alterando contexto complexo
  const setTitleColor = (color) =>{
    dispatch({type: color})
  }

  return (
    <div className='about'>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter-1)}>Subtrai 1</button>

       {/* 6 - alterando contexto complexo  */}
       <div>
        <button onClick={() => setTitleColor('RED')}>VERMELHO</button>
        <button onClick={() => setTitleColor('BLUE')}>AZUL</button>
      </div>

    </div>
  )
}

export default About