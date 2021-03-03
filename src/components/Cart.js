import React, { useContext, useEffect, useState } from 'react'
import {Grid, Button} from '@material-ui/core'
import { CartContext } from './../cartContext'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Item from '../components/ItemListContainer/Item'
import CheckoutForm from '../components/CheckoutForm'

function Cart() {
    const { cart } = useContext(CartContext);

    const [inCheckout, setInCheckout] = useState(false);


    const subtotal = cart.reduce((a, b) => a + b.price * b.amount, 0);

    return (
            <div>
                <h1>Cart</h1>
                <Grid container>
                {
                    cart.map((item)=>
                        <Item key={item.id} item={item} inCart={true}/>
                    )
                }
                </Grid>
                <h2>TOTAL:${subtotal}</h2>
                <Button variant="contained" color="primary" onClick={() => setInCheckout(prevValue => !prevValue)} disabled={inCheckout || cart.length === 0}>Checkout</Button>
                {inCheckout && (
                    <>
                        <CheckoutForm cart={cart} subtotal={subtotal} />
                    </>
                )}
            </div>
    )
}

export default Cart;
