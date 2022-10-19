import React from "react";
import { useCarritoContexto } from "./CartContext";
import Cart from "./Cart";

function CartContainer(){

  const { carrito } = useCarritoContexto();

  return (
    <div className="container d-flex flex-column align-items-center">
      {carrito.map(props => <Cart props={props} key={props.id+".1"}/>)}
    </div>
  )
} 

export default CartContainer;