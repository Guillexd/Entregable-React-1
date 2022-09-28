import React from "react";
export function ItemListContainerComponent({ greeting, children }){
    return (
      <>
        {children}
        <p>{ greeting }</p>
      </>
    )
}