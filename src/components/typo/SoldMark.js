import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root:{
    position:'absolute',
    left:'16px',
    top:'16px',
    background:'rgb(215, 73, 54,0.8)',
    color:'white',
    paddingTop:'14px',
    paddingBottom:'14px',
    width:'38px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    borderRadius:'50%',
    margin:'auto',
    letterSpacing: '0.05em',
    fontFamily: 'Roboto',
  }
}));

const SoldMark = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        SOLD
      </div>
    )
}

export default SoldMark
