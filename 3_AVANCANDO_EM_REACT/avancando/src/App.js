import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

import './App.css';

//Imagens no React
import City from "./assets/city.jpg"

import { useState } from 'react';

function App() {
  //const name="Erick";
  const [username] = useState("Thyago Gois");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0}, 
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343}, 
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ];

  
  function showMessage(){
    console.log("Evento do componente pai!");
  }
  
  const [message, setMessage] = useState("");
  
  const handleMessage = (msg) => { setMessage(msg); };
  
  
  //DESAFIO 4 - TÓPICO 1 (FEITO)
    const peoples = [
      {id: 1, nameUser: "Thyago Erick", age: 21, job: "Dev"}, 
      {id: 2, nameUser: "Maristela", age: 21, job: "Educadora Social"}, 
      {id: 3, nameUser: "Gois", age: 17, job: "UI/UX Designer"}
    ];
 
  return (
    <div className="App">
      <h1>Seção 3: Avançando em React</h1>
      {/* Imagens no React */}
        {/* Imagem em public */}
          <div>
            <img src="/img1.jpg" alt="Paisagem" />
          </div>
        {/* Imagem em assets */}
          <div>
            <img src={City} alt="Cidade" />
          </div>
      
      {/* Evento de click */}
      {/* useState hook */}
      <ManageData/>
      
      {/* Funções de renderização */}
      {/*Renderização de lista */}
      {/* A propriedade key */}
      {/* Previous state */}
      <ListRender/>
      
      {/* Renderização condicional */}
      {/* Adicionando um else (o if ternário)*/}
      <ConditionalRender/>
      
      {/* Props */}
        <ShowUserName name={username} />
      
      {/* Desestruturando props (Destructuring props) */}
        <CarDetails brand="VW" km={100000} color="Verde" newCar={false} />
      
      {/* Reutilização de componentes */}
        <CarDetails brand="Ford" color="Vermelha" km={0}  newCar={true} />
        <CarDetails brand="Fiat" color="Branca" km={4500}  newCar={false} />
      
      {/* Reutilização com loop (loop em array de objetos) */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color} 
            km={car.color} 
            newCar={car.newCar}
            />
        ))}
     
     {/* React Fragments (fragment) */}
        <Fragment propFragment="teste"/>

      {/* Children prop (children) */}
        <Container myValue="testing">
          <p>E este é o condeúdo</p>
        </Container>
        <Container myValue="testing 2">
          <h5>Testando o container</h5>
        </Container>
      
      {/* Funções em props (executar função) */}
        <ExecuteFunction myFunction={showMessage}/>

      {/* Elevação de state (state lift) */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      
      {/* DESAFIO 4 - TÓPICO 2 (FEITO) */}
      {peoples.map((people) => (
        <UserDetails key={people.id} nameUser={people.nameUser} age={people.age} job={people.job}>
        
         {/* DESAFIO 4 - TÓPICO 3 (FEITO) */}
          {
            // DESAFIO 4 - TÓPICO 4 (FEITO) 

            people.age >= 18 
            ? (
                <p style={{ 
                  margin:20, padding:5, borderRadius:15,
                  color:'#FFFFFF',
                  backgroundColor: '#28A745'}}>
                    PODE tirar carteira de Habilitação
                </p>
              )
            : (
                <p style={{
                  margin:20, padding:5, borderRadius:15,
                  color:'#FFFFFF',
                  backgroundColor: '#DC3545'}}> 
                    NÃO pode tirar carteira de Habilitação
                </p>
              )
          }
        </UserDetails>
      ))}
    </div>
  );
}

export default App;
