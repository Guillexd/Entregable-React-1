import React, {useState} from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item }){
  const productoUnitario=item[0];
  return (
    <div className="d-flex flex-column align-items-center productos-item mt-5">
      <section className="w-50 border border-3 border-warning rounded-pill text-center">
        <p style={{fontSize: "2rem"}}>Producto: { productoUnitario.titulo}</p>
      </section>
      <section className="w-50 border border-3 border-warning rounded-5 d-flex justify-content-center align-items-center py-5 mt-1">
        <img src={require(`../images/${productoUnitario.imag}.png`)} alt={productoUnitario.titulo} width="500"/>
        <div className="d-flex flex-column align-items-center border border-1 border-info rounded-5 p-3">
          <span>{productoUnitario.titulo}</span>
          <span>{productoUnitario.descripcion}</span>
          <span>${productoUnitario.precio}</span>
          <ItemCount props={productoUnitario}></ItemCount>
        </div>
      </section>
    </div>
  )
}

export default ItemDetail;