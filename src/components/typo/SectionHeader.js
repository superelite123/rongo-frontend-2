import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import {Typography,Grid,Paper} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GridList from '@material-ui/core/GridList';
const styles = theme => ({
  root:{
    height:'54px'
  },
  title: {
    fontWeight: 'bold',
    textAlign:'center'
  },
  topBar:{
    margin:0,
    borderTopWidth: '0px',
    borderBottomWidth: '3px',
    borderLeftWidth: '0px',
    borderRightWidth: '0px',
    borderColor: '#BBA884'
  },
  arrow: {
    margin:'auto',
    color:'#BBA884'
  },
});

class SectionHeader extends Component {
  render() {
    const { classes, title} = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.root}> 
            <Grid container>
              <Grid item xs={2} className={classes.arrow}>
                <ArrowBackIcon />
              </Grid>
              <Grid item xs={8}>
                <p variant='h5' component="h5" className={classes.title}>
                  {title}
                </p>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={12} item>
          <hr className={classes.topBar} />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(withStyles(styles)(SectionHeader));
