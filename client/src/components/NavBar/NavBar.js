import React, { useState,useEffect } from 'react'
import logo from '../../Images/logo.png'
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css'
import PopUpLogin from '../PopUpLogin/PopUpLogin';
import Cookies from 'universal-cookie'
import axios from 'axios';
import {navigate} from '@reach/router'
import AvatarIm from '../Avatar/AvatarIm';
import PopUpSignIn from '../PopUpSignIn/PopUpSignIn';

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
        marginLeft: "2%",
        marginBottom: "2%",
    },
});

export default (props) => {
    const classes=useStyles();
    const cookies = new Cookies();
    const [loginReRender, setLoginReRender] = useState(false);

    useEffect(() => {
       
    }, [loginReRender])

const logout =(e) =>{
    e.preventDefault();
    cookies.set("user","")
    axios.get("http://localhost:8000/api/logout",{withCredentials:true})
    .then(res => {
        setLoginReRender(!loginReRender)
        navigate("/")
    })
    .catch(err => console.log(err))
}

    const reRenderHandler = () => {
        setLoginReRender(!loginReRender);
    }

    return (
        <div className="Nav">
            <img className="logo" src={logo} alt="Logo" />
            <ul className="ulNavBar">
                <li><Button className={classes.new} onClick={() => navigate("/")} >Home</Button></li>
                <li><Button className={classes.new} onClick={() => navigate("/specializations")} >Specializations</Button></li>
                <li><Button className={classes.new} onClick={() => navigate("/doctors")} >Doctors</Button></li>
                <li><Button className={classes.new}  >About us</Button></li>
                { !cookies.get('user')?<div className="log"> <PopUpLogin loginReRender={reRenderHandler} /><PopUpSignIn   loginReRender={reRenderHandler} /></div>:<><AvatarIm reRender={props.render}/> <Button className={classes.log} onClick={logout} >Logout</Button></>}
            </ul>
        </div>
    )
}
