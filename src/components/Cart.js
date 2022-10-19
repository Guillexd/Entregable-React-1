import React from "react";

function Cart({props}){
    console.log(props);
    return (
      <section className="d-flex align-items-center justify-content-around my-1 w-50 border border-3 rounded-end">
        <div className="d-flex flex-column text-center">
          <span>{props.titulo}</span>
          <span>{props.descripcion}</span>
          <span>{props.precio}</span>
        </div>
        
        <img src={require(`../images/${props.imag}.png`)} alt={props.titulo} width="150"/>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </section>
    )
} 

export default Cart;