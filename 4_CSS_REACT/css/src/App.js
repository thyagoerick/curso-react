import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from 'react'

function App() {


  const objStyle = {
    color: "purple", 
    padding: "25px", 
    borderTop:"2px solid aqua",
    backgroundColor: "#6495ED"
  }

  const n = 15

  const [name] = useState("Thyago")

  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este é o parágrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop:"2px solid red"}}>
        Este elemento foi estilizado de forma inline 1</p>
        <p style={objStyle}>
        Este elemento foi estilizado de forma inline 2</p>
         {/* CSS Inline  dinâmico*/}
         <h2 style={ n < 10 ? {color: "purple"} : ({color: "pink"})}>CSS dinâmico</h2>
         <h2 style={ n > 10 ? {color: "purple"} : ({color: "pink"})}>CSS dinâmico</h2>
         <h2 style={ name === "Thyago" ? {color: "green", backgroundColor:"#000"} : null}>Teste nome</h2>
        { /* Classe dinâmica */ }
        <h2 className={redTitle ? "red-title" : "title"}> Este título vai ter classe dinâmica</h2>
        {/* CSS Módules */}
        <Title/>
        <h2 className="my_title">Testando</h2>

    </div>
  );
}

export default App;
