import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/base.css';
const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicia sesión</h2>
                <form className="login__container--form" >
                <input 
                    className="input" 
                    name="email"
                    type="text" 
                    placeholder="Correo" 
                />
                <input 
                    className="input" 
                    type="password"
                    name="password" 
                    placeholder="Contraseña" 
                />
                <button className="button" type="submit">Iniciar sesión</button>
                </form>
                <p className="login__container--register">No tienes ninguna cuenta 
                    <Link to="/register">Registrarse</Link>
                </p>
        </section>
    </section>

)
export default Login;