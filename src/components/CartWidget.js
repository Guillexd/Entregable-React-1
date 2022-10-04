import React from "react";
import { Link } from "react-router-dom";

export function CartWidget(){
    return (
      <>
        <div className="border rounded-circle p-2 my-1">
          <Link to={"/carrito"} className="text-decoration-none">
            <img src={require("../images/carrito.png")} alt="Guille's Market logo" height="48px"/>
          </Link>
        </div>
      </>
    )
}