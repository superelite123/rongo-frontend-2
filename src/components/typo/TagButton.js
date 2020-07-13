import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root:{
    background:'#FFFFFF',
    color:'#BBA884',
    paddingTop:'7px',
    paddingBottom:'7px',
    border: '2px solid #BBA884',
    borderRadius: '17px',
    fontSize: '12px',
    width:'auto',
    paddingLeft:'23px',
    paddingRight:'23px',
    marginRight:'5px',
    marginTop:'10px',
    cursor:'pointer',
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: 'normal',
    hover:{
        backgroundColor:'#BBA884',
        color:'white'
    }
  }
}));

const TagButton = ({label,handleClick}) => {
    const classes = useStyles();
    return (
      <div className={classes.root} onClick={() => {
        handleClick()
      }}>
            {label}
      </div>
    )
}

export default TagButton 
