import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
import { useCartContext } from "../../Context/CartContext";


export const CartWidget = () => {

    const {cantidad} = useCartContext()

    return (
        <div>
            <span className="numero__carrito">{cantidad || "" }</span><ShoppingCartIcon className="icon__shop" sx={{ color: '#0cc9a7', fontSize: '45px' }}/> 
        </div>
    )

}
