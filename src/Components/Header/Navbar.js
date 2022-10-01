import React from "react";
import './Navbar.css';
import logo from '../../assets/logo-elsupremo.png';
import { CartWidget } from "./CartWidget";




const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="logo de la empresa El Supremo" />
            <nav>
            <ul>
                <a href="#">Mangas</a>
                <a href="#">Comics</a>
                <a href="#">Merchandising</a>
            </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar