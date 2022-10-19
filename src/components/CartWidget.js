import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContexto } from "./CartContext";

export function CartWidget(){
  const { carrito } = useCarritoContexto();
    return (
      <>
        <div className="p-4 my-1 position-relative">
          <Link to={"/carrito"} className="text-decoration-none">
            <img src={require("../images/carrito.png")} alt="Guille's Market logo" height="48px"/>
          </Link>
          <div className="position-absolute top-0 end-0">
            <h3>{carrito.length}</h3>
          </div>
        </div>
      </>
    )
}