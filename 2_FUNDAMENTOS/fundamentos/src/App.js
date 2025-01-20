// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import { MyComponent } from "./components/MyComponent";
import Events from './components/Events';
// DESAFIO - TÓPICO 2 - FEITO
import Challenge from './components/Challenge';

// styles / CSS
import './App.css';


function App() {
  const componente = "App";
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent nameComponent={componente}/>
      <Events/>
      <Challenge/>
    </div>
  );
};

export default App;