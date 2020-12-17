import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign:"center",
    backgroundColor:"white"
  },

});


const Count = (props)=>{
  const classes = useStyles();

return(
  <div className={classes.root}>
<Typography variant="h1" component="h2" gutterBottom>
        {props.count}
      </Typography>
  </div>
)
}

export default Count;