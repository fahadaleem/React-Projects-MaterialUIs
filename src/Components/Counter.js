import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import Text from "./Text"
import Count from "./Count"
import Buttons from "./Buttons"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: "20px 0",
    height: "400px",
    width: "400px",
    backgroundColor: "#F4D35E",
    margin: "40px auto",
    textAlign: "center"
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [count, setCount] = useState(0)

  const addOne = ()=>{
    setCount(count+1);
  }
  const deleteOne = ()=>{
    setCount(count-1);
  }
  const reset = ()=>{
    setCount(0);
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
      <Text />
      <Count count={count}/>
      <Buttons addOne={addOne} deleteOne={deleteOne} reset = {reset}/>
      </Paper>
    </div>
  );
}
