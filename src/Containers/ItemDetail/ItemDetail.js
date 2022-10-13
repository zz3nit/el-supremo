import React from "react";
import './ItemDetail.css'

const ItemDetail = ({listaProducto}) =>{
    console.log(listaProducto);
    return(
        <div className="detalle__card">
            <div className="detalle__display">
            <h1>{listaProducto.titulo}</h1>
            <img className="detalle__imagen" src={listaProducto.imagen} alt="" />
            <p className="detalle__descripcion">{listaProducto.descripcion}</p>
            <p className="detalle__precio">Precio: ${listaProducto.precio}</p>
            </div>
            <div>
            <h2>Bloque en construccion</h2>
            <button>Comprar</button>
            </div>
        </div>
 
    )
}

export default ItemDetail