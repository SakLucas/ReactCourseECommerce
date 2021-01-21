import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'

export const ItemListContainer = () =>{
    const [items, setItems] = useState(()=>[])

    useEffect(()=>{
        const itemTask = new Promise((resolve,reject)=>{
            let res= [
                {
                    id:127,
                    title:"Lentes",
                    price:250,
                    imgUrl:"https://images-na.ssl-images-amazon.com/images/I/518mBg%2BxQtL._UL1050_.jpg"
                },
                {
                    id:128,
                    title:"Paraguas",
                    price:300,
                    imgUrl:"https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2017/08/16/source-img/20170816115840_99427.jpg_500x500.jpg"
                },
                {
                    id:129,
                    title:"Zapatos",
                    price:400,
                    imgUrl:"https://media.gq.com.mx/photos/5be9e8ed8021588d9466f8c1/master/w_640,c_limit/los_mejores_zapatos_para_un_gentleman_550467665.jpg"
                },
            ]
            // let res = '500'

            if(res != '500'){
                setItems(res);
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
        },[])

    return(
        <React.Fragment>
            <ItemList items={items}></ItemList>
        </React.Fragment>
    )
}