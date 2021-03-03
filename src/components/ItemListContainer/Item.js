import React from 'react';
import { Button, Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({item, inCart}) => {

    return (
        <Grid
            item
            xs={6}
            sm={3}
            xl={2}
        >
            <Box
                m={2}
                p={3}
                borderRadius={16}
                color="primary.main"
                boxShadow={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justify="center"
            >
                <span>{item.name}</span>
                <img style={{maxWidth:'150px',maxHeight:'150px'}}alt="FALLBACK" src={item.imgUrl}/>
                <br/>
                <br/>
                {!inCart ? 
                <Link to={`/store/${item.id}`}>
                    <Button variant="contained" color="primary">Ver Producto</Button>
                </Link>
                : (<>
                        <span>${item.price}</span>
                        <span>Cantidad:{item.amount}</span>
                        <span>Subtotal:${item.amount * item.price}</span>
                </> )}
            </Box>
        </Grid>

    );
}

export default Item;
