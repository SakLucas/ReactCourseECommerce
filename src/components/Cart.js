import React, { useContext } from 'react'
import {Grid} from '@material-ui/core'
import { CartContext } from './../cartContext'

function Store() {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
            <h1>CART</h1>
            <span>{cart}</span>
        </div>
    )
}

export default Store;


        //     <Grid container>
        //     {
        //         items.map((item)=>
        //             <Item key={item.id} item={item}/>
        //         )
        //     }
        //     {/* <Item item={promoItem}></Item> */}
        // </Grid>