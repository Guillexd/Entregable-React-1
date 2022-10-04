import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import productos from "./productos.json";

function ItemListContainer(){
  const { id } = useParams();
  const [data, setData]=useState([]);

  useEffect(() => {
      const productosList=new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos)
        }, 2000);
      })

      productosList.then((resolve) =>{
        setData(productos);
      })
  }, []);
  
  return (
    <>
      <p style={{fontSize: "3rem", textTransform: "capitalize", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontWeight: "bolder"}} className="text-center">{ id==undefined ? <>Productos</> : id }</p>
      {data.length !== 0 ? <ItemList productList={data} id={id}/> : <p>Cargando...</p>}
    </>
  )
}

export default ItemListContainer;