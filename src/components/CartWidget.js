import React from "react";
export function CartWidgetComponent(){
    return (
      <>
        <div className="border rounded-circle p-2 my-1">
          <a href="#">
            <img src={require("../images/carrito.png")} alt="Guille's Market logo" height="48px"/>
          </a>
        </div>
      </>
    )
}