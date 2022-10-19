import React, { createContext, useContext, useState } from "react";

const contexto=createContext();
export const useCarritoContexto = ()=>useContext(contexto);

function CartContext({children}){
  const [carrito, setCarrito]=useState([]);

  return (
    <contexto.Provider value={{carrito, setCarrito}}>{children}</contexto.Provider>
  )
}
export default CartContext;