import React from 'react';
import logo from './img/bobkat.png';
import './NavBar.css';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import {ShoppingCartOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    section:{
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow: 1
    }
}))

export const NavBar =() => {
    const classes = useStyles()
return(

    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            {/* <img style={{width:120,height:'auto',marginBottom:15, marginTop:10}} alt="asd" src={logo}/> */}
            <Typography variant="h6" className={classes.title}>
                eCommerce
            </Typography>
            <Link to="/home">
                <Typography variant="h6" className={classes.section}>
                    Home
                </Typography>
            </Link>
            <Link to="/store">
                <Typography variant="h6" className={classes.section}>
                    Store
                </Typography>
            </Link>
            <Link to="/about">
                <Typography variant="h6" className={classes.section}>
                    About Us
                </Typography>
            </Link>
            <Link to="/cart">
                <ShoppingCartOutlined/>
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </div>

)}