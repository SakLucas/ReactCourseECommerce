import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(()=>{})
    const getItems = () =>{
        const itemTask = new Promise((resolve,reject)=>{
            let res=
                {
                    id:129,
                    title:"Zapatos",
                    price:400,
                    desc:"Un lindo par de zapatos",
                    imgUrl:"https://media.gq.com.mx/photos/5be9e8ed8021588d9466f8c1/master/w_640,c_limit/los_mejores_zapatos_para_un_gentleman_550467665.jpg"
                }
    
            // let res = '500'
    
            if(res !== '500'){
                setItem(res);
                setTimeout(()=>{resolve(res)},3000)
            }else{
                reject('Codigo 500');
            }
        });
        itemTask
            .then(
                res =>{
                    console.group();
                    console.log("Success!");
                    console.table(res);
                }
            ).catch(error=>
                    console.error(`Error: ${error}`)
            );
    }
    useEffect(()=>{
        getItems();
        },[])

    return(
        <React.Fragment>
            <ItemDetail item={item}/>
        </React.Fragment>
    )
}

