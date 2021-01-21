import React from 'react';
import ItemCount from './ItemCount'

const Item = ({item}) => {
    let styles={
        border: 'solid 2px',
        boxShadow:'1px 1px 1px 2px rgba(255,255,255,0.7)',
        background: 'cyan',
        width: 250,
        height: 300,
        margin: 30,
        padding: 15,
        display: "inline-block"
    }

    return (
        <div style={styles}>
            <img style={{maxWidth:'100%',maxHeight:'50%'}}alt="FALLBACK" src={item.imgUrl}/>
            <br/>
            <span style={{backgroundColor:"pink", border:'solid 1px'}}>{item.title}</span>
            <br/>
            <span>Precio: {item.price}</span>
            <ItemCount stock={5} inicial={1}></ItemCount>
        </div>
    );
}

export default Item;
