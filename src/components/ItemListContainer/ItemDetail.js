import React, { useEffect } from 'react';

const ItemDetail = ({details}) => {
    console.log(details);
    useEffect(()=>{

    },[details])
    return (

        <div>
            <img alt="FALLBACK" src={details.image}/>
            <h1>{details?.title}</h1>
            <strong>${details?.price}</strong><br/>
            <span>{details?.description}</span>
        </div>
    );
}

export default ItemDetail;
