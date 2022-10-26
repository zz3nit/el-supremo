import React, { useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ({product}) => {
    
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {agregarItem} = useCartContext();

    const onAdd = (cantidad) => {
        agregarItem (product, cantidad)
    setMostrarItemCount(false);
};

return (
    <div className="detalle__card">
    <div className="detalle__display">
        <img className="detalle__imagen" src={product.imagen} alt="" />
    </div>
    <div className="detalle__compra">
        <h2>{product.titulo}</h2>
        <p className="detalle__descripcion">{product.descripcion}</p>
        <p className="detalle__precio">Precio: ${product.precio}</p>
        {mostrarItemCount ? 
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        : 
        <Link to={'/cart'}>
        <button>Comprar</button>
        </Link>
        }
    </div>
    </div>
);
};
