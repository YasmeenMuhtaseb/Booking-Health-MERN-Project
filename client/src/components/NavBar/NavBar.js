import React, { useState } from 'react'
import logo from '../../Images/logo.png'
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css'
import PopUpLogin from '../PopUpLogin/PopUpLogin';
import Cookies from 'universal-cookie'
import axios from 'axios';
import {navigate} from '@reach/router'
import AvatarIm from '../Avatar/AvatarIm';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#0a7f8a',
        color: "white",
        
    },
    new:{
        color:"#30b4bb",
        
    },
    log:{
        color:"#30b4bb",
        marginLeft: "1%",
        marginBottom: "0%",
    },
});

export default () => {
    const classes=useStyles();
    const cookies = new Cookies();
    const [loginReRender, setLoginReRender] = useState(false)

    

const logout =(e) =>{
    e.preventDefault();
    axios.get("http://localhost:8000/api/logout",{withCredentials:true})
    .then(res => {
        setLoginReRender(false)
    })
    .catch(err => console.log(err))
}

    const reRenderHandler = re => {
        setLoginReRender(re);
    }

    return (
        <div className="Nav">
            <img className="logo" src={logo} alt="Logo" />
            {/* {cookies.get("user") ? <p className="name">{cookies.get('user').firstName} {cookies.get('user').lastName}</p> : "" } */}
            <ul>
                <li><Button className={classes.root}  >Home</Button></li>
                <li><Button className={classes.new}  >Specializations</Button></li>
                <li><Button className={classes.new}  >Doctors</Button></li>
                <li><Button className={classes.new}  >About us</Button></li>
                { !cookies.get('user')? <li><PopUpLogin loginReRender={reRenderHandler} /></li> :<><AvatarIm/> <Button className={classes.log} onClick={logout} >Logout</Button></>}
            </ul>
            {/* <Typography>Hi</Typography> */}
        </div>
    )
}
