import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          {/* 4 - rota dinâmica */}
          <Route path='/products/:id' element={<Product/>} />
          {/* 6 - nested route (rotas aninhadas) */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/*
            O componente `<Navigate to="" />` serve para redirecionar rotas, sendo útil para redirecionar rotas antigas para novas.
            Por exemplo, no caso acima, a rota `/company` pode ter sido usada anteriormente e ainda aparece em mecanismos de busca.
            Para não perdermos o SEO associado a `/company` e garantir que os usuários acessem a rota correta (`/about`),
            utilizamos o `<Navigate to="" />` para redirecionar automaticamente.

            Isso é diferente do `navigate()`, que é uma função usada para navegações programáticas, como em eventos de clique
            ou submissão de formulários, e permite maior controle (por exemplo, passando parâmetros ou opções de navegação).
          */}

          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
