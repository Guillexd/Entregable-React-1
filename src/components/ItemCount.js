import React, { useState, useEffect } from "react";
import { useCarritoContexto } from "./CartContext";

function ItemCount({props}){

  const [contador, setContador]=useState(1);

  const { carrito, setCarrito } = useCarritoContexto();

  const aumentar = () =>{
    setContador(!(contador>=props.stock) ? contador + 1 : props.stock);
  }

  const disminuir = () =>{
    setContador( (contador>1) ? contador - 1: 1);
  }

  const onAdd = () =>{
    console.log(`producto${props.count}`);
    if (carrito.some(obj=>obj.id==`producto${props.count}`)) return;
    const obj={
      titulo: props.titulo,
      descripcion: props.descripcion, 
      id: `producto${props.count}`, 
      precio: props.precio, 
      imag: props.imag
    }
    setCarrito([...carrito, obj])
    console.log(carrito);
  }

  return(
    <>
      <div className="my-2">
      <button className="btn btn-outline-primary" onClick={disminuir}>-</button>
        <span className="mx-3">{props.stock>=contador ? contador:1}</span>
      <button className="btn btn-outline-primary" onClick={aumentar}>+</button>
      </div>
      <p>{contador==props.stock?<>Ya no hay stock</>:null}</p>
      <div className="btn btn-outline-primary">
        <button className="btn btn-outline-none" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </>
  )

}

export default ItemCount;