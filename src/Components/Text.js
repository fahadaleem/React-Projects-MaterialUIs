import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
 text:{
   color:"#083D77",
   padding:"20px 40px",
 } 
 
}));

const Text =()=>{
  const classes = useStyles()
  return(
    <Typography variant="h4" component="h2" gutterBottom className={classes.text}>
    Counter App Using Material UI
  </Typography>
  )
}


export default Text