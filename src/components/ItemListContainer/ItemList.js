import React from 'react';
import Item from './Item'
import {Grid} from '@material-ui/core'

const ItemList = ({items}) => {


    return (
        <Grid container>
            {
                items.map((item)=>
                    <Item key={item.id} item={item}/>
                )
            }
        </Grid>
    );
}

export default ItemList;
