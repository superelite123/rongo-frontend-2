import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root:{
    flex: 1,
    fontSize: '1.25rem',
    outline: 'none',
    border: '1px',
    height:'50px',
    width:'100%',
    background:'white',
    boxShadow: '0.5px 0.5px 0.5px #BBBBBB, 0.5px -0.5px 0.5px #E2E2E2'
}
}));

const CustomTextField = () => {
    const classes = useStyles();
    return (
      <input className={classes.root}></input>
    )
}

export default CustomTextField
