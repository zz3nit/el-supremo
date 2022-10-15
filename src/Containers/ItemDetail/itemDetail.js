import React from "react";
import './ItemDetail.css'

export const ItemDetail = (props) =>{
    return(
        <div className="detalle__card">
            <div className="detalle__display">
            <img className="detalle__imagen" src={props.product.imagen} alt="" />
            </div>
            <div>
            <h2>{props.product.titulo}</h2>
            <p className="detalle__descripcion">{props.product.descripcion}</p>
            <p className="detalle__precio">Precio: ${props.product.precio}</p>
            <button>Comprar</button>
            </div>
        </div>
 
    )
}

