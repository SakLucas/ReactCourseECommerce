import React, { useEffect } from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { useFirestore } from '../firebase/useFirestore';

function Store() {

    const { fetching, getAll, items } = useFirestore();

    // useEffect(() => {
    //     filtro ? getPorFiltro(filtro) : getAll()
    // }, [filtro, fetching])

    
    useEffect(()=>{
        getAll()
    },[fetching])
    
    return (
        <div>
            {fetching && <span>Loading...</span>}
            <ItemListContainer items={items}/>
        </div>
    )
}

export default Store
