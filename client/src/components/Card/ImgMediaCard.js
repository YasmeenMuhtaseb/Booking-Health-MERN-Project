import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css'
import { navigate } from '@reach/router';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 445,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const navigatorHandler = (e) => {
    navigate("/doctors/"+props.link)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className="paragraph" variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={navigatorHandler} size="small" color="primary">
          See Doctors
        </Button>
      </CardActions>
    </Card>
  );
}