import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addOne:{
    backgroundColor:"tomato"
  },
  button:{
    fontSize:"22px"
  }
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.addOne, classes.button} onClick={props.addOne}>+1</Button>
      <Button variant="contained" color="primary" onClick={props.reset} className={classes.button}>
        Reset
      </Button>
      <Button variant="contained" color="secondary" onClick={props.deleteOne} className={classes.button}>
        -1
      </Button>
    </div>
  );
}
