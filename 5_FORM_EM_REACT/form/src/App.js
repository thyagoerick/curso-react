import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      {/* Formulários e React */}
        <MyForm user={{
          name:'Thyago', 
          email:'thyago123gois@gmail.com', 
          bio: 'Sou o Administrador', role:'admin'
      }}/>
      {/* Label envolvendo o input */}

    </div>
  );
}

export default App;
