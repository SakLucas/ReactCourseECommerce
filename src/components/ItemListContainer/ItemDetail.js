import React, { useEffect, useState, useContext } from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { CartContext } from './../../cartContext'

const ItemDetail = ({details}) => {
    const [stock, setStock] = useState(() => 0);
    const [selectedAmount, setSelectedAmount] = useState(()=> 0);
    const [cart, setCart] = useContext(CartContext);

    const handleItemCount = (amount) =>{
        setSelectedAmount(amount);
    }
    useEffect(() => {
        setStock(Math.round(Math.random() * 10) + 1);
    }, [])

    return (
        <div>
            <img style={{maxHeight:400}}alt="FALLBACK" src={details.image}/>
            <h1>{details?.title}</h1>
            <strong>${details?.price}</strong><br/>
            <span>{details?.description}</span><br/>
            <span>Stock: {stock}</span><br/>
            <span>SelectedAmount:{selectedAmount}</span><br/>
            <span>CART CONTEXT: {cart}</span>
            <ItemCount stock={stock} handlerClick={handleItemCount}/>
                {/* // <Link to={'/cart'}>
                //     <Button color="primary" variant="contained">Terminar mi compra</Button>
                // </Link> */}
                <Button 
                variant="contained"
                color={selectedAmount > 0? "primary" : "default"} 
                disabled={selectedAmount > 0? false : true}
                onClick={()=>setCart(selectedAmount)}> 
                
                    Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemDetail;
