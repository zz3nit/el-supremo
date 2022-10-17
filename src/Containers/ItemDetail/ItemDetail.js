import React from "react";
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'

const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} producto/s` )
};

export const ItemDetail = (props) =>{
    return(
        <div className="detalle__card">
            <div className="detalle__display">
            <img className="detalle__imagen" src={props.product.imagen} alt="" />
            </div>
            <div className="detalle__compra">
            <h2>{props.product.titulo}</h2>
            <p className="detalle__descripcion">{props.product.descripcion}</p>
            <p className="detalle__precio">Precio: ${props.product.precio}</p>
            <ItemCount stock={props.product.stock} initial={1} onAdd={onAdd} />
            
            </div>
        </div>
 
    )
}

