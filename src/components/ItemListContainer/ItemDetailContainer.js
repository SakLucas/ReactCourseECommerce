import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = ({ match }) =>{

    const [itemDetails, setItemDetails] = useState({})

    const fetchItemDetail = () =>{
        return new Promise( resolve => {
            resolve(fetch(`https://fakestoreapi.com/products/${match.params.id}`))
        })
    }

    useEffect(()=>{
        fetchItemDetail()
            .then(res => { return res.json() })
            .then(json => {setItemDetails(json)})
        console.log(itemDetails);
        },[])

    return(
        <React.Fragment>
            <ItemDetail details={itemDetails}/>
        </React.Fragment>
    )
}

