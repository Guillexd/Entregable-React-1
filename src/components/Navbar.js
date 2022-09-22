import React from "react";
function NavbarPage(){
    return (
      <>
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
      </>
    )
}

export default NavbarPage;