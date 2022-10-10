import React from "react";
import './ItemDetail.css'

const ItemDetail = ({listaMangaUno}) =>{
    console.log(listaMangaUno);
    return(
        <div className="detalle__card">
            <div className="detalle__display">
            <h1>{listaMangaUno.titulo}</h1>
            <img className="detalle__imagen" src={listaMangaUno.imagenDetail} alt="" />
            <p className="detalle__descripcion">{listaMangaUno.descripcion}</p>
            <p className="detalle__precio">Precio: ${listaMangaUno.precio}</p>
            </div>
            <div>
            <h2>Bloque en construccion</h2>
            <button>Comprar</button>
            </div>
        </div>
 
    )
}

export default ItemDetail