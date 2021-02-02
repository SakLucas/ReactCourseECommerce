import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({details}) => {
    const [stock, setStock] = useState(() => 0);
    const [selectedAmount, setSelectedAmount] = useState(()=> 0);

    const handleItemCount = (amount) =>{
        setSelectedAmount(amount);
        console.log(amount);
    }
    useEffect(() => {
        setStock(Math.round(Math.random() * 10));
    }, [])

    return (
        <div>
            <img style={{maxHeight:400}}alt="FALLBACK" src={details.image}/>
            <h1>{details?.title}</h1>
            <strong>${details?.price}</strong><br/>
            <span>{details?.description}</span><br/>
            <span>Stock: {stock}</span><br/>
            <span>SelectedAmount:{selectedAmount}</span>
            <ItemCount stock={stock} handlerClick={handleItemCount}/>
        </div>
    );
}

export default ItemDetail;
