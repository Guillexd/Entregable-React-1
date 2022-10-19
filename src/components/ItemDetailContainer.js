import React, {useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import productos from "./productos.json";

function ItemDetailContainer(){
  const { id }=useParams();
  const productoUnitario=productos.filter((el) => `producto${el.count}` == id);
 
  return (
    <>
      <ItemDetail item={productoUnitario} ></ItemDetail>
    </>
  )
}

export default ItemDetailContainer;