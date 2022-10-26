import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import './Cartview.css'




const Cart = () => {
    const {carrito, total, vaciarCarrito} = useCartContext()
    console.log(carrito);
    return (
        <>
        {carrito.length === 0 ? (
            <h1>No hay elementos en el carrito aun, puedes volver a <Link to="/">COMPRAR</Link>
            </h1>
        ) : (
            <>
            {carrito.map((producto) => {
                return( 
                <>
                <ItemCart key={producto.id} product={producto}/>
                </>
            )})}
            <div className="detalle__compra">
            <p className="detalle__titulo">Precio Total: ${total}</p>
            <button className="boton__vaciar" onClick={()=>vaciarCarrito()} >vaciarCarrito</button>
            </div>
            </>
        )}
        </>
    )
    }


export default Cart