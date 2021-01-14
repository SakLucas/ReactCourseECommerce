import React from 'react'
import './NavBar.css';
import {CartWidget} from './CartWidget/CartWidget'

export const NavBar =() => {

return(

    <nav className="menu">
        <div className='links'>
            <p>Inicio</p>
            <p>Catalogo</p>
            <p>Carrito</p>
        </div>
        <CartWidget/>
    </nav>
)

}