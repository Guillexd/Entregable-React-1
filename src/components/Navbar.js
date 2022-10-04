import React from "react";
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

function NavbarPage(){
    return (
      <header className="App-header d-flex justify-content-around bg-secondary bg-opacity-75">
        <div className="d-flex align-items-center">
          <Link to={"/"}>
            <img src={require("../images/guille.png")} alt="Guille's Market" width="150"/>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg w-50">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex justify-content-around">
                <li className="nav-item">
                  <Link to={`/categorias/verduras`} className="text-decoration-none">Verduras</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/categorias/frutas`} className="text-decoration-none">Frutas</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/categorias/bebidas"} className="text-decoration-none">Bebidas</Link>
                </li>
              </ul>
            </div>    
          </div>
        </nav>
        <CartWidget/>
      </header>
    )
}

export default NavbarPage;