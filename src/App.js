import React, {useState, useEffect} from 'react'
import './App.css';
import {NavBar} from './components/navbar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer';
// import Checkbox from '@material-ui/core/Checkbox'

// function CheckBoxExample(){

//   const [checked, setChecked ]= useState(false);
//   function handleCheckbox(){
//     setChecked(prevState=> !prevState)
//   }
//   return(
//     <div>
//       <Checkbox
//         onClick={handleCheckbox}
//         checked={checked}
//       />
//     </div>
//   )
// }


function App() {
  const [items, setItems] = useState(()=>[])
  console.log("items:" + items)

useEffect(() => {
  fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
  .then((item)=>{
    return item.json()
    }).then((item)=>{
      setItems(item.results);
      })
}, [])
  return (
    <React.StrictMode>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </React.StrictMode>
  );
}

export default App;
