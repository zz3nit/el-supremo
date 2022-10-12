import React from "react";
import './Navbar.css';
import logo from '../../assets/logo-supremo2.png';
import { CartWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const listaCategorias = [
        {nombre:"Mangas", id:0, ruta:"/categoria/Mangas"},
        {nombre:"Comics", id:1, ruta:"/categoria/Comics"},
        {nombre:"Merchandising", id:2, ruta:"/categoria/Merchandising"},
    ]

    return (
        <header>
            <Link src={logo} to={"/"}>
            <img src={logo} alt="logo de la empresa El Supremo" />
            </Link>
            <nav>
            <ul>
                {
                    listaCategorias.map((categoria)=>{
                        return <NavLink className="link__navbar" key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink> 
                    })
                }
            </ul>
            </nav>
            <Link to={"/cart"}>
                <CartWidget/>
            </Link>
        </header>
    )
}

export default Navbar