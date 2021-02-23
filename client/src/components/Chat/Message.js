import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {cyan} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import './Chat.css'



const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[600],
        },
        secondary: {
            main: cyan[600],
        }
    }

})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color:"cyan"
    },
  },
  show: {
      backgroundColor:"gray",
        minWidth:"20%",
        minHeight:"20%",
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
    backgroundColor: "#0a7f8a",
    color: "white",
    "&:hover": {
      backgroundColor: "#00c4cc",
    },
    // padding:"1%"
  },
}));

export default()=> {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className="show">
        <p></p>
    </div>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="Write a message" />

      {/* <TextField id="filled-basic" label="chat" variant="filled" className={classes.input} /> */}
      <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
    </form>
    </ThemeProvider>
  );
}
