import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useFirestore } from '../../firebase/useFirestore';

export const ItemDetailContainer = ({ match }) =>{

    const { fetching, getOne, item } = useFirestore();

    useEffect(() => {
        getOne(match.params.id);
    }, [fetching])

    return(
        <React.Fragment>
            <ItemDetail details={item} fetching={fetching} />
        </React.Fragment>
    )
}

