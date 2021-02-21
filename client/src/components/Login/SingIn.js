import React from 'react';
import logo from '../../Images/logo1.png'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
    padding:'8%',
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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
         <ThemeProvider theme={theme}>
      <div className={classes.paper}>
      <img src ={logo} width="50%" height ="50%" className={classes.imgStyle}></img>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            className={classes.submit}
          >
            Sign In
          </Button>
            <Grid item>
              <Link href="#" variant="body2" className={classes.linkStyle} >
                {"Don't have an account? Sign Up"}
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