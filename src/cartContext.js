import React, { useState } from 'react'

export const CartContext = React.createContext(0);

export const Context = ({children}) => {

    const [cart, setCart] = useState([0]);
    const stock = 14;
    
    function addItem(item, amount){
        console.log(item.id, amount);
        setCart(prev => parseInt(prev) + amount)
    }

    function getFromContext(id){
        return cart.find(obj => obj.id === id)
    }

        return(
            <CartContext.Provider value={{cart, addItem, stock}}>
                {children}
            </CartContext.Provider>
        )
}
