import React, { useState } from "react";

function ItemCount({stock}){

  const [contador, setContador]=useState(1);

  const aumentar = () =>{
    setContador(!(contador>=stock) ? contador + 1 : stock);
  }

  const disminuir = () =>{
    setContador( (contador>1) ? contador - 1: 1);
  }

  const onAdd = () =>{
    alert ("Has comprado " + contador + " items.");
  }

  return(
    <>
      <div className="my-2">
      <button className="btn btn-outline-primary" onClick={disminuir}>-</button>
        <span className="mx-3">{stock>=contador ? contador:1}</span>
      <button className="btn btn-outline-primary" onClick={aumentar}>+</button>
      </div>
      <p>{contador==stock?<>Ya no hay stock</>:null}</p>
      <div className="btn btn-outline-primary">
        <button className="btn btn-outline-none" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount;