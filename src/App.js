import React, {useState} from 'react'
import './App.css';
import {NavBar} from './components/navbar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import Checkbox from '@material-ui/core/Checkbox'

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
      <NavBar/>
      <ItemListContainer/>
    </React.StrictMode>
  );
}

export default App;
