import React, { Component } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
  root:{
    flex: 1,
    fontSize: '15px',
    outline: 'none',
    border: '0px',
    height:'50px',
    width:'100%',
    background:'white',
    padding: '0 16px',
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#333333',
    maxWidth:'100%'
}
}));

const ListTextField = () => {
    const classes = useStyles();
    return (
      <input className={classes.root}></input>
    )
}

export default ListTextField
