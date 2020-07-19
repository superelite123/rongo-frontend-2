import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {isMobile} from "react-device-detect";
import Header from './header/Header'
import HomeFooter from './footer/HomeFooter'
import BlankFooter from './footer/BlankFooter'
const useStyles = makeStyles((theme) => {
    return {
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
    }
})
const LivePanelTemplate = ({ children,mode }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={12}>
                <Header mode={mode} />
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.PanelWrapper}>
                    {children}
                </Box>
            </Grid>
            <Grid item xs={12} style={{background: '#333333'}}>
                <HomeFooter mode={mode}/>
            </Grid>
        </Grid>
    )
}

export default LivePanelTemplate