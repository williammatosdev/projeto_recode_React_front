import React from "react";
import "./style.css";
import Header from"../../componentes/Header";
import Footer from "../../componentes/Footer";
import Carrossel from "./componentes/Carrossel";


function Home() {
    return(
        
        <section>
             <Header/>
             <Carrossel/>
             <Footer/>             
        </section>

    )
}

export default Home;