import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../assets/logo-supremo2.png';
import { pink } from "@mui/material/colors";
import './Footer.css'


export const Footer = () =>{

    return(
        <>
        <footer>
        <div className="footer-container">
            <div className="footer-content-container">
                <a href="https://www.instagram.com/elsupremocomics/">
                <img className="footer-logo" src={logo} href="" alt="logo de la empresa El Supremo" />
                </a>
                <span className="footer-info"></span>
            </div>
            <div className="footer-menus">
                <div className="footer-content-container">
                <span className="menu-title">Siguenos en Instagram</span>
                <div className="social-container">
                <a href="https://www.instagram.com/elsupremocomics/" alt="icono de instagram">
                <InstagramIcon sx={{ color: pink[500] }} />
                </a>
                </div>
                <div className="footer-content-container">
                </div>
            </div>
        </div>
        <div className="copyright-container">
            <span className="copyright">Copyright 2022, Gaston Rodriguez todos los derechos reservados</span>
            <div>
            <a href="https://github.com/zz3nit/el-supremo" alt="icono de github zz3nit">
            <GitHubIcon/>
            </a>
            </div>
        </div>
        <div/>
        </div>
    </footer>
    </>
        )
}