import React from 'react';
import ItemCount from './ItemCount'

const Item = ({item}) => {
    let styles={
        width: 250,
        height: 300,
        backgroundColor: "cyan",
        margin: 30,
        padding: 15,
        display: "inline-block"
    }

    return (
        <div style={styles}>
            {console.log(item)}
            <img alt="FALLBACK" src={item.imgUrl}/>
            <br/>
            <span style={{backgroundColor:"pink"}}>{item.title}</span>
            <br/>
            <span>{item.price}</span>
            <ItemCount stock={5} inicial={1}></ItemCount>
        </div>
    );
}

export default Item;
