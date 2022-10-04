import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList(props){
  const { productList , id} = props;
  const [data, setData]=useState([]);

  useEffect(() => {
    if (id!==undefined){
      setData(productList.filter(el => el.tipo==id))
    } else {
      setData(productList)
    }
  }, [id]);

  return(
    <div className="d-flex flex-wrap">
      {data.map((prod, index) => <Item titulo={prod.titulo} descripcion={prod.descripcion} stock={prod.stock} precio={prod.precio} imag={prod.imag} id={`producto${index}`} key={`producto${index}`}/>)}
    </div>
  )
}

export default ItemList;