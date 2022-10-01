import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'


export const CartWidget = () => {
    return (
        <div>
           <ShoppingCartIcon className="iconShop" sx={{ color: '#c01725', fontSize: '35px' }}/> 
        </div>
    )

}
