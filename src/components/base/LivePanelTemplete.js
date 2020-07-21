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
            height:'calc(100vh - 106px)',
            background:'#DEDCD4',
        },
        Panel: {
            height:'calc(100% - 50px)',
            overflowY: 'scroll',
            position:!isMobile?'relative':'',
            width:'90%',
            margin:'auto'
        }
    }
})
const LivePanelTemplate = ({ children,mode, handleAction }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={12}>
                <Header mode={mode} />
            </Grid>
            <Grid item xs={12} className={classes.PanelWrapper}>
                <Box className={classes.Panel}>
                    {children}
                </Box>
            </Grid>
            <Grid item xs={12} style={{background: '#333333'}}>
                <HomeFooter mode={mode} handleAction={handleAction}/>
            </Grid>
        </Grid>
    )
}

export default LivePanelTemplate