import React from "react";
import '../styles/main.scss';
import logo from '../assets/img/logo.png' 
const Header = () =>{
    return(
        <header className="header">
            <img src={logo} alt="Logo" className= "header__logo"/>
            <nav className="header__nav"> 
                <a href="/">Inicio</a>
                <a href="/about" className="header__nav-item">Nosotros</a>
            </nav>
        </header>
    );
};

export default Header;