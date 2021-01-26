import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div>
            <img alt="FALLBACK" src={item.imgUrl}/>
            <h1>{item.title}</h1>
            <bold>${item.price}</bold><br/>
            <span>{item.desc}</span>
        </div>
    );
}

export default ItemDetail;
