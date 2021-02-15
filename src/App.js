import React, {useState, useEffect} from 'react'
import './App.css';
import {NavBar} from './components/navbar/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer';
import Theme from './themeConfig'
import About from './components/About'
import Store from './components/Store'
import Cart from './components/Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Context } from './cartContext'




function App() {
  const [items, setItems] = useState(()=>[])
  // console.log("items:" + items)

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
      <Router>
        <ThemeProvider theme={Theme}>
          <Context value={[]}>
            <NavBar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/store" exact component={Store}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/store/:id" component={ItemDetailContainer}></Route>
            </Switch>
          </Context>
        </ThemeProvider>
      </Router>
    </React.StrictMode>

  );
}

const Home = () =>{
  return(
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default App;
