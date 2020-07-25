import React, { useState, useRef  } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { IconButton } from "@material-ui/core"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const TakePhoto = ({handleChangePortfolio,index,image}) => {
  const background = image == null?'#DEDCD4':`url(${image})`
  const useStyles = makeStyles((theme) => ({
    root:{
      background:background,
      color:'white',
      width:'82px',
      height:'82px',
      display: 'flex',
      cursor:'pointer'
    },
    cameraIcon: {
      margin: 'auto',
      color:'white'
    },
    img: {
      width:'100%',
      height:'100%'
    }
  }));
    const classes = useStyles();
    const iamgeID = 'imgFile' + index
    return (
      <div className={classes.root}>
          <input type="file" name={iamgeID} id={iamgeID}
                hidden={true} onChange={(event) => handleChangePortfolio(event, index)} 
                accept="image/*" />
          <label htmlFor={iamgeID} className={classes.cameraIcon}>
              <IconButton className={classes.cameraIcon} aria-label="upload picture" component="span">
                <PhotoCameraIcon />
              </IconButton>
          </label>
      </div>
    )
}

export default TakePhoto
