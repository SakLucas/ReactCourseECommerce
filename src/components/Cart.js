import React, { useContext } from 'react'
import {Grid} from '@material-ui/core'
import { CartContext } from './../cartContext'

function Store() {
    const context = useContext(CartContext);

    return (
        // <CartContext.Consumer>
            <div>
                <h1>CART</h1>
                <span>{context.stock}</span>
            </div>
        // </CartContext.Consumer>
        
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