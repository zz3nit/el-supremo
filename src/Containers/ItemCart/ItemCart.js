import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './ItemCart.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ItemCart = ({product}) => {
    console.log(product);

    const { borrarItem } = useCartContext()
    console.log(borrarItem);
    return(
        <>
        <section className="item__cart">
            <img src={product.imagen} alt=""/>
                <p>Nombre: {product.titulo}</p>
                <p>Precio: ${product.precio}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button className="boton__borrar" onClick={()=>borrarItem(product.id)}>
                    < DeleteForeverIcon/>
                    </button>
        </section>
        </>
    )
}


export default ItemCart