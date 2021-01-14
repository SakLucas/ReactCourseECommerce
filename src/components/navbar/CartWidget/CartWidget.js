import React from 'react'
import './CartWidget.css'
import logo from '../../../img/cart-icon.png'

export const CartWidget =() => {
    return(
        <div>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}