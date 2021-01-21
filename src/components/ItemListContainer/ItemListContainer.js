import React from 'react'
import ItemList from './ItemList'

export const ItemListContainer = () =>{
    const itemTask = new Promise((resolve,reject)=>{
        let res= [
            {
                id:127,
                title:"Lentes",
                price:250,
                imgUrl:"img1"
            },
            {
                id:128,
                title:"Paraguas",
                price:300,
                imgUrl:"img2"
            },
            {
                id:129,
                title:"Zapatos",
                price:400,
                imgUrl:"img3"
            },
        ]
        setTimeout(resolve(res),3000);
    });
    itemTask.then(
        res =>{
            console.log(res);
            console.log("Success!");
        }
    );

    let res= [
        {
            id:127,
            title:"Lentes",
            price:250,
            imgUrl:"img1"
        },
        {
            id:128,
            title:"Paraguas",
            price:300,
            imgUrl:"img2"
        },
        {
            id:129,
            title:"Zapatos",
            price:400,
            imgUrl:"img3"
        },
    ]


    return(
        <React.Fragment>
            <ItemList items={res}></ItemList>
        </React.Fragment>
    )
}