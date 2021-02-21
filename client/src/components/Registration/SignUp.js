import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../Images/logo1.png';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {cyan} from "@material-ui/core/colors";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Booking Health
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%',
      },
      submit: {
        margin: theme.spacing(2, 0, 1),
        backgroundColor: '#0a7f8a',
        color: "white",
        "&:hover": {
          backgroundColor: '#00c4cc'
        },
        },
      linkStyle: {
        color: '#0a7f8a',
      },
      imgStyle:{
          padding:'10%',
            },
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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <ThemeProvider theme={theme}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <img src ={logo} width="50%" height ="50%" className={classes.imgStyle}></img>
          <Grid container spacing={2} >
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
            <Link href="#" variant="body2" className={classes.linkStyle} >
                Already have an account? Sign in
              </Link>
            </Grid>
        </form>
      </div>
      </ThemeProvider>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}