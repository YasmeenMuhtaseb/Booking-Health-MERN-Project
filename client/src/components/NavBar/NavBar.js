import React from 'react'
import logo from '../../Images/logo.png'
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css'
import PopUpLogin from '../PopUpLogin/PopUpLogin';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#0a7f8a',
        color: "white",
        
    },
    new:{
        color:"#30b4bb"
    }
});

export default () => {
    const classes=useStyles();

    return (
        <div class="Nav">
            <img class="logo" src={logo} alt="Logo" />
            <ul>
                <li><Button className={classes.root}  >Home</Button></li>
                <li><Button className={classes.new}  >Specializations</Button></li>
                <li><Button className={classes.new}  >Doctors</Button></li>
                <li><Button className={classes.new}  >About us</Button></li>
                <li><PopUpLogin/></li>
            </ul>
            {/* <Typography>Hi</Typography> */}
        </div>
    )
}
