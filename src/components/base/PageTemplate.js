// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header/Header'
import HomeFooter from './footer/HomeFooter'
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {isMobile} from "react-device-detect";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
      },
    PanelWrapper: {
        background:'#DEDCD4',
        overflowY: 'scroll',
        height:'calc(100vh - 106px)',
        position:!isMobile?'relative':''
    },
    control: {
        padding: theme.spacing(2),
    },
    panelGridWrapper:{
        position:'absolute',
        bottom:0,
        height: '100%'
    }
}))
const PageTemplate = ({ first, second, third, handleAction }) => {
    const classes = useStyles();
    const columns = isMobile?12:4
    const spacing=0
    return (
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.PanelWrapper}>
                    <Grid className={isMobile?'':classes.panelGridWrapper} container align="center">
                        <Grid key={0} xs={12} sm={12} md={4} item style={{display: 'flex'}}>{first}</Grid>
                        <Grid key={1} xs={12} sm={12} md={4} item style={{display: 'flex'}}>{second}</Grid>
                        <Grid key={2} xs={12} sm={12} md={4} item style={{display: 'flex'}}>{third}</Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{background: '#333333'}}>
                    <HomeFooter handleAction={ handleAction } />
                </Grid>
            </Grid>
    );
};
export default PageTemplate;
