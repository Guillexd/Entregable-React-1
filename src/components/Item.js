import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item (props){

  const { titulo, descripcion, id, stock, precio, imag} = props;

  return(
    <section className="border border-info rounded-3 d-flex flex-column align-items-center w-50 p-2">
      <span>{titulo}</span>
      <span>{descripcion}</span>
			<span>${precio}</span>
        <Link to={`/item/${id}`}><img src={require(`../images/${imag}.png`)} alt={titulo} width="150"/></Link>
      <ItemCount stock={stock}></ItemCount>
    </section>
  )
}

export default Item;