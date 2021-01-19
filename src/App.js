import React, {useState} from 'react'
import './App.css';
import {NavBar} from './components/navbar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import Checkbox from '@material-ui/core/Checkbox'
import ItemCount from './components/ItemCount'

function CheckBoxExample(){
  const [checked, setChecked ]= useState(false);
  function handleCheckbox(){
    setChecked(prevState=> !prevState)
  }
  return(
    <div>
      <Checkbox
        onClick={handleCheckbox}
        checked={checked}
      />
    </div>
  )
}

function App() {

  return (
    <React.StrictMode>
      <ItemCount stock={5} inicial={1}></ItemCount>
      <NavBar/>
      <ItemListContainer/>
    </React.StrictMode>
  );
}

export default App;
