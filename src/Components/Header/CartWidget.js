import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'


export const CartWidget = () => {
    return (
        <div>
           <ShoppingCartIcon className="iconShop" sx={{ color: '#0cc9a7', fontSize: '35px' }}/> 
        </div>
    )

}
