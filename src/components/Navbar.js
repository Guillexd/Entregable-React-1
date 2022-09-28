import React from "react";
import { CartWidgetComponent } from './CartWidget';

function NavbarPage(){
    return (
      <>
        <div className="d-flex align-items-center">
          <a href="#">
            <img src={require("../images/guille.png")} alt="Guille's Market" width="150"/>
          </a>
        </div>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span clasNames="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Preguntas frecuentes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Registrarse</a>
                </li>
              </ul>
            </div>    
          </div>
        </nav>
        <CartWidgetComponent/>
      </>
    )
}

export default NavbarPage;