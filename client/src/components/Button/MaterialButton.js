import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default function MaterialButton({firstColor, secondColor, shape, height, width, text}) {
  
  const StyledButton = withStyles({
    root: {
      background: `linear-gradient(45deg, ${firstColor} 30%, ${secondColor} 90%)`,
      borderRadius: shape === "round" ? 50 : 3,
      border: 0,
      color: 'white',
      height: height,
      width: width,
      boxShadow: '0 3px 5px 2px rgba(45, 152, 157, .3)',
    },
  })(Button);

  return <StyledButton>{text}</StyledButton>;
}