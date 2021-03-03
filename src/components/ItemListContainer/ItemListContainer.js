import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {Grid} from '@material-ui/core'

const ItemListContainer = ({ items }) =>{

    return(
        <React.Fragment>
            <Grid container>
                {items?.length >= 1 && <ItemList items={items}/>}
            </Grid>

        </React.Fragment>
    )
}

export default ItemListContainer;