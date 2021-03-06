import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Images/logo1.png";
import axios from 'axios'
import {navigate} from '@reach/router'
import Cookies from 'universal-cookie'
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {cyan} from "@material-ui/core/colors";






const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
    backgroundColor: "#0a7f8a",
    color: "white",
    "&:hover": {
      backgroundColor: "#00c4cc",
    },
  },
  noSubmit: {
    margin: theme.spacing(2, 0, 1),
    backgroundColor: "gray",
    color: "white",
    "&:hover": {
      backgroundColor: "#00c4cc",
    },
  },
  linkStyle: {
    color: "#0a7f8a",
  },
  imgStyle: {
    marginLeft: "30%",
    marginBottom:"5%",
  },
  new:{
    color:"#30b4bb"
},
cont:{
    maxWidth:"40%",
    marginLeft:"35%"
}
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[600],
        },
        secondary: {
            main: cyan[600],
        }
    }

});

export default (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const cookies = new Cookies();
  const [reRendered, setReRender] = useState(false)
  const [errors,setErrors]=useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors("")
  };

  const fnameHandler = (e) => {
    setFirstName(e.target.value)
  }

  const lnameHandler = e => {
      setLastName(e.target.value)
  }

  const emailHandler =  e => {
      setEmail(e.target.value)
  }

  const phoneHandler = e => {
      setPhoneNumber(e.target.value)
  }

  const passwordHandler = e => {
      setPassword(e.target.value)
  }

  const submitHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/api/register", {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
      }, {withCredentials: true})
      .then(res => {
        cookies.set("user", res.data.user)
        props.loginReRender()
        setErrors("")
        
      })
      .catch(err => setErrors(err.response.data.errors))
      setOpen(false);
  }
  useEffect(()=>{

  },[reRendered])


  return (
    <div>
      <Button className={classes.new} onClick={handleClickOpen}>
        Sign up
      </Button>
      <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.cont}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent >
          <form onSubmit={submitHandler} className={classes.form} noValidate>
            <img
              src={logo}
              width="45%"
              height="45%"
              className={classes.imgStyle}
            ></img>
            <Grid container spacing={2}>
            {(firstName.length)<2 ? <p style={{color:"gray"}}>First Name should be more than 2 char</p>:<p></p>}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={fnameHandler}
                  autoFocus
                  error={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={lnameHandler}
                  error={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailHandler}
                  error={errors.email}
                />
              </Grid>
              {(phoneNumber.length)<10 ? <p style={{color:"gray"}}>PhoneNumber should be at least 10 numbers</p>:<p></p>}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={phoneHandler}
                  error={errors.phoneNumber}
                />
              </Grid>
              {(password.length)<8 ? <p style={{color:"gray"}}>Password should be at least 8 char   </p>:<p></p>}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={passwordHandler}
                  error={errors.password}
                />
              </Grid>
            </Grid>
          {/* <DialogActions> */}
              { (password.length)<8 ?
          <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.noSubmit}
            >
                sign up
                </Button>
            :<Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>}
            <Grid item>
            </Grid>
        </form>
        </DialogContent>
      </Dialog>
      </ThemeProvider>
      
    </div>
  );
};
