import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root:{
    flex: 1,
    fontSize: '15px',
    outline: 'none',
    border: '1px',
    height:'100%',
    width:'100%',
    background:'white',
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#333333'
}
}));

const CustomTextField = () => {
    const classes = useStyles();
    return (
      <input className={classes.root}></input>
    )
}

export default CustomTextField
