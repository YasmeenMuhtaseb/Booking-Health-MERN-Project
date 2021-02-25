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
import axios from "axios";
import { navigate } from "@reach/router";
import Cookies from "universal-cookie";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: cyan[600],
    },
  },
});

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
    marginBottom: "5%",
  },
  new: {
    color: "#30b4bb",
  },
  cont: {
    maxWidth: "40%",
    marginLeft: "35%",
  },
}));

export default (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const [reRendered, setReRender] = useState(false);
  
  // useEffect(()=>{},[reRendered])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data)
        cookies.set("user", res.data.user);
        setOpen(false);
        props.loginReRender();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button className={classes.new} onClick={handleClickOpen}>
        Login
      </Button>
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleClose}
          className={classes.cont}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <form onSubmit={submitHandler} className={classes.form} noValidate>
              <img
                src={logo}
                width="45%"
                height="45%"
                className={classes.imgStyle}
              ></img>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={emailHandler}
                    type="email"
                  />
                </Grid>
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
                  />
                </Grid>
              </Grid>
              {/* <DialogActions> */}
              {password.length < 8 ? (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.noSubmit}
                >
                  sign in
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
              )}
              {/* </DialogActions> */}
            </form>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};
