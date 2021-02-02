import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

export default function ItemCount({stock, inicial = 0, handlerClick}){
    const [count, setCount] = useState(() => inicial);

    function decrementCount(){
        if(count >0){
            setCount(prevCount =>prevCount - 1);
            handlerClick(count - 1)
        }

    }
    function incrementCount(){
        if(count < stock) {
            setCount(prevCount =>prevCount + 1);
            handlerClick(count + 1)
        };

    }

    return(
        <div>
            <Button color="primary" variant="contained" onClick={decrementCount}>-</Button>
            <span style={{fontSize:20,paddingLeft:15,paddingRight:15}}>{count}</span>
            <Button color="primary" variant="contained" onClick={incrementCount}>+</Button>
        </div>
    );
}