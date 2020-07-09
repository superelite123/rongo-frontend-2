import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root:{
    background:'#DEDCD4',
    color:'white',
    width:'82px',
    height:'82px',
  }
}));

const TakePhoto = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <PhotoCameraIcon />
      </div>
    )
}

export default TakePhoto
