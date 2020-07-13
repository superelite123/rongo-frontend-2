import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import './CustomTextArea.css'

const useStyles = makeStyles((theme) => ({
  base: {
    margin: '16px'
  }
}));

const CustomTextArea = () => {
    const classes = useStyles();
    return (
      <textarea rows="17" className="ProductFormDescInput"></textarea>
    )
}

export default CustomTextArea
