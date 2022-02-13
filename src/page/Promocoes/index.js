import React from "react";
import "./style.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";


function Promocoes(){
    return(
<section className="bg">
        <Header/>

    <main className="text-center">
        <div class="displayil">
                <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia1.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>Maceió</tr>            
                <tr>Valor : R$ 380,00</tr>            
                <tr>
                <p className="style"> Desconto: R$ 310,50</p>            
                </tr>
            </table>
        <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a>            
        </div> 
        
    <div class="displayil">
        <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia2.jpg" alt="Praia"/></a><br/>
        <table className="style1">
            <br/>
            <tr>Fortaleza</tr>            
            <tr>Valor : R$ 340,50</tr>            
            <tr>
                <p className="style"> Desconto: R$ 290,50</p>                
            </tr>
        </table>
        <a href="http://localhost:3000/Cadastro"><button>Comprar</button></a>
    </div>

         <br/>

    <div class="displayil">
        <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia3.jpg" alt="Praia"/></a><br/>
        <table className="style1">
            <br/>
            <tr>Florianópolis</tr>            
            <tr>Valor : R$ 340,50</tr>            
            <tr>
                <p className="style"> Desconto: R$ 290,50</p>
            </tr>
        </table>
        <a href="http://localhost:3000/Cadastro"><button>Comprar</button></a>
    </div>

          <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia1.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>Rio de Janeiro</tr>                
                <tr>Valor : R$ 340,50</tr>                
                <tr>
                    <p className="style"> Desconto: R$ 290,50</p>                                
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button>Comprar</button></a>
        </div>

           <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia2.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>São Paulo</tr>                
                <tr>Valor : R$ 340,50</tr>                
                <tr>
                    <p className="style"> Desconto: R$ 290,50</p>                                    
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button>Comprar</button></a>
        </div>

           <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia3.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>            
                <tr>Salvador</tr>                
                <tr>Valor : R$ 340,50</tr>                
                <tr>
                    <p className="style"> Desconto: R$ 290,50</p>                                        
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button>Comprar</button></a>
        </div>

             <br/>
        
                 <h3 align="center">
                    Formas de Pagamento
                 </h3>
           <center>
              <img width="15%" src="bandeira de Cartões.png"  alt="Formas de pagamento"/>
           </center>
    </main>
  <Footer/>
</section>

    )
}

export default Promocoes;