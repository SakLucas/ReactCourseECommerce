import React, { useState } from 'react'

export const CartContext = React.createContext(0);

export const Context = ({children}) => {

    const [cart, setCart] = useState([]);

    function getFromContext(id){
        return cart.find(obj => obj.id === id)
    }

        return(
            <CartContext.Provider value={[cart, setCart]}>
                {children}
            </CartContext.Provider>
        )
}
