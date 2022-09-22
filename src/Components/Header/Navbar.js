import React from "react";
import './Navbar.css';
import logo from '../../assets/logo-elsupremo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="logo de la empresa El Supremo" />
            <nav>
            <ul>
                <a href="">Mangas</a>
                <a href="">Comics</a>
                <a href="">Manwhas</a>
            </ul>
            </nav>
            <ShoppingCartIcon className="iconShop" sx={{ color: '#7D141D', fontSize: '35px' }}/>
        </header>
    )
}

export default Navbar