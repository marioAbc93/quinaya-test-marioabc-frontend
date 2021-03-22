import React from  'react';
import Logo from '../assets/images/q.png';
import Cart from '../assets/images/carrito-de-compras.svg';
const Header = () => (
    <header className="header">
    <a id="logo" href="/">
    <img className="carousel-item__details--img" src={Logo} alt="Play Icon" /> 
    </a>    
    <nav>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Iniciar Sesión</a></li>
            <li><a href="/">Registrarse</a></li>
            <li><a href="/">Mis artículos <img className="cart" src={Cart} alt="Car"/> </a></li>             
        </ul>       
    </nav>   
</header>
);
export default Header;