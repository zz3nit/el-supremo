import React, { useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { toast } from "react-toastify";

export const ItemDetail = ({product}) => {
    
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {agregarItem} = useCartContext();

    const onAdd = (cantidad) => {
        agregarItem (product, cantidad)
        setMostrarItemCount(false);
        toast.success('agregaste productos', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            });
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
        <>
        <Link to={'/cart'}>
            <button>Comprar</button>
        </Link>
        <Link to={'/'} >
            <button>Seguir comprando</button>
        </Link>
        </>
        }
    </div>
    </div>
);
};
