import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {isMobile} from "react-device-detect";
import Header from './header/Header'
import HomeFooter from './footer/HomeFooter'
const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            height: '100%',
            background:'#DEDCD4',
        },
        Parent:{
            height:'calc(100vh - 106px)',
            position:'relative'
        },
        PanelWrapper: {
            background:'#F5F5F5',
            height:isMobile?'100%':'calc(100% - 30px)',
            overflowY: 'scroll',
            width:isMobile?'100%':'calc(100% - 30px)',
            margin:'auto',
            position:'absolute',
            bottom:'0px',
            left:'15px'
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
const BasePanel = ({ children,mode, handleAction,bgColor }) => {
    const classes = useStyles();
    const PanelWrapperColor = bgColor === '1'?'#DEDCD4':'#F5F5F5'
    return (
        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={12}>
                <Header mode={mode} />
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.Parent}>
                    <Box className={classes.PanelWrapper} style={{background:PanelWrapperColor}}>
                        <Grid container>
                            {children}
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} style={{background: '#333333'}}>
                <HomeFooter mode={mode} handleAction={handleAction}/>
            </Grid>
        </Grid>
    )
}

export default BasePanel