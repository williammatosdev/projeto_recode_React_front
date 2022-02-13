import React from "react";
import Home from "./page/Home";
import Destino from "./page/Destino";
import Contato from "./page/Contatos";
import Promocoes from "./page/Promocoes";
import Cadastro from "./page/Cadastro";
function App() {
  const url = window.location.href;

  return (
    <div>
      {
        url === 'http://localhost:3000/Home' 
        ? <Home/>
        : url === 'http://localhost:3000/Destino' 
        ? <Destino/>
        : url === 'http://localhost:3000/Promocoes' 
        ? <Promocoes/>
        : url === 'http://localhost:3000/Contato' 
        ? <Contato/>
        : url === 'http://localhost:3000/Cadastro' 
        ? <Cadastro/>        
        : <Home/>
      }
    </div>
  );
    }
export default App;
