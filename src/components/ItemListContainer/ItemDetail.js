import React, { useEffect, useState, useContext } from 'react';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { CartContext } from './../../cartContext'
import { useFirestore } from '../../firebase/useFirestore';

const ItemDetail = ({details, fetching}) => {
    const [selectedAmount, setSelectedAmount] = useState(()=> 0);
    const {cart, addItem} = useContext(CartContext);

    const handleItemCount = (amount) =>{
        setSelectedAmount(amount);
    }
    

    return (
        
        <div>
        {fetching ? <span>Loading</span> : (
            <>
            <img style={{maxHeight:400}} alt="FALLBACK" src={details?.imgUrl}/>
            <h1>{details?.name}</h1>
            <strong>${details?.price}</strong><br/>
            <span>{details?.description}</span><br/>
            {/* <span>Stock: {details?.stock}</span><br/> */}
            <span>SelectedAmount:{selectedAmount}</span><br/>
            
            <ItemCount  handlerClick={handleItemCount}/>
                {/* // <Link to={'/cart'}>
                //     <Button color="primary" variant="contained">Terminar mi compra</Button>
                // </Link> */}
                <Button 
                    variant="contained"
                    color={selectedAmount > 0? "primary" : "default"} 
                    disabled={selectedAmount > 0? false : true}
                    onClick={()=>addItem(details, selectedAmount)}> 
                        Agregar al carrito
                </Button>
             </>
             )}
        </div>
    );
}

export default ItemDetail;
