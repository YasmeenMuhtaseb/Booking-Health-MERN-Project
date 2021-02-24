import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Cookies from 'universal-cookie';
// import logo from '../../Images/logo.png'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default ()=> {
  const classes = useStyles();
  const cookies = new Cookies();
  const userId = cookies.get('user')._id

  return (
    <div className={classes.root}>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} /> */}
      <a href={`/myProfile/${userId}`}><Avatar src="/static/images/avatar/1.jpg" /></a>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /> */}
    </div>
  );
}