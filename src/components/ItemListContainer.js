import React from "react";
export function ItemListContainerComponent(props){
    return (
      <>
        <div className="w-50 d-flex justify-content-center">
          <div className="w-50 d-flex flex-column align-items-center mt-2 bg-info border border-3 border-opacity-50 border-primary rounded-pill">
            <div className="mt-1">
              <img src={require(`../images/foto-${props.image}.png`)} alt={`Foto de ${props.alt}`} width="150" height="150"style={{filter: "brightness(1.1)", mixBlendMode: "multiply"}}/>
            </div>

            <div className="d-flex flex-column text-center fs-4">
              <span>{props.nombre}</span>
              <span>{props.des}</span>
              <span>{props.precio}</span>
            </div>
          </div>
        </div>
      </>
    )
}