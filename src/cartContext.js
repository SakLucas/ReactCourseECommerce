import React, { useState } from 'react'

export const CartContext = React.createContext(0);

export const Context = ({children}) => {

    const [cart, setCart] = useState([]);
    const count = 0;  

    function addItem(item, amount){
        console.log(cart);
        if(cart.some(el => el.id === item.id)){
           const index = cart.findIndex(el => el.id === item.id);
           const cartCopy = cart;
           cartCopy[index].amount += amount;
           setCart(cartCopy);
        }else{
            setCart([...cart,{...item,amount}])
        }
    }

    function removeItem(itemToBeRemoved) {
        const updatedCart = cart.filter(item => item.id !== itemToBeRemoved.id);
        setCart([...updatedCart]);
        // setCount(count - 1);
    }

    function getFromContext(id){
        return cart.find(obj => obj.id === id)
    }

        return(
            <CartContext.Provider value={{cart, addItem, removeItem}}>
                {children}
            </CartContext.Provider>
        )
}
