import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Images/logo1.png";

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
  linkStyle: {
    color: "#0a7f8a",
  },
  imgStyle: {
    marginLeft: "25%",
    marginBottom:"5%",
  },
  new:{
    color:"#30b4bb"
},
cont:{
    maxWidth:"40%",
    marginLeft:"30%"
}
}));

export default () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className={classes.new} onClick={handleClickOpen}>
        Sign up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.cont}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Registration</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Please fill in your information
          </DialogContentText>
          <form className={classes.form} noValidate>
            <img
              src={logo}
              width="50%"
              height="50%"
              className={classes.imgStyle}
            ></img>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
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
                />
              </Grid>
            </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                
              Sign Up
            </Button>
            <Grid item>
              <Link href="#" variant="body2" className={classes.linkStyle}>
                Already have an account? Sign in
              </Link>
            </Grid>
          
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
