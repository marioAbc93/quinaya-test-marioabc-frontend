import React from  'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/q.png';
import Cart from '../assets/images/carrito-de-compras.svg';
const Header = () => (
    <header className="header">
    <Link to="/"><img className="carousel-item__details--img" src={Logo} alt="Play Icon" /></Link>    
    <nav>
        <ul>
            
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            <li><a href="/">Mis artículos <img className="cart" src={Cart} alt="Car"/> </a></li>             
        </ul>       
    </nav>   
</header>
);
export default Header;