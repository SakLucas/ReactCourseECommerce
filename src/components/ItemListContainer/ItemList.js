import React from 'react';
import Item from './Item'
import {Grid} from '@material-ui/core'

const ItemList = ({items}) => {
    const promoItem={
        id:129,
        title:"Zapatos",
        price:400,
        image:"https://media.gq.com.mx/photos/5be9e8ed8021588d9466f8c1/master/w_640,c_limit/los_mejores_zapatos_para_un_gentleman_550467665.jpg"
    }

    return (
        <Grid container>
            {
                items.map((item)=>
                    <Item key={item.id} item={item}/>
                )
            }
            <Item item={promoItem}></Item>
        </Grid>
    );
}

export default ItemList;
