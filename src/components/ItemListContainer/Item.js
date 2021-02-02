import React from 'react';
import { Button, Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({item}) => {

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
                <span>{item.title}</span>
                <img style={{maxWidth:'150px',maxHeight:'150px'}}alt="FALLBACK" src={item.image}/>
                <br/>
                <br/>
                <Link to={`/store/${item.id}`}>
                    <Button variant="contained" color="primary">Ver Producto</Button>
                </Link>
                {/* <ItemCount stock={5} inicial={1}></ItemCount> */}
            </Box>
        </Grid>

    );
}

export default Item;
