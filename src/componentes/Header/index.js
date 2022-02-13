import React from "react";
import "./style.css";

function Header() {
    return(
        <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarTogglerDemo01">
                <a class="color-logo navbar-brand" href="#">VOE PLUS</a>
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="color-text nav-link" href="http://localhost:3000/Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="color-text nav-link" href="http://localhost:3000/Destino">Destino</a>
                    </li>
                    <li class="nav-item">
                        <a class="color-text nav-link" href="http://localhost:3000/Promocoes">Promoções</a>
                    </li>
                    <li class="nav-item">
                        <a class="color-text nav-link" href="http://localhost:3000/Contato">Contato</a>
                    </li>                   
                </ul>              
            </div>
        </nav>
    </header>
    )
}

export default Header;